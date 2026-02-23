interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

interface NavigationListProps {
  items: NavigationItem[];
  currentPage: string;
  onNavigate: (page: string) => void;
  className?: string;
}

/**
 * Reusable Navigation List Component
 * Eliminates duplicate navigation logic between desktop and mobile menus
 */
const NavigationList: React.FC<NavigationListProps> = ({ 
  items, 
  currentPage, 
  onNavigate, 
  className = '' 
}) => (
  <>
    {items.map((item) => (
      <button
        key={item.id}
        className={`nav-link ${currentPage === item.path ? 'active' : ''}`}
        onClick={() => onNavigate(item.path)}
      >
        {item.label}
      </button>
    ))}
  </>
);

export default NavigationList;
