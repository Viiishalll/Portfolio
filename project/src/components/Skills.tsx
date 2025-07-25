import React from 'react';
import { Code, Palette, Server, Smartphone, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'API Design'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Firebase'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-Platform'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'DevOps & Tools',
      skills: ['Git', 'CI/CD', 'Linux', 'Kubernetes', 'Monitoring'],
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm passionate about creating exceptional digital experiences using cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  <category.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-300 hover:scale-105"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3 group-hover:scale-125 group-hover:animate-pulse transition-transform duration-300`}></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;