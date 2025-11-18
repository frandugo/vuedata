import Link from 'next/link';
import { Video, Server, ShieldCheck, Cloud, ArrowRight, LucideIcon } from 'lucide-react';

const products: Array<{
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  link: string;
  align: 'left' | 'right';
}> = [
  {
    title: 'Go-BOSS',
    subtitle: 'Build your streaming service',
    description: 'Go-BOSS lets you build your own streaming service, enabling you to manage, publish and monetize your content. You can also release custom branded apps to multiple platforms/app stores in no time.',
    icon: Video,
    link: '#',
    align: 'left'
  },
  {
    title: 'DB-DaaS',
    subtitle: 'Database release automation',
    description: 'DB-DaaS is a robust scalable platform for optimizing database release automation, integrates easily with the existing CI/CD environments, aligning with the existing development process and guidelines.',
    icon: Server,
    link: '#',
    align: 'right'
  },
  {
    title: 'Compliance care',
    subtitle: 'Healthcare compliance platform',
    description: 'Compliance Care is a customizable end-to-end compliance management platform, enabling healthcare providers to benchmark capabilities across matrixed organizations and achieve best-in-class compliance.',
    icon: ShieldCheck,
    link: '#',
    align: 'left'
  },
  {
    title: 'Wisecube Nephos',
    subtitle: 'Hybrid cloud analytics',
    description: 'Wisecube Nephos solution provides a complete end-to-end hybrid cloud analytic and machine learning platform that enables real-time collection of data and its transformation into instant actionable intelligence.',
    icon: Cloud,
    link: '#',
    align: 'right'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-4 bg-gray-50">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Enterprise Products derived from Innovative solutions
          </h2>
          <p className="text-lg text-gray-600">
            For Engineering & Business problems
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col ${product.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-80 flex items-center justify-center">
                    <div className="text-center p-8">
                      <product.icon className="w-24 h-24 mx-auto mb-4 text-blue-600" />
                      <h4 className="text-2xl font-bold text-gray-700">{product.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {product.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
