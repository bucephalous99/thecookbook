'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="architect-card overflow-hidden">
      {title && (
        <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-200">
          <h4 className="text-sm font-medium text-neutral-700">{title}</h4>
        </div>
      )}
      <div className="relative">
        <pre className="bg-neutral-900 text-neutral-100 p-4 overflow-x-auto text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300 hover:text-white transition-colors"
          aria-label="Copiar código"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  )
}
