
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { text, section } = await request.json();
    
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const prompt = `Como avatar profesional del PGIRS de San Pedro, Valle del Cauca, necesito narrar de forma clara y didáctica el siguiente contenido de la sección "${section || 'general'}". 

Por favor, genera una narración en español de máximo 200 palabras que sea:
- Profesional pero accesible
- Clara y didáctica  
- Respetuosa del contenido técnico
- Orientada a ciudadanos interesados en el plan de residuos

Contenido a narrar: ${text}

Responde únicamente con la narración, sin introducción ni explicaciones adicionales.`;

    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [{ role: 'user', content: prompt }],
        stream: true,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from LLM API');
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.error(new Error('No reader available'));
          return;
        }

        const decoder = new TextDecoder();
        const encoder = new TextEncoder();

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            controller.enqueue(encoder.encode(chunk));
          }
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    });

  } catch (error) {
    console.error('Avatar speech API error:', error);
    return NextResponse.json({ 
      error: 'Error generating speech content'
    }, { status: 500 });
  }
}
