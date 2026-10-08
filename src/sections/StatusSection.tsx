import { Badge, Switch } from '../components';
import DemoSection from './DemoSection';

const StatusSection = () => (
  <DemoSection title="Status and settings">
    <div className="cluster">
      <Badge status="pending" />
      <Badge status="valid" />
      <Badge status="invalid" />
      <Badge status="warning" />
      <Switch>Notifications</Switch>
    </div>
  </DemoSection>
);

export default StatusSection;
