import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'), { ssr: false });

export default function Gallery({ section }) {
  // Imágenes base según la sección (usa las tuyas)
  const images = {
    flotantes: [
      '/images/Captura1.webp',
      '/images/Captura2.webp'
    ],
    terrestres: [
      '/images/IMG1.webp',
      '/images/Cupace.png'
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images[section]?.map((img, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative h-64 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src={img}
            alt={`${section} ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
