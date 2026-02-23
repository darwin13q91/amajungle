import { ReactNode } from "react";
import { useSectionInView } from "../hooks/useSectionInView";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = "", children }) => {
  const [ref, visible] = useSectionInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`section-animate${visible ? " visible" : ""} ${className}`}
    >
      <img src="/leaf.png" alt="" className="section-leaf left" aria-hidden="true" />
      <img src="/leaf.png" alt="" className="section-leaf right" aria-hidden="true" />
      {children}
    </section>
  );
};

export default SectionWrapper;