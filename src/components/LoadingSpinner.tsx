/**
 * Loading Spinner Component
 * 
 * Professional loading indicator with animated spinner
 * Used across the application for async operations
 */

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'var(--primary)',
  className = '' 
}: LoadingSpinnerProps) => {
  const sizeMap = {
    small: '24px',
    medium: '40px',
    large: '60px'
  };

  return (
    <div className={`loading-spinner ${className}`} style={{ 
      width: sizeMap[size], 
      height: sizeMap[size] 
    }}>
      <svg 
        viewBox="0 0 50 50" 
        className="spinner-svg"
      >
        <circle
          className="spinner-circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
