import Link from 'next/link';

const solutions = [
  {
    title: 'E-commerce',
    subtitle: 'Growing beyond entry level system',
    description: 'We build modular approach (managed services) to deliver features in phases. This allows the business to prioritize features based on the needs.',
    link: '#',
    bgGradient: 'from-blue-900 via-blue-800 to-slate-900'
  },
  {
    title: 'Data Integration',
    subtitle: 'Get a 360° view of end customers',
    description: 'A SaaS-based customer engagement hub that connects instantly to any application, streaming data, on-premise, or custom enterprise systems.',
    link: '#',
    bgGradient: 'from-indigo-900 via-indigo-800 to-blue-900'
  },
  {
    title: 'Test Automation',
    subtitle: 'Accelerate your automation testing',
    description: 'Using our customizable and reusable Test Automation Framework and libraries, you can cut the automation script development effort by 40%.',
    link: '#',
    bgGradient: 'from-slate-800 via-slate-700 to-slate-900'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-4 bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Innovative Solutions to your Complex Business challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.link}
              className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient}`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {solution.title}
                </h3>
                <h4 className="text-base font-semibold text-blue-300 mb-3">
                  {solution.subtitle}
                </h4>
                <p className="text-white/90 leading-relaxed mb-6 text-sm">
                  {solution.description}
                </p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Read more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
