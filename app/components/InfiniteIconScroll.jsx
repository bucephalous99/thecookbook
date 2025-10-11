'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function InfiniteIconScroll() {
  const serviceIcons = [
    {
      name: 'Gmail',
      image: '/gmail-logo.webp',
      alt: 'Gmail Integration',
      href: '#gmail-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'Google Sheets',
      image: '/google-sheets-logo.png',
      alt: 'Google Sheets Integration',
      href: '#sheets-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'Google Drive',
      image: '/google-drive-logo.png',
      alt: 'Google Drive Integration',
      href: '#drive-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'WhatsApp',
      image: '/whatsapp-logo.webp',
      alt: 'WhatsApp Integration',
      href: '#whatsapp-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'Instagram',
      image: '/instagram-logo.jpg',
      alt: 'Instagram Integration',
      href: '#instagram-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'Facebook',
      image: '/facebook-logo.webp',
      alt: 'Facebook Integration',
      href: '#facebook-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'Notion',
      image: '/notion-logo.png',
      alt: 'Notion Integration',
      href: '#notion-catalog' // Placeholder - need actual catalog URL
    },
    {
      name: 'Supabase',
      image: '/supabase-logo.png',
      alt: 'Supabase Integration',
      href: '#supabase-catalog' // Placeholder - need actual catalog URL
    },
  ];

  // Duplicate icons for seamless loop
  const duplicatedIcons = [...serviceIcons, ...serviceIcons, ...serviceIcons];

  return (
    <div className="w-full overflow-hidden py-16 bg-gradient-to-r from-black/40 via-purple-900/20 to-black/40 backdrop-blur-sm border-y border-white/10">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-infinite-scroll">
          {duplicatedIcons.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex-shrink-0 mx-8 group cursor-pointer"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-300
                group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]
                opacity-60 group-hover:opacity-100"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 8s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}