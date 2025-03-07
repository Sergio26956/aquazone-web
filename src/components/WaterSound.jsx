import { useEffect } from 'react';

export default function WaterSound() {
  useEffect(() => {
    const audio = new Audio('/audio/water-sound.mp3');
    audio.loop = true;
    audio.play();
    return () => audio.pause();
  }, []);

  return null;
}
