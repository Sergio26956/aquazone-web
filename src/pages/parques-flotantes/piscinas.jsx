import Link from 'next/link';

export default function Piscinas() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Piscinas</h1>
      <p className="text-lg mb-4">
        Descubre nuestras increíbles piscinas hinchables.
      </p>
      <Link href="/parques-flotantes" className="text-blue-600 hover:underline">
        Volver a Parques Flotantes
      </Link>
    </div>
  );
}
