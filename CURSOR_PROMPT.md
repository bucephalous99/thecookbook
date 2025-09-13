# Prompt para Cursor: Publicación de Guía Técnica en Blog de Cocina

## Contexto del Proyecto
Estoy trabajando en un blog de recetas llamado "CookBook" con estilo arquitectónico minimalista. El blog está construido con Next.js 15, TypeScript, Tailwind CSS y tiene las siguientes características:

- **Estilo visual**: Minimalista, limpio y moderno con tonos negros, grises y blancos con acento naranja (#FF6B35)
- **Tipografía**: Inter (sans-serif) con pesos bold y espaciado amplio
- **Estructura**: Home, páginas de recetas individuales, archivo de recetas con filtros, sobre mí, contacto
- **Funcionalidades**: Widget de IA para recetas, sistema de tarjetas de recetas, navegación responsive

## Objetivo
Necesito publicar una guía técnica completa sobre "Configuración de n8n en AWS con Seguridad Empresarial" en el blog, pero adaptándola al contexto culinario del sitio. La guía debe:

1. **Mantener el contenido técnico original** pero con analogías culinarias
2. **Usar el estilo arquitectónico** del blog existente
3. **Seguir la estructura de recetas** del sitio (ingredientes, pasos, consejos)
4. **Incluir el widget de IA** para resolver dudas técnicas
5. **Ser completamente funcional** como una página del blog

## Estructura Requerida

### 1. Página Principal de la Guía
- **Ruta**: `/recetas/configuracion-n8n-aws-seguridad-empresarial`
- **Título**: "Configuración de n8n en AWS: Receta para Automatización Empresarial Segura"
- **Meta descripción**: "Guía paso a paso para configurar n8n en AWS con las mejores prácticas de seguridad empresarial"
- **Imagen destacada**: Imagen relacionada con automatización/tecnología

### 2. Adaptación del Contenido
Transformar la guía técnica en formato de "receta culinaria":

#### Ingredientes (Requisitos)
- Servidor AWS EC2
- Dominio propio
- Certificado SSL
- Docker y Docker Compose
- etc.

#### Preparación (Pasos)
- Paso 1: Lanzamiento de Instancia EC2
- Paso 2: Configuración de Grupos de Seguridad
- Paso 3: IP Elástica y DNS
- etc.

#### Consejos del Chef (Best Practices)
- Seguridad
- Optimización
- Mantenimiento
- etc.

### 3. Componentes a Crear/Modificar

#### Archivo Markdown
- Crear `/src/content/recipes/configuracion-n8n-aws-seguridad-empresarial.md`
- Formato compatible con el sistema de recetas existente
- Metadatos estructurados

#### Componentes Específicos
- Adaptar `RecipeCard` para mostrar guías técnicas
- Modificar `AIWidget` para responder preguntas técnicas sobre n8n/AWS
- Crear componente para mostrar comandos de terminal con syntax highlighting

### 4. Estilo Visual
- Usar las clases CSS arquitectónicas existentes
- Mantener la paleta de colores (negro, grises, blanco, naranja)
- Aplicar tipografía Inter con pesos apropiados
- Usar cards con hover effects
- Implementar animaciones suaves

### 5. Funcionalidades Especiales
- **Syntax highlighting** para comandos de terminal
- **Tabs o acordeones** para diferentes secciones
- **Código copiable** para comandos
- **Checklist interactivo** para verificar pasos
- **Widget de IA** especializado en DevOps/AWS

## Archivos a Crear/Modificar

1. **`/src/content/recipes/configuracion-n8n-aws-seguridad-empresarial.md`**
   - Contenido principal en formato Markdown
   - Metadatos de la receta
   - Estructura de ingredientes, pasos, consejos

2. **`/src/components/ui/CodeBlock.tsx`**
   - Componente para mostrar código con syntax highlighting
   - Botón de copiar código
   - Estilo arquitectónico

3. **`/src/components/ui/Checklist.tsx`**
   - Checklist interactivo para verificar pasos
   - Animaciones de completado
   - Persistencia en localStorage

4. **`/src/components/ui/Tabs.tsx`**
   - Componente de tabs para organizar contenido
   - Estilo arquitectónico
   - Responsive

5. **Modificar `/src/components/ui/AIWidget.tsx`**
   - Agregar conocimiento específico sobre n8n/AWS
   - Respuestas contextuales para DevOps
   - Preguntas rápidas técnicas

## Especificaciones Técnicas

### Metadatos de la Receta
```yaml
title: "Configuración de n8n en AWS: Receta para Automatización Empresarial Segura"
description: "Guía paso a paso para configurar n8n en AWS con las mejores prácticas de seguridad empresarial"
prepTime: "2 horas"
cookTime: "1 hora"
totalTime: "3 horas"
servings: "1 servidor"
difficulty: "Avanzado"
category: "DevOps"
date: "2024-01-20"
slug: "configuracion-n8n-aws-seguridad-empresarial"
```

### Estructura del Contenido
- **Introducción**: Analogía culinaria sobre "cocinar" automatización
- **Ingredientes**: Lista de requisitos técnicos
- **Preparación**: Pasos detallados con comandos
- **Consejos del Chef**: Best practices y optimizaciones
- **Información Nutricional**: Beneficios y características del setup

### Integración con IA
El widget de IA debe poder responder preguntas como:
- "¿Cómo cambio el puerto de n8n?"
- "¿Qué hacer si el certificado SSL falla?"
- "¿Cómo optimizo el rendimiento?"
- "¿Cuál es la mejor práctica para backups?"

## Resultado Esperado
Una página completamente funcional que:
1. Mantiene el estilo arquitectónico del blog
2. Presenta contenido técnico complejo de manera accesible
3. Usa analogías culinarias apropiadas
4. Incluye todas las funcionalidades interactivas
5. Es responsive y accesible
6. Integra perfectamente con el sistema existente

## Notas Adicionales
- Mantener el tono profesional pero accesible
- Usar terminología técnica precisa pero explicada
- Incluir enlaces a recursos externos relevantes
- Asegurar que todos los comandos sean funcionales
- Probar todas las funcionalidades antes de publicar

¿Puedes ayudarme a implementar esta guía técnica adaptada al contexto culinario del blog?
