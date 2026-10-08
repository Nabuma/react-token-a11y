import { useId } from 'react';
import type { ReactNode } from 'react';
import './DemoSection.css';

type DemoSectionProps = {
  title: string;
  children: ReactNode;
};

const DemoSection = ({ title, children }: DemoSectionProps) => {
  const titleId = useId();

  return (
    <section className="demo-section" aria-labelledby={titleId}>
      <h2 id={titleId} className="demo-section__title">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default DemoSection;
