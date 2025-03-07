import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

export default function Contacto() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Validación básica
    if (!formData.get('email').includes('@')) {
      setStatus('Email inválido');
      return;
    }

    // Envío seguro
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    setStatus(response.ok ? 'Mensaje enviado ✔️' : 'Error ❌');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6"
    >
      <SEO 
        title="Contacto | AQUAZONE" 
        description="Contáctanos para reservar tu experiencia acuática."
      />
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Nombre" 
          className="w-full p-2 border rounded"
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className="w-full p-2 border rounded"
          required
        />
        <textarea 
          name="message" 
          placeholder="Mensaje" 
          className="w-full p-2 border rounded" 
          rows="4"
          required
        ></textarea>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
        {status && <p className="mt-4">{status}</p>}
      </form>
    </motion.div>
  );
}
