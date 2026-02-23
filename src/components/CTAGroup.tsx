import { Link } from 'react-router-dom';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

interface CTAGroupProps {
  title?: string;
  description?: string;
  buttons: Array<{
    href: string;
    text: string;
    variant?: 'primary' | 'secondary';
    target?: string;
    rel?: string;
  }>;
  className?: string;
}

/**
 * Individual CTA Button Component
 * Supports internal routes (starting with /) and external links
 */
export const CTAButton: React.FC<CTAButtonProps> = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  target,
  rel 
}) => {
  const btnClass = `cta-btn ${variant === 'secondary' ? 'secondary' : 'main'} ${className}`;
  
  // Internal route (e.g., /contact, /services)
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={btnClass}>
        {children}
      </Link>
    );
  }

  // External or mailto link
  return (
    <a 
      href={href} 
      className={btnClass}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

/**
 * Reusable CTA Group Component
 * Eliminates duplicate CTA patterns across FAQ, Resources, and Testimonials sections
 */
export const CTAGroup: React.FC<CTAGroupProps> = ({ 
  title, 
  description, 
  buttons, 
  className = '' 
}) => (
  <div className={`cta-section ${className}`}>
    {title && <h3>{title}</h3>}
    {description && <p>{description}</p>}
    <div className="cta-group">
      {buttons.map((button, index) => (
        <CTAButton
          key={index}
          href={button.href}
          variant={button.variant}
          target={button.target}
          rel={button.rel}
        >
          {button.text}
        </CTAButton>
      ))}
    </div>
  </div>
);

export default CTAGroup;
