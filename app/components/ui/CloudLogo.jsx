// app/components/ui/CloudLogo.jsx
import Image from 'next/image';

export default function CloudLogo({ provider, size = 32 }) {
  const logos = {
    aws: "/aws.png",
    google: "/google.png",
    hostinger: "/hostinger.png"
  };

  if (provider === 'hostinger') {
    return (
      <div className={`w-${size/4} h-${size/4} bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
        H
      </div>
    );
  }

  return (
    <div className={`w-${size/4} h-${size/4} bg-white rounded-lg flex items-center justify-center p-1`}>
      <Image 
        src={logos[provider]} 
        alt={provider.toUpperCase()} 
        width={size * 0.75} 
        height={size * 0.75}
        className="object-contain"
      />
    </div>
  );
}