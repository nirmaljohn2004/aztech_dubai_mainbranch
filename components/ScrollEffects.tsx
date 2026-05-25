'use client'

import { useEffect } from 'react'

export function ScrollEffects() {
  useEffect(() => {
    let anim: number, animC: number;
    let y = window.scrollY, tY = y, last = performance.now(), off = 0;
    
    // Gradient Stages
    const s = [
      [[200, 184, 232], [176, 160, 216]], // Stage 1 (Top)
      [[26, 10, 46], [45, 27, 78]],       // Stage 2
      [[123, 141, 176], [138, 127, 170]], // Stage 3
      [[208, 216, 232], [200, 207, 224]], // Stage 4
      [[205, 213, 229], [197, 206, 221]], // Stage 5
      [[200, 208, 226], [191, 200, 218]]  // Stage 6 (Bottom)
    ];
    
    const L = (a: number, b: number, t: number) => a + (b - a) * t;
    
    const upd = () => {
      tY = window.scrollY; 
      y = L(y, tY, 0.06);
      
      const m = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = Math.max(0, Math.min(1, y / m)) * 5;
      const i = Math.min(4, Math.floor(p));
      const f = p - i;
      
      const c1 = s[i][0].map((v, j) => Math.round(L(v, s[i+1][0][j], f)));
      const c2 = s[i][1].map((v, j) => Math.round(L(v, s[i+1][1][j], f)));
      
      document.body.style.setProperty('--bg-grad-1', `rgb(${c1.join(',')})`);
      document.body.style.setProperty('--bg-grad-2', `rgb(${c2.join(',')})`);
      
      if (Math.abs(tY - y) > 0.5) {
        anim = requestAnimationFrame(upd);
      }
    };
    
    const scr = () => { 
      cancelAnimationFrame(anim); 
      anim = requestAnimationFrame(upd); 
    };
    window.addEventListener('scroll', scr, { passive: true }); 
    upd();

    // Canvas Setup
    const cv = document.createElement('canvas');
    cv.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;will-change:transform;';
    document.body.appendChild(cv);
    const x = cv.getContext('2d');
    
    let rt: any, w: number, h: number;
    const r = () => { 
      w = cv.width = window.innerWidth; 
      h = cv.height = window.innerHeight; 
    };
    window.addEventListener('resize', () => { 
      clearTimeout(rt); 
      rt = setTimeout(r, 150); 
    }); 
    r();

    const drw = (t: number) => {
      animC = requestAnimationFrame(drw);
      if (document.hidden) { 
        last = t; 
        return; 
      }
      
      const dt = (t - last) / 1000;
      last = t;
      off -= 40 * dt; // 40px/s downward-leftward
      
      if (!x) return;
      x.clearRect(0, 0, w, h);
      
      const sp = w + h * 0.577; // span with 30 deg angle
      for (let j = 0; j < 6; j++) {
        let lx = (j * (sp / 6) + off) % sp; 
        if (lx < 0) lx += sp;
        
        x.beginPath(); 
        x.moveTo(lx, 0); 
        x.lineTo(lx - h * 0.577, h);
        
        x.lineWidth = j === 2 ? 1.5 : 1;
        x.strokeStyle = j === 2 ? 'rgba(160, 140, 210, 0.15)' : (j % 2 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(180, 160, 220, 0.20)');
        x.stroke();
      }
    };
    animC = requestAnimationFrame(drw);

    return () => { 
      window.removeEventListener('scroll', scr); 
      cancelAnimationFrame(anim); 
      cancelAnimationFrame(animC); 
      window.removeEventListener('resize', r); 
      if (cv.parentNode) cv.parentNode.removeChild(cv); 
    };
  }, []);
  
  return null;
}
