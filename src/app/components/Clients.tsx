export default function Clients() {
  const clients = ['INTEGRA', 'StartLive', 'AMAZON', 'ORACLE'];
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Clients
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
