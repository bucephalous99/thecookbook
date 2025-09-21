'use client'

import { useState } from 'react'
import Button from '../ui/button'
import Input from '../ui/input'

interface PDFDownloadFormProps {
  pdfTitle: string
  pdfUrl: string
  onDownload?: (data: any) => void
}

export default function PDFDownloadForm({ pdfTitle, pdfUrl, onDownload }: PDFDownloadFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    howFound: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Guardar lead en Supabase
      const response = await fetch('/api/downloads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          resourceTitle: pdfTitle
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        onDownload?.(formData)
        
        // Iniciar descarga automática
        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = `${pdfTitle}.pdf`
        link.click()
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-medium text-green-800 mb-2">
          ¡Descarga iniciada!
        </h3>
        <p className="text-green-600 mb-4">
          Tu descarga debería comenzar automáticamente. Si no es así, 
          <a href={pdfUrl} className="underline ml-1">haz clic aquí</a>.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
        >
          Descargar otro recurso
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Descargar: {pdfTitle}
      </h3>
      <p className="text-gray-600 mb-6">
        Completa tus datos para acceder al recurso
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="tu@email.com"
        />

        <Input
          label="Nombre completo"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Tu nombre"
        />

        <Input
          label="Empresa (opcional)"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          placeholder="Nombre de tu empresa"
        />

        <Input
          label="Teléfono (opcional)"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+507 1234-5678"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Cómo nos encontraste?
          </label>
          <select
            value={formData.howFound}
            onChange={(e) => setFormData({...formData, howFound: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona una opción</option>
            <option value="google">Google</option>
            <option value="social">Redes sociales</option>
            <option value="referral">Recomendación</option>
            <option value="direct">Acceso directo</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          loading={isSubmitting}
          disabled={!formData.email || !formData.name}
        >
          {isSubmitting ? 'Procesando...' : 'Descargar PDF'}
        </Button>
      </form>
    </div>
  )
}