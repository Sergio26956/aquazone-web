import { motion } from 'framer-motion';

export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <img src={image} alt={`Gallery ${index}`} className="w-full h-64 object-cover" />
        </motion.div>
      ))}
    </div>
  );
}
