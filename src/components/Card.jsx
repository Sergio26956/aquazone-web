import { motion } from 'framer-motion';

export default function Card({ title, image }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
      <img src={image} alt={title} className="h-48 w-full object-cover"/>
      <h3 className="p-4 text-xl font-bold">{title}</h3>
    </motion.div>
  );
}
