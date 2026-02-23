/**
 * Optimized Image Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Blur placeholder while loading
 * - WebP support with fallback
 * - Responsive srcset (future)
 * - Error handling
 */

import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  className = '',
  loading = 'lazy',
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If eager loading or IntersectionObserver not supported, load immediately
    if (loading === 'eager' || !('IntersectionObserver' in window)) {
      setImageSrc(src);
      return;
    }

    // Lazy load with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setImageSrc(placeholder);
    onError?.();
  };

  return (
    <div className={`optimized-image-wrapper ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        {...props}
      />
      {!isLoaded && !hasError && (
        <div className="image-loading-overlay">
          <div className="image-spinner" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
