import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface CubeProps {
  size: string;
  gradient: string;
  className?: string;
  dragConstraints: React.RefObject<HTMLDivElement>;
}

const Cube: React.FC<CubeProps> = ({ size, gradient, className, dragConstraints }) => {
  const randomX = useMemo(() => Math.random() * 20 - 10, []);
  const randomY = useMemo(() => Math.random() * 20 - 10, []);
  const duration = useMemo(() => Math.random() * 5 + 8, []);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ perspective: '800px' }}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.1}
    >
      <motion.div
        animate={{
          y: [0, randomY, 0],
          x: [0, randomX, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="relative cursor-grab"
          style={{ width: size, height: size, transformStyle: 'preserve-3d', transform: 'rotateY(-35deg) rotateX(15deg)' }}
          whileHover={{ transform: 'rotateY(-30deg) rotateX(20deg) scale(1.05)', transition: { type: 'spring', stiffness: 300 } }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <div className={`absolute w-full h-full rounded-lg bg-gradient-to-br ${gradient} overflow-hidden`} style={{ transform: `translateZ(calc(${size} / 2))` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          </div>
          <div className={`absolute w-full h-full rounded-lg bg-gradient-to-tr ${gradient} overflow-hidden`} style={{ transform: `rotateY(90deg) translateZ(calc(${size} / 2))` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          </div>
          <div className={`absolute w-full h-full rounded-lg bg-gradient-to-bl ${gradient} overflow-hidden`} style={{ transform: `rotateX(-90deg) translateZ(calc(${size} / 2))` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          </div>
          <div className="absolute w-full h-full bg-black/20 blur-xl rounded-lg" style={{ transform: `translateZ(-${size}) translateY(${size})` }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

interface CubeInfoProps {
  value: string;
  label: string;
  trend: 'up';
  className?: string;
  arrowColor: string;
  valueColor?: string;
}

const CubeInfo: React.FC<CubeInfoProps> = ({ value, label, trend, className, arrowColor, valueColor = 'text-white' }) => (
  <motion.div
    className={`absolute text-white ${className} z-10`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, type: 'spring' }}
  >
    {trend === 'up' ? <ArrowUp size={18} className={`${arrowColor}`} /> : null}
    <p className={`text-4xl md:text-5xl font-bold ${valueColor}`}>{value}</p>
    <p className="text-gray-300 text-sm md:text-base">{label}</p>
  </motion.div>
);

const ServiceSlider = () => {
  const services = [
    'Website Development',
    'SEO & Content Strategy',
    'Branding & Design',
    'Performance Marketing',
    'AI Marketing & Automation',
    'Social Media Management',
  ];

  return (
    <div className="absolute bottom-4 inset-x-0 h-16 flex items-center justify-center">
      <div
        className="relative w-full max-w-2xl h-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <motion.div
          className="flex absolute left-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          <div className="flex items-center justify-around flex-shrink-0">
            {services.map((service, i) => (
              <span key={i} className="text-lg font-semibold text-gray-400 whitespace-nowrap px-8">
                {service}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-around flex-shrink-0">
            {services.map((service, i) => (
              <span key={i} className="text-lg font-semibold text-gray-400 whitespace-nowrap px-8">
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const CraftingStatusHero = () => {
  const containerRef = React.useRef(null);

  return (
    <div className="w-full flex justify-center p-4">
      <div ref={containerRef} className="relative w-full max-w-6xl aspect-[1/1.2] sm:aspect-[1.1] md:aspect-[2/1] lg:aspect-[3/1.5] bg-gradient-to-br from-green-900/20 via-blue-900/30 to-slate-900 rounded-3xl p-4 sm:p-8 overflow-hidden shadow-2xl text-white">
        <div className="relative w-full h-full">
          <CubeInfo value="365%" label="Growth Potential" trend="up" className="absolute top-[35%] left-[10%] md:top-[10%] md:left-[5%]" arrowColor="text-green-400" />
          <Cube size="70px" gradient="from-green-400 to-teal-500" className="absolute bottom-[5%] left-[5%] md:top-[8%] md:left-[25%] md:bottom-auto" dragConstraints={containerRef} />
          
          <CubeInfo value="12.5M+" label="Audience Reach" trend="up" className="absolute top-[50%] right-[10%] text-right md:text-left md:top-[25%] md:left-[45%] md:right-auto" arrowColor="text-cyan-400" />
          <Cube size="50px" gradient="from-cyan-400 to-sky-500" className="absolute bottom-[5%] left-1/2 -translate-x-1/2 md:top-[22%] md:left-[60%] md:translate-x-0 md:bottom-auto" dragConstraints={containerRef} />

          <CubeInfo value="50+" label="AI Automations" trend="up" className="absolute top-[65%] left-[10%] md:top-auto md:bottom-[35%] md:left-[8%]" arrowColor="text-blue-400" />
          <Cube size="110px" gradient="from-blue-500 to-indigo-600" className="absolute bottom-[5%] right-[5%] md:bottom-[25%] md:left-[30%] md:right-auto" dragConstraints={containerRef} />

          <motion.div 
            className="absolute bottom-[40%] left-[55%] w-24 h-6 bg-white/10 rounded-md shadow-lg hidden md:block" 
            style={{ transform: 'skew(-30deg)' }}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-[35%] left-[65%] w-20 h-5 bg-white/5 rounded-md shadow-md hidden md:block" 
            style={{ transform: 'skew(-30deg)' }}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          />
        </div>

        <div className="absolute top-[10%] inset-x-0 md:top-[25%] lg:top-[30%] md:right-[5%] lg:right-[10%] md:inset-x-auto text-center z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          >
            Our Service<br/>Ecosystem
          </motion.h2>
          <motion.p
            className="mt-2 text-sm md:text-base text-gray-300 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A dynamic ecosystem where strategy, advertising, and AI converge to fuel your growth.
          </motion.p>
        </div>

        <ServiceSlider />
      </div>
    </div>
  );
};

export default CraftingStatusHero;