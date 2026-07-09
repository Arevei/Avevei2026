import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const AboutArevei = () => {
  const [count, setCount] = useState(0);
  const targetCount = 365;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 3000; // 3 seconds
      const steps = 100;
      const increment = targetCount / steps;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(currentStep * increment), targetCount));
        if (currentStep >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div className="w-full  px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 " />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent mb-12 text-center">
            About Arevei
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Arevei is a new-age marketing agency focused on tangible business growth. We leverage AI-powered marketing to deeply understand your brand, crafting custom strategies and solutions.
          </p>
        </motion.div>

        {/* <CalendarButton /> */}

        {/* Growth Visualization */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold  bg-gradient-to-r from-[#00E6C4] to-[#00aeff] text-transparent bg-clip-text">
                1% Daily Growth = {count}% Annual Growth Potential
              </p>
              <div className="text-2xl sm:text-3xl font-bold my-6">
              </div>
              
              {/* Progress Bar */}
              <div className="w-full max-w-2xl flex items-center space-x-2">
                <span className="text-sm font-medium text-[#00E6C4]">1%</span>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-[#00E6C4] to-[#00aeff]"
                  />
                </div>
                <span className="text-sm font-medium text-[#00aeff]">365%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tagline and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-[#00E6C4] to-[#00aeff] text-transparent bg-clip-text">
            Small Steps. Big Results.
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our unique approach delivers 1% growth every day, adding up to an impressive 365% growth in a year by consistently implementing strategic improvements tailored to your product and services.
          </p>
        </motion.div>

        {/* Animated Dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00E6C4] rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutArevei; 