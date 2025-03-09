import DynamicLogo from '@/components/DynamicLogo';
import WaterScene from '@/components/WaterScene';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <WaterScene />
      <div className="relative z-10 text-center space-y-8">
        <div className="animate-float">
          <DynamicLogo />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white">¡Diversión sin límites!</h1>
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
          {/* Botones aquí */}
        </div>
      </div>
    </div>
  );
}
