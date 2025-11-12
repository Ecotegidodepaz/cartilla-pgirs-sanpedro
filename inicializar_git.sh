#!/bin/bash

echo "🚀 Inicializando repositorio Git para Cartilla PGIRS San Pedro"
echo "================================================================"
echo ""

# Verificar si Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git no está instalado"
    echo "Instala Git primero: sudo apt-get install git"
    exit 1
fi

# Verificar configuración de Git
if [ -z "$(git config --global user.name)" ]; then
    echo "⚠️  Configuración de Git necesaria"
    echo ""
    read -p "Ingresa tu nombre: " name
    read -p "Ingresa tu email: " email
    git config --global user.name "$name"
    git config --global user.email "$email"
    echo "✅ Git configurado correctamente"
    echo ""
fi

# Inicializar repositorio si no existe
if [ ! -d ".git" ]; then
    git init
    echo "✅ Repositorio inicializado"
else
    echo "ℹ️  El repositorio Git ya está inicializado"
fi

# Agregar archivos
echo ""
echo "📦 Agregando archivos..."
git add .

# Crear commit
echo ""
echo "💾 Creando primer commit..."
git commit -m "🎉 Versión inicial: Cartilla Digital PGIRS San Pedro 2025-2036"

# Renombrar rama
git branch -M main

echo ""
echo "✅ ¡Repositorio listo!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Crea un repositorio en GitHub: https://github.com/new"
echo "2. Ejecuta estos comandos (reemplaza TU_USUARIO):"
echo ""
echo "   git remote add origin https://github.com/TU_USUARIO/cartilla-pgirs-sanpedro.git"
echo "   git push -u origin main"
echo ""
echo "📖 Lee PUBLICAR_EN_GITHUB.md para más detalles"
