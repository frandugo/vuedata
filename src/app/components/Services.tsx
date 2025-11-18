import Link from 'next/link';
import { Brain, Cloud, BarChart3, Code, Megaphone, Settings, CheckCircle, Lightbulb, LucideIcon } from 'lucide-react';

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}> = [
  {
    title: 'AI/ML services',
    description: 'End-to-end AI solutions to optimize workflows, enhance productivity, and reduce costs.',
    icon: Brain,
    link: '#'
  },
  {
    title: 'Cloud Solutions',
    description: 'Help to navigate cloud opportunities and challenges',
    icon: Cloud,
    link: '#'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Data warehousing, OLAP, Data mining and modeling',
    icon: BarChart3,
    link: '#'
  },
  {
    title: 'Application Development',
    description: 'Rapid Application Development, Testing and Support',
    icon: Code,
    link: '#'
  },
  {
    title: 'Digital Marketing',
    description: 'Managing digital media and social platform campaigns',
    icon: Megaphone,
    link: '#'
  },
  {
    title: 'Service Management',
    description: 'Assessment, Audit, Roadmap Development',
    icon: Settings,
    link: '#'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality control',
    icon: CheckCircle,
    link: '#'
  },
  {
    title: 'Consulting',
    description: 'Strategic IT consulting services',
    icon: Lightbulb,
    link: '#'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            End-to-end expertise across Digital Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
