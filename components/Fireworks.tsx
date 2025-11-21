import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  color: string;
  velocity: { x: number; y: number };
  alpha: number;
  life: number;
}

export const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    const createExplosion = (x: number, y: number) => {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x,
          y,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10
          },
          alpha: 1,
          life: 100
        });
      }
    };

    // Trigger random explosions
    createExplosion(window.innerWidth / 2, window.innerHeight / 2);
    setTimeout(() => createExplosion(window.innerWidth / 3, window.innerHeight / 3), 200);
    setTimeout(() => createExplosion(window.innerWidth * 0.6, window.innerHeight * 0.4), 400);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.velocity.y += 0.05; // gravity
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.alpha -= 0.01;
        p.life--;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      if (particles.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};