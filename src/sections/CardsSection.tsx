import { ClickableCard } from '../components';
import DemoSection from './DemoSection';

const cards = [
  {
    href: "/blog/accessible-cards",
    title: "Building accessible cards",
    category: "Accessibility",
    description: "How to make a whole card clickable without breaking screen reader or keyboard users.",
    imageSrc: "https://picsum.photos/640/360"
  },
  {
    href: "/blog/another-accessible-card",
    title: "Another accessible card",
    category: "Accessibility",
    description: "Tips for making cards accessible to all users.",
    imageSrc: "https://picsum.photos/640/360?2"
  },
  {
    href: "/blog/yet-another-accessible-card",
    title: "Yet another accessible card",
    category: "Accessibility",
    description: "More tips for making cards accessible to all users.",
    imageSrc: "https://picsum.photos/640/360?3"
  },
  {
    href: "/blog/fourth-accessible-card",
    title: "Fourth accessible card",
    category: "Accessibility",
    description: "Even more tips for making cards accessible to all users.",
    imageSrc: "https://picsum.photos/640/360?4"
  },
  {
    href: "/blog/fifth-accessible-card",
    title: "Fifth accessible card",
    category: "Accessibility",
    description: "Even more tips for making cards accessible to all users.",
    imageSrc: "https://picsum.photos/640/360?5"
  },
  {
    href: "/blog/sixth-accessible-card",
    title: "Sixth accessible card",
    category: "Accessibility",
    description: "Even more tips for making cards accessible to all users.",
    imageSrc: "https://picsum.photos/640/360?6"
  }
];

const CardsSection = () => (
  <DemoSection title="Cards">
    <div className="cluster">
      {cards.map((card) => (
        <ClickableCard
          key={card.href}
          href={card.href}
          title={card.title}
          category={card.category}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  </DemoSection>
);

export default CardsSection;
