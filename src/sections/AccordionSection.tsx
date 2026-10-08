import { Accordion } from '../components';
import DemoSection from './DemoSection';

const ITEMS = [
  {
    id: 'a',
    title: 'What is a design token?',
    content: <p>A named value, such as a colour or a spacing step, reused across the interface.</p>,
  },
  {
    id: 'b',
    title: 'Why use rem for text?',
    content: <p>It follows the text-size the user chose in their browser.</p>,
  },
];

const AccordionSection = () => (
  <DemoSection title="Accordion">
    <Accordion items={ITEMS} />
  </DemoSection>
);

export default AccordionSection;
