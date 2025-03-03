import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Galeria() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch('/content/galeria.json')
      .then(res => res.json())
      .then(data => setImagenes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {imagenes.map((img, index) => (
        <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src={img.imagen} 
            alt={img.titulo} 
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}
