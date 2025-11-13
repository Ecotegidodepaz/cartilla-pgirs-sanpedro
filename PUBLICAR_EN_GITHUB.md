
# 📤 Guía para Publicar en GitHub

## ✅ Prerrequisitos

1. **Cuenta de GitHub**: [Crear cuenta gratis](https://github.com/signup) si no tienes
2. **Git instalado**: Verificar con `git --version`
3. **Configurar Git** (solo primera vez):

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## 🚀 Opción 1: Publicación Rápida (Recomendada)

### Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `cartilla-pgirs-sanpedro`
3. Descripción: `Cartilla Digital PGIRS San Pedro 2025-2036`
4. Selecciona **Público** o **Privado**
5. ❌ **NO** marques "Initialize with README" (ya lo tenemos)
6. Clic en **"Create repository"**

### Paso 2: Subir el Código

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
cd /home/ubuntu/cartilla_pgirs_sanpedro/nextjs_space

# Inicializar repositorio Git
git init

# Agregar todos los archivos (excepto los del .gitignore)
git add .

# Crear primer commit
git commit -m "🎉 Versión inicial: Cartilla Digital PGIRS San Pedro 2025-2036"

# Renombrar rama a main
git branch -M main

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro.git

# Subir código
git push -u origin main
```

**Nota**: GitHub te pedirá autenticación. Usa un [Personal Access Token](https://github.com/settings/tokens) en vez de contraseña.

### Paso 3: Verificar

Ve a `https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro` y verás tu código publicado ✅

---

## 🌐 Opción 2: Desplegar en Vercel (Hosting Gratis)

Vercel es perfecto para Next.js y ofrece hosting gratuito:

### Método A: Desde GitHub (Automático)

1. Ve a [vercel.com](https://vercel.com/signup)
2. Inicia sesión con GitHub
3. Clic en **"Import Project"**
4. Selecciona tu repositorio `cartilla-pgirs-sanpedro`
5. Agrega la variable de entorno:
   - Key: `ABACUSAI_API_KEY`
   - Value: `tu_clave_api_real`
6. Clic en **"Deploy"**

¡Listo! Tu cartilla estará en: `https://cartilla-pgirs-sanpedro.vercel.app`

### Método B: CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar (desde la carpeta nextjs_space)
cd /home/ubuntu/cartilla_pgirs_sanpedro/nextjs_space
vercel

# Seguir el asistente interactivo
# Configurar ABACUSAI_API_KEY cuando lo solicite
```

---

## 📊 Opción 3: GitHub Pages (Solo Frontend Estático)

**⚠️ Limitación**: GitHub Pages no soporta APIs de Next.js, así que la generación de narrativa no funcionará.

Para exportar como sitio estático:

```bash
# Modificar next.config.js
echo "module.exports = { output: 'export' }" > next.config.js

# Construir
yarn build

# El sitio estará en /out
# Subir la carpeta /out a la rama gh-pages
```

---

## 🔐 Seguridad: Variables de Entorno

### ❌ NUNCA subas estos archivos:
- `.env` (protegido por .gitignore)
- Claves API en el código
- Contraseñas o tokens

### ✅ Buenas prácticas:
- Usa `.env.example` con valores de ejemplo
- Configura variables en Vercel/Netlify
- Documenta en README.md qué variables se necesitan

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro.git
```

### Error: "Permission denied"
- Usa un [Personal Access Token](https://github.com/settings/tokens) en vez de contraseña
- O configura [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Archivos muy grandes
GitHub tiene límite de 100MB por archivo. Si tienes archivos grandes:
```bash
# Ver archivos grandes
find . -type f -size +50M

# Usar Git LFS para archivos grandes
git lfs install
git lfs track "*.mp4"
git lfs track "*.webm"
```

---

## 📝 Comandos Útiles

```bash
# Ver estado de archivos
git status

# Ver historial de commits
git log --oneline

# Actualizar después de hacer cambios
git add .
git commit -m "Descripción del cambio"
git push

# Crear una nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar entre ramas
git checkout main
```

---

## 🎯 Próximos Pasos

1. ✅ Publicar en GitHub
2. 🌐 Desplegar en Vercel
3. 📝 Agregar badge de estado al README:
   ```markdown
   ![Vercel](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployments%2Fgranted-access-list.png&w=1920&q=75)
   ```
4. 📧 Compartir URL con el equipo
5. 🔄 Configurar CI/CD automático (Vercel lo hace por defecto)

---

## 💡 Recomendaciones

- **Actualiza el README.md** con la URL de tu demo cuando esté desplegada
- **Crea Issues** en GitHub para reportar bugs o sugerencias
- **Usa branches** para nuevas funcionalidades
- **Haz commits frecuentes** con mensajes descriptivos

---

¿Necesitas ayuda? Consulta la [documentación oficial de GitHub](https://docs.github.com/es)
