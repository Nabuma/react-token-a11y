import { Tabs } from '../components';
import DemoSection from './DemoSection';

const TABS = [
  { id: 'overview', label: 'Overview', content: <p>Arrow keys, Home and End move between tabs.</p> },
  { id: 'specs', label: 'Specs', content: <p>Only the active tab is in the tab order.</p> },
  { id: 'reviews', label: 'Reviews', content: <p>Panels are focusable so keyboard users can scroll them.</p> },
];

const TabsSection = () => (
  <DemoSection title="Tabs">
    <Tabs label="Product information" items={TABS} />
  </DemoSection>
);

export default TabsSection;
