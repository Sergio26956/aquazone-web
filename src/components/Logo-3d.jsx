import Image from 'next/image';

export default function Logo3D() {
  return (
    <div className="logo-3d">
      <Image 
        src="/images/logo-3d.webp" 
        alt="Logo AQUAZONE" 
        width={400} 
        height={150} 
        className="mx-auto"
      />
    </div>
  );
}
