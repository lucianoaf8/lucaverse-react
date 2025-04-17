import { useRef, useEffect } from 'react';


const GlitchAvatar = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.src = '/avatar-luca.png'; // ✅ No import, direct URL
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      function glitchFrame() {
        const jitterX = Math.random() * 2 - 1;
        const jitterY = Math.random() * 2 - 1;

        ctx.save();
        ctx.translate(jitterX, jitterY);

        const glitchAreaCount = 6 + Math.floor(Math.random() * 5);

        for (let i = 0; i < glitchAreaCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const width = Math.random() * (canvas.width / 3);
          const height = Math.random() * (canvas.height / 6);

          const dx = x + (Math.random() * 40 - 20);
          const dy = y + (Math.random() * 40 - 20);

          ctx.drawImage(img, x, y, width, height, dx, dy, width, height);
        }

        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        for (let i = 0; i < canvas.height; i += 3) {
          ctx.fillRect(0, i, canvas.width, 1);
        }

        ctx.restore();
      }

      function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        setTimeout(() => {
          glitchFrame();
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            loop();
          }, 50 + Math.random() * 50); // 50-100ms glitch
        }, 8000 + Math.random() * 5000); // 8-13s cycle
      }

      loop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="max-h-[65%] md:max-h-[70%] w-auto object-contain"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default GlitchAvatar;
