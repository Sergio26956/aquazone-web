// ... (imports y Navbar/Footer)

export default function Piscinas() {
  const images = [
    "/images/piscina1.webp",
    "/images/piscina2.webp",
    "/images/piscina3.webp",
  ];

  return (
    <div>
      {/* ... (Hero Section existente) */}
      
      {/* Nueva Sección: Galería */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Galería de Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image 
                src={img}
                alt={`Evento ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ... (Footer) */}
    </div>
  );
}
