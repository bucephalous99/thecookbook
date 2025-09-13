'use client'

import { useState } from 'react'
import { Check, Circle } from 'lucide-react'

interface ChecklistItem {
  id: string
  text: string
  completed?: boolean
}

interface ChecklistProps {
  items: ChecklistItem[]
  title?: string
  onToggle?: (id: string) => void
}

export default function Checklist({ items, title, onToggle }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.completed).map(item => item.id))
  )

  const handleToggle = (id: string) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id)
    } else {
      newCheckedItems.add(id)
    }
    setCheckedItems(newCheckedItems)
    onToggle?.(id)
  }

  const completedCount = checkedItems.size
  const totalCount = items.length
  const progressPercentage = (completedCount / totalCount) * 100

  return (
    <div className="architect-card p-6">
      {title && (
        <div className="mb-6">
          <h3 className="text-title mb-2">{title}</h3>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-architect-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm text-neutral-600 font-medium">
              {completedCount}/{totalCount}
            </span>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => {
          const isChecked = checkedItems.has(item.id)
          return (
            <label
              key={item.id}
              className="flex items-start space-x-3 cursor-pointer group"
            >
              <button
                onClick={() => handleToggle(item.id)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  isChecked
                    ? 'bg-architect-accent border-architect-accent text-white'
                    : 'border-neutral-300 group-hover:border-architect-accent'
                }`}
                aria-label={`${isChecked ? 'Desmarcar' : 'Marcar'} ${item.text}`}
              >
                {isChecked && <Check className="w-3 h-3" />}
              </button>
              <span className={`text-sm leading-relaxed transition-colors ${
                isChecked ? 'text-neutral-500 line-through' : 'text-neutral-700'
              }`}>
                {item.text}
              </span>
            </label>
          )
        })}
      </div>

      {completedCount === totalCount && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">
              ¡Excelente! Has completado todos los pasos.
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
