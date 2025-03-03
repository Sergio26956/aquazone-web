import Image from 'next/image';

export default function Galeria() {
  // Usa las imágenes que ya tienes en /public/images/
  const imagenes = [
    "/images/file-S8u6r6TfUn2TfzMm4x2M9c.webp", // Ejemplo (cambia por tus imágenes)
    "/images/IMG_20191030_014304.webp",
    "/images/Cupace20180930163150.png"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {imagenes.map((img, index) => (
        <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src={img} 
            alt={`Evento ${index + 1}`} 
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}
