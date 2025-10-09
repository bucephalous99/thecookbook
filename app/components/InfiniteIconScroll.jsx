'use client';

import {
  Brain, Code, Zap, Sparkles, Bot, MessageCircle,
  TrendingUp, Target, Rocket, Shield, Star, Heart,
  Coffee, Gift, Clock, CheckCircle, Users, Layers
} from 'lucide-react';

export default function InfiniteIconScroll() {
  const icons = [
    { Icon: Brain, color: 'text-purple-400' },
    { Icon: Code, color: 'text-blue-400' },
    { Icon: Zap, color: 'text-yellow-400' },
    { Icon: Sparkles, color: 'text-pink-400' },
    { Icon: Bot, color: 'text-teal-400' },
    { Icon: MessageCircle, color: 'text-cyan-400' },
    { Icon: TrendingUp, color: 'text-green-400' },
    { Icon: Target, color: 'text-rose-400' },
    { Icon: Rocket, color: 'text-orange-400' },
    { Icon: Shield, color: 'text-indigo-400' },
    { Icon: Star, color: 'text-amber-400' },
    { Icon: Heart, color: 'text-red-400' },
    { Icon: Coffee, color: 'text-yellow-500' },
    { Icon: Gift, color: 'text-pink-500' },
    { Icon: Clock, color: 'text-blue-500' },
    { Icon: CheckCircle, color: 'text-green-500' },
    { Icon: Users, color: 'text-purple-500' },
    { Icon: Layers, color: 'text-teal-500' },
  ];

  // Duplicate icons for seamless loop
  const duplicatedIcons = [...icons, ...icons, ...icons];

  return (
    <div className="w-full overflow-hidden py-16 bg-gradient-to-r from-black/40 via-purple-900/20 to-black/40 backdrop-blur-sm border-y border-white/10">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-infinite-scroll">
          {duplicatedIcons.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                className="flex-shrink-0 mx-8 group cursor-pointer"
              >
                <div className={`
                  ${item.color}
                  transition-all duration-300
                  group-hover:scale-125
                  group-hover:drop-shadow-[0_0_20px_currentColor]
                  opacity-60 group-hover:opacity-100
                `}>
                  <Icon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.8} />
                </div>
              </div>
            );
          })}
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
