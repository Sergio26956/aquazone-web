import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Galeria({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((img, index) => (
        <motion.div 
          key={index} 
          whileHover={{ scale: 1.05 }}
          className="relative h-64 rounded-xl overflow-hidden shadow-lg"
        >
          <Image 
            src={img} 
            alt={`Evento ${index + 1}`} 
            layout="fill" 
            objectFit="cover" 
          />
        </motion.div>
      ))}
    </div>
  );
}
