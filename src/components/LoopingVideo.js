import React, { useRef, useEffect, useState } from 'react';

const LoopingVideo = ({ webmSrc, mp4Src, poster, classString }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // on arrête d'observer une fois visible
        }
      },
      { threshold: 0.25 } // déclenche à 25% de visibilité
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-container" ref={videoRef}>
      {isVisible && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
                  poster={poster}
            className={classString}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {mp4Src && <source src={mp4Src} type="video/mp4" />}
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      )}
    </div>
  );
};

export default LoopingVideo;
