import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import profilePic from '../assets/Profile Pic.jpg';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    
    const material = new THREE.ShaderMaterial({
        uniforms: {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
            varying vec2 v_texCoord;
            void main() {
                v_texCoord = position.xy * 0.5 + 0.5;
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            precision highp float;
            varying vec2 v_texCoord;
            uniform float u_time;
            uniform vec2 u_resolution;

            void main() {
                vec2 uv = v_texCoord;
                
                // Create a slow, evolving fluid motion
                float t = u_time * 0.15;
                
                // Layered noise-like movement using sines
                float noise = sin(uv.x * 3.0 + t) + sin(uv.y * 2.0 + t * 0.8);
                noise += sin((uv.x + uv.y) * 2.0 + t * 1.2);
                
                // Executive palette: Navy, Deep Slate, and a hint of Royal Blue
                vec3 color1 = vec3(0.058, 0.09, 0.164); // #0f172a (Deep Navy)
                vec3 color2 = vec3(0.117, 0.188, 0.337); // #1e3056 (Mid Navy)
                vec3 color3 = vec3(0.035, 0.05, 0.1);    // Darker accent
                
                // Mix colors based on noise and position
                float mix1 = smoothstep(-1.0, 1.0, noise);
                float mix2 = smoothstep(-0.5, 1.5, sin(uv.x * 2.0 - t) + noise * 0.5);
                
                vec3 finalColor = mix(color1, color2, mix1);
                finalColor = mix(finalColor, color3, mix2 * 0.3);
                
                // Add a very subtle grain/shimmer
                float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
                finalColor += grain * 0.015;
                
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const startTime = Date.now();
    let animationFrameId: number;
    
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        material.uniforms.u_time.value = (Date.now() - startTime) * 0.001;
        renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);

  return (
    <section id="expertise" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-40">
      {/* Immersive Background */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 hidden dark:block"></div>
      
      {/* Light mode gradient background */}
      <div className="absolute inset-0 w-full h-full -z-10 block dark:hidden bg-background"></div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-12 pb-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1 glass-card p-10 lg:p-14 rounded-3xl bg-white/60 dark:bg-slate-900/60 shadow-premium dark:shadow-premium-dark backdrop-blur-2xl border-white/40 dark:border-white/10"
        >
          <h1 className="font-display text-[48px] md:text-display text-on-surface dark:text-slate-100 leading-[1.1]">
            Chief Bank Manager <br/>
            <span className="italic font-light text-primary/80 dark:text-slate-300">&amp; Risk Specialist</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A seasoned banking professional with over a decade of experience driving institutional stability through rigorous risk assessment, fraud prevention, and strategic operational leadership. 
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-stack-md pt-4">
            <a href="#contact" className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 font-label-md text-[16px] font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-1 cursor-pointer">
              Contact Me
            </a>
            <a href="#career" className="inline-flex items-center justify-center h-14 px-10 rounded-xl glass-card bg-white/40 dark:bg-slate-800/40 text-on-surface dark:text-slate-100 font-label-md text-[16px] font-semibold hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer">
              View Timeline
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-premium dark:shadow-premium-dark border-[8px] border-white/50 dark:border-slate-800/50 glass-card z-10 transition-transform duration-700 ease-out hover:scale-[1.02] transform rotate-2 hover:rotate-0">
            <img src={profilePic} alt="Portrait" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[1.5rem]"></div>
          </div>
          {/* Decorative overlapping block */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-fixed/30 dark:bg-slate-700/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
};
