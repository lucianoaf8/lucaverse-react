import { useRef, useEffect } from 'react';

const GlitchAvatar = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // DEBUG: Remove border and background now that image is visible
    // canvas.style.border = '2px dashed #00caff';
    // canvas.style.background = '#1a0033';
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.src = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/avatar-luca.png` : '/avatar-luca.png';
    img.onerror = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ff00c8';
      ctx.font = '20px Orbitron, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Image Not Found', canvas.width / 2, canvas.height / 2);
    };
    img.onload = () => {
      // Set canvas to a fixed large size - make sure it's relatively square
      canvas.width = 750;  
      canvas.height = 750;

      // Calculate scaling to make image fit WITHIN the canvas while maintaining aspect ratio
      // This will prevent cropping at top and bottom
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 0.95; // 95% of max size to add some padding
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      function drawBaseImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
      }

      function glitchFrame() {
        const jitterX = Math.random() * 2 - 1;
        const jitterY = Math.random() * 2 - 1;

        ctx.save();
        ctx.translate(jitterX, jitterY);

        // Draw the base image first
        drawBaseImage();

        
        ctx.restore();
      }

      function loop() {
        // Draw the base image properly scaled
        drawBaseImage();

        setTimeout(() => {
          glitchFrame();
          setTimeout(() => {
            // Redraw the base image properly scaled
            drawBaseImage();
            loop();
          }, 50 + Math.random() * 80); 
        }, 8000 + Math.random() * 5000); 
      }

      loop();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'contain',
        background: 'transparent',
        display: 'block'
      }} 
    />
  );
};

export default GlitchAvatar;
