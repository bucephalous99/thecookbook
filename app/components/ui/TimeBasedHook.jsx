'use client';

import { useState, useEffect } from 'react';

const TimeBasedHook = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setMessage('¿Ya pensaste en TODO lo que tienes que hacer hoy?');
    } else if (hour >= 12 && hour < 18) {
      setMessage('¿A qué hora vas a terminar hoy?');
    } else if (hour >= 18 && hour < 24) {
      setMessage('¿Cuándo fue la última vez que saliste a tiempo?');
    } else {
      setMessage(`Son las ${hour}:00. ¿Por qué sigues trabajando?`);
    }
  }, []);

  return (
    <p className="text-lg text-gray-300 mb-4 animate-pulse">
      {message}
    </p>
  );
};

export default TimeBasedHook;
