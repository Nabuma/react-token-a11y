import { useId, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import './Tabs.css';

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  label: string;
};

const Tabs = ({ items, label }: TabsProps) => {
  const baseId = useId();
  const [activeId, setActiveId] = useState(items[0]?.id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activate = (index: number) => {
    const item = items[(index + items.length) % items.length];
    setActiveId(item.id);
    tabRefs.current[item.id]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    const targets: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (event.key in targets) {
      event.preventDefault();
      activate(targets[event.key]);
    }
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label={label} className="tabs__list">
        {items.map((item, index) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[item.id] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className="tabs__tab"
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs__panels">
        {items.map((item) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`${baseId}-panel-${item.id}`}
            aria-labelledby={`${baseId}-tab-${item.id}`}
            hidden={item.id !== activeId}
            tabIndex={0}
            className="tabs__panel"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
