'use client';

import { useState } from 'react';
import { X, Copy, Download } from 'lucide-react';

export default function SnippetModal({ snippet, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !snippet) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([snippet.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${snippet.id}.${snippet.language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-gray-900 border border-gray-700 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-white">{snippet.title}</h2>
            <p className="text-gray-400 mt-1">{snippet.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Language: {snippet.language}</span>
              <span className="text-sm text-gray-400">Difficulty: {snippet.difficulty}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded font-medium transition-colors"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 px-4 py-2 rounded transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar
              </button>
            </div>
          </div>

          <div className="p-6 bg-gray-950">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code className={`language-${snippet.language}`}>
                {snippet.code}
              </code>
            </pre>
          </div>

          {snippet.explanation && (
            <div className="p-6 border-t border-gray-700 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3">Explicación</h3>
              <p className="text-gray-300 whitespace-pre-line">{snippet.explanation}</p>
            </div>
          )}

          <div className="p-6 border-t border-gray-700 bg-gray-900">
            <h4 className="text-sm font-semibold text-white mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {snippet.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}