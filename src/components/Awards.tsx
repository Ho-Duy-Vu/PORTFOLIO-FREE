import { Badge } from "@/components/ui/badge";
import { Star, FileText, ExternalLink, Facebook, Award, Trophy, Image, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Award {
  id: number;
  year: string;
  title: string;
  description: string;
  category: "award" | "certificate";
  icon: React.ReactNode;
  image?: string;
  organization?: string;
}

const awards: Award[] = [];

const certificateImages: { id: number; title: string; image: string; description: string }[] = [];

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const outstandingAwards = awards.filter(award => award.category === "award");
  const certificates = awards.filter(award => award.category === "certificate");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 relative overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-yellow-600/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Giải thưởng & Chứng nhận
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thêm nội dung giải thưởng và chứng nhận của bạn tại đây.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
            {/* Left side - Main Image */}
            <motion.div
              className="space-y-6 h-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group h-full">
                <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-[1.02] h-full bg-white">
                  <img 
                    src="/placeholder.svg" 
                    alt="Award Highlight"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8">
                    <div className="space-y-4">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Giải thưởng Cuộc thi
                      </div>
                      
                      {/* Title */}
                       <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                         Tên giải thưởng nổi bật
                       </h3>
                      
                      {/* Description */}
                         <p className="text-base sm:text-lg text-white/90 font-medium">
                         Mô tả ngắn gọn về giải thưởng
                       </p>
                      
                      {/* Additional info */}
                      <div className="flex items-center gap-4 text-white/80 text-xs sm:text-sm">
                         <span>🏆 Thông tin thêm về giải thưởng</span>
                      </div>
                      
                      {/* News and social links */}
                      <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
                         <a 
                           href="#"
                           className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs sm:text-sm font-medium hover:bg-white/30 transition-colors duration-300 group/link"
                         >
                           <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform duration-200" />
                           Liên kết ngoài
                         </a>
                         <a 
                           href="#"
                           className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-lg text-white text-xs sm:text-sm font-medium hover:bg-blue-700/90 transition-colors duration-300 group/link"
                         >
                           <Facebook className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform duration-200" />
                           Mạng xã hội
                         </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🏆</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Awards list */}
            <motion.div
              className="space-y-8 h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Award Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Thành tích Nổi bật</h3>
                    <p className="text-xs sm:text-sm text-gray-600">IT GOT TALENT 2024</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="text-center p-2 sm:p-3 bg-white rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-yellow-600">Giải</div>
                      <div className="text-gray-600">Mô tả giải thưởng</div>
                    </div>
                  <div className="text-center p-2 sm:p-3 bg-white rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">2024</div>
                    <div className="text-gray-600">Năm đạt giải</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Outstanding Awards */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  Giải thưởng Cuộc thi
                </h3>
              <div className="space-y-4">
                {outstandingAwards.length === 0 && (
                  <div className="p-4 bg-white rounded-lg shadow text-gray-600 text-sm">
                    Chưa có dữ liệu. Hãy thêm giải thưởng của bạn.
                  </div>
                )}
                {outstandingAwards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs font-medium bg-yellow-50 text-yellow-700 border-yellow-200">
                          {award.year}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {award.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        {award.description}
                      </p>
                      {award.organization && (
                        <p className="text-xs text-gray-500">
                          {award.organization}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
                
                {/* Award Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <img
                      src="/placeholder.svg"
                      alt="Award image placeholder"
                      className="w-full h-60 sm:h-80 object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h4 className="font-semibold text-lg sm:text-xl mb-2">Giải thưởng Cuộc thi</h4>
                      <p className="text-sm sm:text-base opacity-90">Chứng nhận tham gia cuộc thi công nghệ thông tin</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Certificates */}
              <div>
                <div className="space-y-4">
                  {certificates.map((certificate, index) => (
                    <motion.div
                      key={certificate.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {certificate.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs font-medium bg-blue-50 text-blue-700 border-blue-200">
                            {certificate.year}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          {certificate.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          {certificate.description}
                        </p>
                        {certificate.organization && (
                          <p className="text-xs text-gray-500">
                            {certificate.organization}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>
        </div>

        {/* Certificate Gallery */}
        <motion.div
          id="certificates"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
           <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Image className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              Chứng nhận / Hình ảnh (mẫu)
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Thêm hình ảnh chứng nhận của bạn hoặc để trống phần này.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {certificateImages.length === 0 && (
              <div className="col-span-full text-center text-gray-600">
                Chưa có chứng nhận nào. Hãy thêm chứng nhận của bạn.
              </div>
            )}
            {certificateImages.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 bg-white h-full flex flex-col">
                  <div className="flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none" />
                  </div>
                  
                  <div className="p-3 sm:p-4 relative z-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Chi tiết button */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedImage(cert.image);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="w-full flex items-center justify-center gap-2 px-2 sm:px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group/btn relative z-20 cursor-pointer mt-auto"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" />
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage}
              alt="Chi tiết chứng nhận"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Close on backdrop click */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setSelectedImage(null)}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Awards; 