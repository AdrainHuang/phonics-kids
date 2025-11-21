import React from 'react';
import { Star } from 'lucide-react';

export const SparkleEffect: React.FC = () => {
  // Generate random positions for sparkles
  const sparkles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${50 + (Math.random() - 0.5) * 200}%`, // Spread out around the center
    top: `${50 + (Math.random() - 0.5) * 200}%`,
    color: ['#fbbf24', '#f59e0b', '#fcd34d', '#ffffff'][Math.floor(Math.random() * 4)],
    size: 12 + Math.random() * 12,
    delay: Math.random() * 0.5,
    duration: 0.6 + Math.random() * 0.4
  }));

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-30">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`
          }}
        >
          <Star 
            size={s.size} 
            fill={s.color} 
            className="text-transparent drop-shadow-sm" 
            strokeWidth={0}
          />
        </div>
      ))}
    </div>
  );
};