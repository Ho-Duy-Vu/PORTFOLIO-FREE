import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Code, User, Award, Mail, Home, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Trang chủ", href: "#home", icon: Home },
  { title: "Về tôi", href: "#about", icon: User },
  { title: "Kỹ năng", href: "#skills", icon: Code },
  { title: "Dự án", href: "#projects", icon: Code },
  { title: "Giải thưởng", href: "#awards", icon: Award },
  { title: "Chứng nhận", href: "#certificates", icon: FileText },
  { title: "Liên hệ", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Thêm biến màu chữ cho navbar
  const navTextColor = scrolled ? "text-gray-900 hover:text-blue-700" : "text-white hover:text-blue-200";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled 
          ? "bg-white/90 shadow-xl border-b border-gray-200/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300"
        >
          Your Name
        </motion.a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            item.href.startsWith("/") ? (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-2 font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 ${navTextColor}`}
                >
                  <item.icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 ${navTextColor}`}
              >
                <item.icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </motion.a>
            )
          ))}
          <motion.a 
            href="#" 
            download 
            className="block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg shadow-md">
              <Download size={16} className="mr-2" />
            Tải CV (mẫu)
            </Button>
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200/50 py-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              item.href.startsWith("/") ? (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-primary font-medium py-4 px-4 rounded-lg hover:bg-blue-50/50 transition-all duration-200 border-b border-gray-100/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={18} className="opacity-70" />
                    {item.title}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-primary font-medium py-4 px-4 rounded-lg hover:bg-blue-50/50 transition-all duration-200 border-b border-gray-100/50"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={18} className="opacity-70" />
                  {item.title}
                </motion.a>
              )
            ))}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <a href="#" download className="block">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg shadow-md">
                  <Download size={18} className="mr-2" />
                  Tải CV
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
