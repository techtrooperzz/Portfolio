import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Attach listener to the parent container for better localized hover detection
    const parentContainer = canvas.parentElement;
    if (parentContainer) {
      parentContainer.addEventListener('mousemove', handleMouseMove);
      parentContainer.addEventListener('mouseleave', handleMouseLeave);
      parentContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const rect = canvas.getBoundingClientRect();
          mouseRef.current.targetX = e.touches[0].clientX - rect.left;
          mouseRef.current.targetY = e.touches[0].clientY - rect.top;
          mouseRef.current.active = true;
        }
      });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Initialize stars/particles
    const particleCount = 50;
    const particles: Array<{
      x: number;
      y: number;
      ox: number;
      oy: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      pulseDirection: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        ox: x,
        oy: y,
        r: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.4 + 0.1,
        color: i % 2 === 0 ? '124, 58, 237' : '167, 139, 250', // Violet vs Lavender Accent
        pulseDirection: Math.random() > 0.5 ? 0.005 : -0.005
      });
    }

    // Create 3 organic fluid waves with unique periodic phases and styles
    interface Wave {
      frequency: number;
      amplitude: number;
      targetAmplitude: number;
      yOffset: number;
      speed: number;
      phase: number;
      color: string;
      lineWidth: number;
    }

    const waves: Wave[] = [
      {
        frequency: 0.0009,
        amplitude: 80,
        targetAmplitude: 80,
        yOffset: 0.5,
        speed: 0.006,
        phase: 0,
        color: 'rgba(124, 58, 237, 0.07)',
        lineWidth: 1.5,
      },
      {
        frequency: 0.0015,
        amplitude: 50,
        targetAmplitude: 50,
        yOffset: 0.58,
        speed: -0.005,
        phase: Math.PI * 0.4,
        color: 'rgba(167, 139, 250, 0.04)',
        lineWidth: 1.0,
      },
      {
        frequency: 0.0006,
        amplitude: 110,
        targetAmplitude: 110,
        yOffset: 0.42,
        speed: 0.003,
        phase: Math.PI * 0.8,
        color: 'rgba(124, 58, 237, 0.03)',
        lineWidth: 2.0,
      }
    ];

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate mouse drag coordinates
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      t += 0.4;

      // Draw active modern background subtle lighting nodes
      if (mouse.active) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 350
        );
        spotGrad.addColorStop(0, 'rgba(124, 58, 237, 0.08)');
        spotGrad.addColorStop(0.5, 'rgba(124, 58, 237, 0.01)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 350, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw dynamic waves
      waves.forEach((wave) => {
        wave.phase += wave.speed;
        
        // Elevate amplitude near cursor
        if (mouse.active) {
          const dy = Math.abs(mouse.y - (height * wave.yOffset));
          const influenceRange = height * 0.4;
          if (dy < influenceRange) {
            const factor = 1 - dy / influenceRange;
            wave.targetAmplitude = wave.amplitude * (1 + factor * 0.5);
          } else {
            wave.targetAmplitude = wave.amplitude;
          }
        } else {
          wave.targetAmplitude = wave.amplitude;
        }

        // Dampen amplitude transition state speeds
        const currentAmp = wave.targetAmplitude;

        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;

        // Draw individual line segments
        for (let x = 0; x <= width + 10; x += 4) {
          let y = Math.sin(x * wave.frequency + wave.phase) * currentAmp;

          // Introduce horizontal distortion near mouse cursor
          if (mouse.active) {
            const dx = x - mouse.x;
            const dist = Math.abs(dx);
            if (dist < 300) {
              const pushFactor = (1 - dist / 300) * 20;
              const dyInput = mouse.y - (height * wave.yOffset + y);
              const pushDirection = dyInput > 0 ? -1 : 1;
              y += pushDirection * pushFactor;
            }
          }

          // Generate custom overlay harmonic coordinates
          const finalY = height * wave.yOffset + y + Math.cos(x * 0.003 + t * 0.01) * 8;

          if (x === 0) {
            ctx.moveTo(x, finalY);
          } else {
            ctx.lineTo(x, finalY);
          }
        }
        ctx.stroke();
      });

      // Update and render ambient glowing particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Pulse alpha for fine celestial shimmer feel
        p.alpha += p.pulseDirection;
        if (p.alpha > 0.45) {
          p.alpha = 0.45;
          p.pulseDirection = -0.004;
        } else if (p.alpha < 0.08) {
          p.alpha = 0.08;
          p.pulseDirection = 0.004;
        }

        // React with edge bounds beautifully
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Disperse when mouse hover enters gravity radius
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            const dirX = dist > 0 ? dx / dist : 1;
            const dirY = dist > 0 ? dy / dist : 1;
            // Push particles away smoothly
            p.x += dirX * force * 2.0;
            p.y += dirY * force * 2.0;
          }
        }

        // Draw glow effect and core of particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
        
        if (p.alpha > 0.25) {
          // Inner glowing node center core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 1.5})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parentContainer) {
        parentContainer.removeEventListener('mousemove', handleMouseMove);
        parentContainer.removeEventListener('mouseleave', handleMouseLeave);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
