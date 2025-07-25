import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Emotion Detector',
      description:
        'A real-time facial emotion recognition system that detects human emotions using deep learning models.',
      image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'CNN', 'TensorFlow', 'Flask'],
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Helmet-Based Number Plate Detection System',
      description:
        'A surveillance system to detect riders without helmets and capture number plates using object detection.',
      image:
        'https://images.pexels.com/photos/2705756/pexels-photo-2705756.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'YOLOv5', 'OpenCV', 'OCR', 'Deep Learning'],
      gradient: 'from-green-500 to-lime-500'
    },
    {
      title: 'Cloud-Based Attendance Monitoring System',
      description:
        'A face recognition attendance system with AWS integration for real-time storage and access.',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AWS', 'Amazon Rekognition', 'React', 'Python', 'Flask'],
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Overlay Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 hover:rotate-12 transition-all duration-200">
                    <Github size={18} className="text-gray-700" />
                  </button>
                  
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${project.gradient} hover:scale-110 transition-transform duration-200 animate-fade-in`}
                      style={{ animationDelay: `${0.5 + tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 animate-bounce hover:animate-none">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
