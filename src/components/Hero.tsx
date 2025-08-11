import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Zap, Cpu, Database, Globe, Smartphone, Monitor, Server, Wifi, Shield } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Only add mouse move listener on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // 3D card mouse effect (desktop only)
  const handleCardMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max rotation: 18deg
    const rotateY = ((x - centerX) / centerX) * 18;
    const rotateX = -((y - centerY) / centerY) * 18;
    setCardRotation({ x: rotateX, y: rotateY });
  };
  const handleCardMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 sm:pt-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/blog3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay tối giúp chữ nổi bật */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* Animated gradient background */}
      {/* <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" /> */}
      <style>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background: linear-gradient(120deg, #dbeafe, #f3e8ff, #f5d0fe, #dbeafe);
          background-size: 200% 200%;
          animation: gradient-move 16s ease-in-out infinite;
        }
      `}</style>
      
      {/* Simplified tech icons - reduced count and slower animations */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 right-20 text-blue-400/20"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code size={60} />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 text-purple-400/20"
            animate={{
              y: [0, 18, 0],
              rotate: [0, -180, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap size={50} />
          </motion.div>

          <motion.div
            className="absolute top-1/3 left-1/4 text-indigo-400/20"
            animate={{
              x: [0, 22, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cpu size={45} />
          </motion.div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 pt-8 sm:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-lg text-white font-medium mb-2 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Xin chào, tôi là
            </motion.h2>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your Name
            </motion.h1>
            <motion.h3
              className="text-xl md:text-2xl text-white mb-6 font-semibold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Your Role / Title
            </motion.h3>
            <motion.p
              className="text-white mb-8 max-w-lg leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Mô tả ngắn về bạn. Viết vài câu giới thiệu tổng quan về kỹ năng, định hướng và mục tiêu nghề nghiệp của bạn tại đây.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ 
                  scale: isMobile ? 1.05 : 1.1,
                  y: isMobile ? -2 : -5,
                }}
              >
                <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-lg text-base sm:text-lg w-full sm:w-auto">
                  <Download size={18} />
                  Tải CV (mẫu)
                </Button>
              </motion.a>
              
              <motion.a 
                href="#contact"
                whileHover={{ 
                  scale: isMobile ? 1.05 : 1.1,
                  y: isMobile ? -2 : -5,
                }}
              >
                <Button variant="outline" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 text-base sm:text-lg w-full sm:w-auto">
                  <Mail size={18} />
                  Liên hệ
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 order-first md:order-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative flex items-center justify-center">
              {/* Glow effect - chỉ giữ 1 lớp, hiệu ứng nhẹ nhàng */}
              {!isMobile && (
                <motion.div 
                  className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-2xl pointer-events-none"
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
              {/* Card 3D chỉ bọc border và ảnh */}
              <motion.div 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white"
                ref={cardRef}
                style={{
                  transform: !isMobile ? `perspective(900px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)` : undefined,
                  transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1)',
                }}
                onMouseMove={!isMobile ? handleCardMouseMove : undefined}
                onMouseLeave={!isMobile ? handleCardMouseLeave : undefined}
                whileHover={{ 
                  scale: isMobile ? 1.02 : 1.07,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src="/placeholder.svg"
                  alt="Your Photo"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    filter: "brightness(1.1) contrast(1.05)",
                    scale: 1.05
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
