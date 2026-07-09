import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaGlobe, FaClock } from "react-icons/fa";

const HowWeWork = () => {
  const features = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Built for Business Growth",
      description: "We help you reach more people and drive real revenue through tailored branding and performance-driven strategies."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Collaborative by Nature",
      description: "We work with you, not just for you. Together, we explore new ideas and unlock meaningful growth opportunities."
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Creativity That Connects",
      description: "Access a global network of designers, writers, and strategists aligned to grow your business."
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "We Respect Your Time",
      description: "Your deadlines are our priority. We move fast, deliver on time, and keep you updated at every step."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00E6C4]/20 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: 1,
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00ffd9] via-[#00ffd9] to-[#00aeff] bg-clip-text text-transparent mb-12 text-center">
            Our Approach
          </h2>
          <p className="text-xl text-gray-300">How we work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E6C4] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full  flex items-center justify-center bg-[#00E6C4]/10 text-[#00E6C4]"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#00E6C4] rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
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

export default HowWeWork; 