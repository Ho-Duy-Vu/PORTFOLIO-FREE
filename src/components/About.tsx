
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Mail, Phone, MapPin, Globe } from "lucide-react";

const AboutItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | React.ReactNode }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="text-blue-primary mt-1">{icon}</div>
      <div>
        <p className="text-xs sm:text-sm text-gray-500">{label}</p>
        <p className="font-medium text-sm sm:text-base">{value}</p>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      {/* Reduced background animations - only on desktop */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-10 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -90, -180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Về Tôi</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Thông tin cá nhân và mục tiêu nghề nghiệp (mẫu trống)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Thông tin cá nhân</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 h-full">
              <AboutItem 
                icon={<Calendar size={18} className="sm:w-5 sm:h-5" />} 
                label="Ngày sinh" 
                value="dd/mm/yyyy" 
              />
              <AboutItem 
                icon={<Mail size={18} className="sm:w-5 sm:h-5" />} 
                label="Email" 
                value={<a href="#" className="hover:text-blue-primary transition-colors">your@email.com</a>} 
              />
              <AboutItem 
                icon={<Phone size={18} className="sm:w-5 sm:h-5" />} 
                label="Số điện thoại" 
                value={<a href="#" className="hover:text-blue-primary transition-colors">(+84) 000 000 000</a>} 
              />
              <AboutItem 
                icon={<MapPin size={18} className="sm:w-5 sm:h-5" />} 
                label="Địa chỉ" 
                value="Địa chỉ của bạn" 
              />
              <AboutItem 
                icon={<Globe size={18} className="sm:w-5 sm:h-5" />} 
                label="Website / Facebook" 
                value={<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-primary transition-colors">https://your-website-or-profile</a>} 
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-10 sm:mt-0 h-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Mục tiêu nghề nghiệp</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 h-full shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Viết mục tiêu nghề nghiệp của bạn ở đây. Ví dụ: Định hướng làm Frontend/Backend/Fullstack, yêu thích công nghệ nào, mục tiêu học tập và phát triển.
              </p>

              <div className="mt-6 sm:mt-8">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Học vấn</h4>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 shadow-md border border-blue-200">
                  <p className="font-medium text-sm sm:text-base">Chuyên ngành của bạn</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Tên trường / thời gian học</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
