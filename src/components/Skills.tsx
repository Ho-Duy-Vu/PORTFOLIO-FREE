import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Database, Wrench, Brain, Users, Zap } from "lucide-react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
    case "Frameworks & Libraries":
      return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />;
    case "Development Tools":
      return <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />;
    case "Databases":
      return <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />;
    case "Specialized Skills":
      return <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />;
    case "Soft Skills":
      return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />;
    default:
      return <Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />;
  }
};

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python", "C#", "C", "SQL", "SCSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React 18", "Vue.js", "Node.js", "Express.js", "Flask", "Tailwind CSS", "ShadCN/UI", "BOOTSTRAP", "MVC", ".NET"]
  },
  {
    category: "Development Tools",
    skills: ["Visual Studio", "Cursor", "Git", "Docker", "WordPress", "GitHub", "POSTMAN"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL Server", "MySQL"]
  },
  {
    category: "Specialized Skills",
    skills: ["AI Integration", "Microservices Architecture", "RESTful API", "JWT Authentication", "Real-time Systems", "System Design & Modeling", "UML"]
  },
  {
    category: "Soft Skills",
    skills: ["Teamwork", "Leadership", "Problem-solving", "Self-learning", "Communication"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
      
      {/* Reduced background animations - only on desktop */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, -90, -180],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kỹ Năng</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Liệt kê kỹ năng và công nghệ của bạn (mẫu)
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {skillsData.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-indigo-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  {getCategoryIcon(category.category)}
                  {category.category}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08 }}
                      className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 