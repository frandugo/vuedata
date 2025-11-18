import Link from 'next/link';

export default function Careers() {
  return (
    <section id="careers" className="relative py-36 px-4 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="mx-auto w-full max-w-7xl text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Careers
        </h2>
        <h3 className="text-2xl font-semibold mb-6">
          Let's grow together!
        </h3>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're building a workplace at VueData where amazingly talented and creative people (like you) can be who they are and do their best work.
        </p>
        <p className="text-base text-gray-400 mb-8">
          Interested to know more?
        </p>
        <Link
          href="#"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded font-semibold hover:bg-blue-700 transition shadow-lg text-lg"
        >
          See our curated jobs
        </Link>
      </div>
    </section>
  );
}
