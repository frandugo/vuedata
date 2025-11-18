export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(100, 150, 200, 0.1) 20px, rgba(100, 150, 200, 0.1) 22px)`,
          }}></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(100, 150, 200, 0.15) 40px, rgba(100, 150, 200, 0.15) 42px)`,
          }}></div>
        </div>
      </div>
      
      <div className="mx-auto w-full max-w-7xl text-center relative z-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Delivering Global IT Services and Enterprise Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
          End-to-end expertise across Digital Ecosystem
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-slate-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
