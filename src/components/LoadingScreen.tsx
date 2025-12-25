import { useEffect, useState } from 'react';
import logoIntro from '@/assets/logo-intro.mp4';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onComplete, 300);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    // End video 1 second before it finishes
    if (video.duration && video.currentTime >= video.duration - 1) {
      video.pause();
      handleVideoEnd();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        className="w-full h-full object-contain max-w-2xl"
      >
        <source src={logoIntro} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen;
