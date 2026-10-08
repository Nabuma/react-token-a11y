import { useId, useState } from 'react';
import type { HeadingLevel } from '../../lib/types';
import type { ReactNode } from 'react';
import './Accordion.css';

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  headingLevel?: HeadingLevel;
};

const Accordion = ({ items, headingLevel = 3 }: AccordionProps) => {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>([]);
  const Heading = `h${headingLevel}` as const;

  const toggle = (id: string) =>
    setOpenIds((current) => (current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id]));

  return (
    <div className="accordion">
      {items.map((item) => {
        const expanded = openIds.includes(item.id);
        return (
          <div key={item.id} className="accordion__item">
            <Heading className="accordion__heading">
              <button
                type="button"
                id={`${baseId}-trigger-${item.id}`}
                className="accordion__trigger"
                aria-expanded={expanded}
                aria-controls={`${baseId}-panel-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <span className="accordion__icon" aria-hidden="true">
                  {expanded ? '−' : '+'}
                </span>
              </button>
            </Heading>
            <section
              id={`${baseId}-panel-${item.id}`}
              aria-labelledby={`${baseId}-trigger-${item.id}`}
              hidden={!expanded}
              className="accordion__panel"
            >
              {item.content}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
