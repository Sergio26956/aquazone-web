import { useEffect } from 'react';

export default function WaterSound() {
  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();

    return () => oscillator.stop();
  }, []);

  return null;
}
