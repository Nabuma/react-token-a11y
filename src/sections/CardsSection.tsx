import { ClickableCard } from '../components';
import DemoSection from './DemoSection';

const CardsSection = () => (
  <DemoSection title="Cards">
    <div className="cluster">
      <ClickableCard
        href="/blog/accessible-cards"
        title="Building accessible cards"
        category="Accessibility"
        description="How to make a whole card clickable without breaking screen reader or keyboard users."
        imageSrc="https://picsum.photos/640/360"
      />
    </div>
  </DemoSection>
);

export default CardsSection;
