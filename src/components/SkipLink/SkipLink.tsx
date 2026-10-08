import './SkipLink.css';

export type SkipLinkProps = {
  targetId: string;
  children?: string;
};

const SkipLink = ({ targetId, children = 'Skip to main content' }: SkipLinkProps) => (
  <a className="skip-link" href={`#${targetId}`}>
    {children}
  </a>
);

export default SkipLink;
