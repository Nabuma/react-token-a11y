import { Button } from '../components';
import DemoSection from './DemoSection';

const ButtonsSection = () => (
  <DemoSection title="Buttons">
    <div className="cluster">
      <Button variant="primary" size="medium" />
      <Button variant="secondary" size="medium" />
      <Button variant="primary" size="medium" disabled />
      <Button variant="secondary" size="medium" isLoading />
    </div>
  </DemoSection>
);

export default ButtonsSection;
