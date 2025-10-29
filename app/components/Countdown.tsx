'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-6 md:gap-12 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="días" />
      <span className="text-3xl md:text-5xl text-white/30 font-display">:</span>
      <TimeUnit value={timeLeft.hours} label="horas" />
      <span className="text-3xl md:text-5xl text-white/30 font-display">:</span>
      <TimeUnit value={timeLeft.minutes} label="min" />
      <span className="text-3xl md:text-5xl text-white/30 font-display">:</span>
      <TimeUnit value={timeLeft.seconds} label="seg" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-5xl md:text-7xl font-display font-bold text-white tabular-nums tracking-tight">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-white/50 font-sans tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}
