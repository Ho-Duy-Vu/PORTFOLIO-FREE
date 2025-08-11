import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Mô tả ngắn gọn về dự án của bạn. Hãy cập nhật nội dung này khi sử dụng.",
    image: "/placeholder.svg",
    techStack: ["Tech A", "Tech B"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Project Title",
    description: "Mô tả ngắn gọn về dự án của bạn. Hãy cập nhật nội dung này khi sử dụng.",
    image: "/placeholder.svg",
    techStack: ["Tech A", "Tech B"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Project Title",
    description: "Mô tả ngắn gọn về dự án của bạn. Hãy cập nhật nội dung này khi sử dụng.",
    image: "/placeholder.svg",
    techStack: ["Tech A", "Tech B"],
    githubUrl: "#",
    liveUrl: "#"
  },
];

const Projects = () => {
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
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
      {/* Reduced background animations - only on desktop */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-10 left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
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
            className="absolute bottom-10 right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
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
            className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Dự Án Nổi Bật
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Tổng hợp các dự án đã thực hiện với đa dạng công nghệ và lĩnh vực khác nhau
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 bg-white/90 backdrop-blur-sm border border-purple-100 flex flex-col"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="w-full h-48 sm:h-64 flex items-center justify-center">
                    {project.image && project.image !== "/placeholder.svg" ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-2xl sm:text-3xl font-bold">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-gray-600 font-medium text-base sm:text-lg">{project.title}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1 justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className="w-full group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open('#', '_blank')}
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 