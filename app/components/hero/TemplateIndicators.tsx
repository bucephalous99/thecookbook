'use client';

interface Props {
  current: number;
  total: number;
  onClick?: (index: number) => void;
}

export const TemplateIndicators = ({ current, total, onClick }: Props) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onClick?.(i)}
          className={`
            w-2 h-2 rounded-full transition-all duration-300
            ${i === current
              ? 'bg-white w-4'
              : 'bg-white/50 hover:bg-white/70'}
          `}
          aria-label={`Go to template ${i + 1}`}
        />
      ))}
    </div>
  );
};