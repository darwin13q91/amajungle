/**
 * Skeleton Loader Component
 * 
 * Professional skeleton screen for content loading states
 * Provides visual feedback during data fetching
 */

interface SkeletonLoaderProps {
  type?: 'text' | 'title' | 'avatar' | 'card' | 'image';
  lines?: number;
  className?: string;
}

const SkeletonLoader = ({ 
  type = 'text', 
  lines = 3,
  className = '' 
}: SkeletonLoaderProps) => {
  if (type === 'card') {
    return (
      <div className={`skeleton-card ${className}`}>
        <div className="skeleton skeleton-image" />
        <div className="skeleton-content">
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </div>
      </div>
    );
  }

  if (type === 'avatar') {
    return <div className={`skeleton skeleton-avatar ${className}`} />;
  }

  if (type === 'image') {
    return <div className={`skeleton skeleton-image ${className}`} />;
  }

  if (type === 'title') {
    return <div className={`skeleton skeleton-title ${className}`} />;
  }

  return (
    <div className={`skeleton-wrapper ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="skeleton skeleton-text" 
          style={{ width: i === lines - 1 ? '70%' : '100%' }}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;
