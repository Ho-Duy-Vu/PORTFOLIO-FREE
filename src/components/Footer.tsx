
import { Facebook, Mail, Phone, Github, Linkedin, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-12 px-2 sm:px-0 relative overflow-hidden shadow-2xl border-t border-white/10"
      style={{
        backgroundImage: "url('/images/blog3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-8">
          {/* Personal Info */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-extrabold text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Your Name</h3>
            <p className="text-gray-200 text-lg mb-3 font-semibold">Your Title</p>
            <div className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Địa điểm của bạn</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          

          {/* Contact & Social */}
          <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-xl mb-4">Liên hệ</h4>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-5 h-5" />
                <a href="#" className="hover:text-white transition-colors font-medium">
                  your@email.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-5 h-5" />
                <a href="#" className="hover:text-white transition-colors font-medium">
                  (+84) 000 000 000
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4 mt-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600/80 hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/80 hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700/80 hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500/80 hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Mail"
              >
                <Mail size={24} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500/80 hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div id="download">
              <a 
                href="#" 
                download 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg font-semibold text-base"
              >
                <span>Tải CV (mẫu)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
