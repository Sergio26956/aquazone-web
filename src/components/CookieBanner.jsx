import { useState } from 'react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center">
      <p>Usamos cookies para mejorar tu experiencia. <button onClick={() => setAccepted(true)} className="underline">Aceptar</button></p>
    </div>
  );
}
