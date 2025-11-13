# 🎯 Guía Completa: Publicar en GitHub desde VS Code

## 📋 Checklist de Verificación Pre-Publicación

Antes de comenzar, verifica que tienes:

- [ ] ✅ VS Code instalado ([Descargar aquí](https://code.visualstudio.com/))
- [ ] ✅ Git instalado ([Descargar aquí](https://git-scm.com/downloads))
- [ ] ✅ Node.js 18+ instalado ([Descargar aquí](https://nodejs.org/))
- [ ] ✅ Yarn instalado (o usar npm)
- [ ] ✅ Cuenta de GitHub ([Crear aquí](https://github.com/signup))
- [ ] ✅ Todos los archivos del proyecto descargados

---

## 🚀 PASO 1: Preparar VS Code

### 1.1 Instalar Extensiones Recomendadas

Abre VS Code y instala estas extensiones (opcional pero recomendado):

1. **GitLens** - Para mejor visualización de Git
2. **GitHub Pull Requests and Issues** - Integración con GitHub
3. **ES7+ React/Redux/React-Native snippets** - Para desarrollo React
4. **Prettier** - Formateo de código
5. **Tailwind CSS IntelliSense** - Autocompletado de Tailwind

**Cómo instalar**:
- `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac)
- Buscar cada extensión e instalar

### 1.2 Abrir el Proyecto

1. Descarga TODOS los archivos del proyecto desde el botón "Files" ⬆️
2. Extrae la carpeta `nextjs_space` a una ubicación permanente, por ejemplo:
   - Windows: `C:\Proyectos\cartilla-pgirs-sanpedro\`
   - Mac/Linux: `~/Proyectos/cartilla-pgirs-sanpedro/`
3. Abre VS Code
4. **File → Open Folder** (o `Ctrl+K Ctrl+O`)
5. Selecciona la carpeta `nextjs_space`

---

## 🔧 PASO 2: Configurar Git en VS Code

### 2.1 Verificar Instalación de Git

Abre la terminal integrada en VS Code:
- **Ver → Terminal** (o `Ctrl+ñ` / `` Ctrl+` ``)

Ejecuta:
```bash
git --version
```

**Resultado esperado**: `git version 2.x.x`

**Si no está instalado**:
- Windows: Descarga [Git para Windows](https://git-scm.com/download/win)
- Mac: `brew install git` (con Homebrew) o descarga [aquí](https://git-scm.com/download/mac)
- Linux: `sudo apt-get install git`

### 2.2 Configurar Usuario de Git (PRIMERA VEZ)

En la terminal de VS Code, ejecuta:

```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu_email@ejemplo.com"
```

**Nota**: Usa el MISMO email que tienes en GitHub.

**Verificar configuración**:
```bash
git config --global user.name
git config --global user.email
```

---

## 📦 PASO 3: Instalar Dependencias

En la terminal de VS Code (dentro de la carpeta del proyecto):

```bash
# Verificar que estás en la carpeta correcta
pwd  # Mac/Linux
cd   # Windows

# Debería mostrar: .../cartilla-pgirs-sanpedro/nextjs_space
```

**Instalar con Yarn** (recomendado):
```bash
yarn install
```

**O con npm**:
```bash
npm install
```

**Tiempo estimado**: 2-5 minutos

**Resultado esperado**:
- Se crea la carpeta `node_modules/`
- Mensaje final: "✨ Done in X.XXs"

---

## 🔐 PASO 4: Verificar Archivos de Seguridad

### 4.1 Verificar `.gitignore`

Abre el archivo `.gitignore` en VS Code y verifica que contiene:

```
# Dependencies
/node_modules

# Next.js
/.next/
/.build/

# Environment variables
.env
.env*.local
```

**✅ IMPORTANTE**: Si `.gitignore` no existe o está vacío, CRÉALO con este contenido.

### 4.2 Verificar `.env` (NO SE DEBE SUBIR)

1. Abre `.env` y verifica que contiene tu clave API:
   ```
   ABACUSAI_API_KEY="87e150e5ce0a46a1af959451b8b2f221"
   ```

2. **MUY IMPORTANTE**: Este archivo **NO** se subirá a GitHub gracias a `.gitignore`

3. Verifica que existe `.env.example` (este SÍ se sube, sin claves reales)

---

## 🎨 PASO 5: Inicializar Git desde VS Code

### Opción A: Usando la Interfaz Gráfica de VS Code

1. **Abrir el panel de Git**:
   - Clic en el ícono de Git en la barra lateral izquierda (tercer ícono)
   - O presiona `Ctrl+Shift+G`

2. **Inicializar repositorio**:
   - Clic en el botón **"Initialize Repository"**
   - Se creará la carpeta oculta `.git/`

3. **Ver cambios**:
   - Verás todos los archivos en "Changes" (U = Untracked)

4. **Agregar todos los archivos**:
   - Pasa el cursor sobre "Changes"
   - Clic en el ícono **"+"** (Stage All Changes)
   - Todos los archivos pasan a "Staged Changes"

5. **Crear el primer commit**:
   - En el cuadro de texto arriba, escribe:
     ```
     🎉 Versión inicial: Cartilla PGIRS San Pedro 2025-2036
     ```
   - Clic en **"✓ Commit"** o presiona `Ctrl+Enter`

### Opción B: Usando la Terminal de VS Code

```bash
# Inicializar repositorio
git init

# Ver estado
git status

# Agregar todos los archivos
git add .

# Verificar qué se va a subir (NO debe aparecer .env)
git status

# Crear primer commit
git commit -m "🎉 Versión inicial: Cartilla PGIRS San Pedro 2025-2036"

# Renombrar rama a main
git branch -M main
```

---

## 🌐 PASO 6: Crear Repositorio en GitHub

### 6.1 Crear el Repositorio

1. Ve a [github.com/new](https://github.com/new)
2. Completa los campos:
   - **Repository name**: `cartilla-pgirs-sanpedro`
   - **Description**: `Cartilla Digital PGIRS San Pedro 2025-2036 - Municipio de San Pedro, Valle del Cauca`
   - **Public** o **Private** (recomiendo **Public**)
   - ❌ **NO** marques "Add a README file"
   - ❌ **NO** marques "Add .gitignore"
   - ❌ **NO** marques "Choose a license"
3. Clic en **"Create repository"**

### 6.2 Copiar la URL del Repositorio

Después de crear el repositorio, verás una página con instrucciones.

Copia la URL HTTPS (algo como):
```
https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro.git
```

---

## 🚀 PASO 7: Conectar y Subir a GitHub

### Opción A: Desde VS Code (Interfaz Gráfica)

1. **Abrir el panel de Git** (`Ctrl+Shift+G`)

2. **Agregar remoto**:
   - Clic en los 3 puntos (...) arriba → **Remote → Add Remote**
   - Pega la URL de tu repositorio
   - Nombre: `origin` (por defecto)

3. **Publicar en GitHub**:
   - Clic en los 3 puntos (...) → **Push**
   - O clic en el botón **"Publish Branch"** (si aparece)

4. **Autenticación**:
   - Te pedirá autenticarte en GitHub
   - Usa tu **Personal Access Token** (no contraseña)

### Opción B: Desde la Terminal de VS Code

```bash
# Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro.git

# Verificar conexión
git remote -v

# Subir código
git push -u origin main
```

---

## 🔑 PASO 8: Autenticación en GitHub

### 8.1 Si te pide Usuario y Contraseña

**⚠️ IMPORTANTE**: GitHub ya NO acepta contraseñas. Necesitas un **Personal Access Token**.

### 8.2 Crear Personal Access Token

1. Ve a [github.com/settings/tokens](https://github.com/settings/tokens)
2. Clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Configuración:
   - **Note**: `VS Code - Cartilla PGIRS`
   - **Expiration**: `90 days` (o el que prefieras)
   - **Scopes**: Marca **`repo`** (acceso completo a repositorios)
4. Clic en **"Generate token"**
5. **COPIA EL TOKEN** (solo se muestra una vez)
   - Ejemplo: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
6. **Úsalo como contraseña** cuando VS Code lo pida

### 8.3 Guardar Credenciales (Opcional)

Para no tener que ingresar el token cada vez:

**Windows**:
```bash
git config --global credential.helper wincred
```

**Mac**:
```bash
git config --global credential.helper osxkeychain
```

**Linux**:
```bash
git config --global credential.helper store
```

---

## ✅ PASO 9: Verificar que Todo Está en GitHub

1. Ve a `https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro`
2. Deberías ver:
   - ✅ Carpetas: `app/`, `components/`, `lib/`, `public/`
   - ✅ Archivos: `README.md`, `package.json`, `LICENSE`
   - ✅ **NO** debe aparecer: `.env`, `node_modules/`, `.next/`

3. **Verificar `.env` NO está**:
   - Si ves `.env` en GitHub, ¡PELIGRO! Eliminalo inmediatamente

---

## 🎉 PASO 10: Probar el Proyecto Localmente

Antes de considerar terminado, prueba que funciona:

### 10.1 Ejecutar en Desarrollo

En la terminal de VS Code:

```bash
yarn dev
# o
npm run dev
```

### 10.2 Abrir en el Navegador

Abre: [http://localhost:3000](http://localhost:3000)

**Verificar**:
- ✅ Se carga la página de inicio
- ✅ El avatar/guía funciona
- ✅ La navegación entre secciones funciona
- ✅ Los gráficos se muestran correctamente

### 10.3 Detener el Servidor

En la terminal: `Ctrl+C`

---

## 📝 COMANDOS GIT ÚTILES EN VS CODE

### Usando la Terminal

```bash
# Ver estado actual
git status

# Ver historial de commits
git log --oneline

# Ver cambios antes de commitear
git diff

# Agregar archivo específico
git add archivo.tsx

# Agregar todos los cambios
git add .

# Crear commit
git commit -m "Descripción del cambio"

# Subir cambios
git push

# Ver ramas
git branch

# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar de rama
git checkout main

# Actualizar desde GitHub
git pull
```

### Usando la Interfaz de VS Code

- **Ver cambios**: Panel de Git (`Ctrl+Shift+G`)
- **Comparar archivos**: Clic en archivo modificado
- **Deshacer cambios**: Clic derecho → Discard Changes
- **Commit**: Escribir mensaje y `Ctrl+Enter`
- **Push**: Clic en los 3 puntos → Push
- **Pull**: Clic en los 3 puntos → Pull

---

## 🆘 Solución de Problemas Comunes

### Problema 1: "Git no reconocido"

**Error**: `'git' is not recognized as an internal or external command`

**Solución**:
1. Instala Git desde [git-scm.com](https://git-scm.com/downloads)
2. Reinicia VS Code
3. Verifica: `git --version`

### Problema 2: ".env aparece en GitHub"

**Error**: Subiste accidentalmente tu clave API

**Solución URGENTE**:
```bash
# Eliminar del repositorio (mantener local)
git rm --cached .env
git commit -m "Eliminar .env del repositorio"
git push

# Luego, REGENERA tu API key en Abacus.AI
```

### Problema 3: "Permission denied"

**Error**: No puedes hacer push

**Solución**:
1. Verifica que usas un Personal Access Token (no contraseña)
2. Crea uno nuevo en [github.com/settings/tokens](https://github.com/settings/tokens)
3. Usa el token como contraseña

### Problema 4: "node_modules se está subiendo"

**Error**: Git quiere subir 50,000+ archivos

**Solución**:
1. Verifica que `.gitignore` contiene `/node_modules`
2. Si ya lo subiste:
   ```bash
   git rm -r --cached node_modules
   git commit -m "Eliminar node_modules"
   git push
   ```

### Problema 5: "Yarn no encontrado"

**Error**: `'yarn' is not recognized`

**Solución**:
```bash
# Instalar Yarn globalmente
npm install -g yarn

# O usa npm en su lugar
npm install
npm run dev
```

### Problema 6: "Conflictos de merge"

**Error**: Archivos en conflicto al hacer pull

**Solución en VS Code**:
1. Abre el archivo en conflicto
2. Verás marcadores como:
   ```
   <<<<<<< HEAD
   tu código
   =======
   código de GitHub
   >>>>>>> origin/main
   ```
3. Elige qué versión mantener (o edita manualmente)
4. Guarda el archivo
5. Stage y commit los cambios

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [VS Code Git Documentation](https://code.visualstudio.com/docs/editor/versioncontrol)
- [GitHub Docs](https://docs.github.com/es)
- [Next.js Documentation](https://nextjs.org/docs)

### Tutoriales en Video

- [Git y GitHub en VS Code](https://www.youtube.com/results?search_query=git+github+vscode+español)
- [Next.js para principiantes](https://www.youtube.com/results?search_query=nextjs+tutorial+español)

### Comandos de Referencia Rápida

Descarga el PDF "Git Cheat Sheet" desde:
- [GitHub Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## 🎯 Checklist Final

Marca cada elemento cuando lo completes:

- [ ] ✅ VS Code instalado y configurado
- [ ] ✅ Git instalado y configurado (usuario y email)
- [ ] ✅ Proyecto abierto en VS Code
- [ ] ✅ Dependencias instaladas (`yarn install`)
- [ ] ✅ `.gitignore` verificado
- [ ] ✅ `.env` protegido (NO se sube)
- [ ] ✅ Repositorio Git inicializado
- [ ] ✅ Primer commit creado
- [ ] ✅ Repositorio creado en GitHub
- [ ] ✅ Código subido a GitHub
- [ ] ✅ Verificado que `.env` NO está en GitHub
- [ ] ✅ Proyecto funciona localmente (`yarn dev`)
- [ ] ✅ README.md actualizado (opcional)

---

## 🎉 ¡Felicitaciones!

Si completaste todos los pasos, tu proyecto está:
- ✅ Publicado en GitHub
- ✅ Protegido (sin exponer claves API)
- ✅ Documentado profesionalmente
- ✅ Listo para colaboración
- ✅ Preparado para despliegue en Vercel/Netlify

---

## 🚀 Próximos Pasos (Opcionales)

### 1. Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com/signup)
2. Inicia sesión con GitHub
3. Importa tu repositorio
4. Agrega la variable de entorno `ABACUSAI_API_KEY`
5. Deploy!

### 2. Colaborar con tu Equipo

1. Comparte la URL del repositorio
2. Agregar colaboradores: **Settings → Collaborators → Add people**
3. Usa branches para nuevas funcionalidades

### 3. Mantener el Proyecto Actualizado

```bash
# Actualizar código después de cambios
git add .
git commit -m "Descripción de cambios"
git push

# Descargar cambios de otros
git pull
```

---

**¿Tienes problemas?** Consulta la sección "Solución de Problemas" o lee `PUBLICAR_EN_GITHUB.md` para más detalles.

**¿Todo funcionó?** ¡Comparte tu proyecto con el mundo! 🌍
