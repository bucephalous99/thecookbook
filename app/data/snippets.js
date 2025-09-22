// app/data/snippets.js
export const snippets = [
    {
      id: 'aws-ec2-setup',
      title: 'AWS EC2 Instance Setup',
      description: 'Configuración completa de instancia EC2 con Docker y SSL',
      category: 'aws',
      difficulty: 'intermediate',
      tags: ['aws', 'ec2', 'docker', 'ssl'],
      language: 'bash',
      code: `#!/bin/bash
  # AWS EC2 Instance Setup Script
  sudo apt update && sudo apt upgrade -y
  
  # Instalar Docker
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
  sudo usermod -aG docker $USER
  
  # Instalar Docker Compose
  sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
  
  # Configurar firewall
  sudo ufw allow ssh
  sudo ufw allow 80
  sudo ufw allow 443
  sudo ufw --force enable
  
  echo "Setup completado!"`,
      explanation: `Este script configura una instancia EC2 desde cero con Docker y herramientas básicas de seguridad.`,
      createdAt: '2025-01-15',
      downloadCount: 0
    },
    {
      id: 'docker-fullstack',
      title: 'Docker Full Stack',
      description: 'Stack completo con Postgres, Redis y Nginx',
      category: 'docker',
      difficulty: 'advanced',
      tags: ['docker', 'postgres', 'redis', 'nginx'],
      language: 'yaml',
      code: `version: '3.8'
  
  services:
    postgres:
      image: postgres:15-alpine
      environment:
        POSTGRES_DB: myapp
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: secure_password
      volumes:
        - postgres_data:/var/lib/postgresql/data
      ports:
        - "5432:5432"
  
    redis:
      image: redis:7-alpine
      command: redis-server --appendonly yes
      volumes:
        - redis_data:/data
      ports:
        - "6379:6379"
  
    app:
      build: .
      environment:
        - DATABASE_URL=postgresql://postgres:secure_password@postgres:5432/myapp
        - REDIS_URL=redis://redis:6379
      depends_on:
        - postgres
        - redis
      ports:
        - "3000:3000"
  
  volumes:
    postgres_data:
    redis_data:`,
      explanation: `Stack de producción completo con base de datos, cache y aplicación. Incluye volumes persistentes y networking automático.`,
      createdAt: '2025-01-15',
      downloadCount: 0
    },
    {
      id: 'n8n-docker-deploy',
      title: 'N8N Docker Deploy',
      description: 'Deploy completo de N8N con Docker Compose',
      category: 'automation',
      difficulty: 'beginner',
      tags: ['n8n', 'docker', 'automation'],
      language: 'yaml',
      code: `version: '3.8'
  
  services:
    n8n:
      image: docker.n8n.io/n8nio/n8n
      ports:
        - "5678:5678"
      environment:
        - N8N_HOST=localhost
        - N8N_PORT=5678
        - N8N_PROTOCOL=http
        - NODE_ENV=production
      volumes:
        - n8n_data:/home/node/.n8n
  
  volumes:
    n8n_data:`,
      explanation: `Configuración básica de N8N con Docker. Incluye persistencia de datos y configuración de producción.`,
      createdAt: '2025-01-15',
      downloadCount: 0
    }
  ];
  
  export const categories = [
    { id: 'aws', name: 'AWS', color: 'bg-orange-500' },
    { id: 'docker', name: 'Docker', color: 'bg-blue-500' },
    { id: 'automation', name: 'Automation', color: 'bg-purple-500' },
    { id: 'devops', name: 'DevOps', color: 'bg-green-500' }
  ];
  
  export const difficulties = [
    { id: 'beginner', name: 'Principiante', color: 'text-green-400' },
    { id: 'intermediate', name: 'Intermedio', color: 'text-yellow-400' },
    { id: 'advanced', name: 'Avanzado', color: 'text-red-400' }
  ];