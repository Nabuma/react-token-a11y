import type { HeadingLevel } from '../../lib/types';
import './ClickableCard.css';

export type ClickableCardProps = {
  href: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  headingLevel?: HeadingLevel;
};

const ClickableCard = ({
  href,
  title,
  category,
  description,
  imageSrc,
  imageAlt = '',
  headingLevel = 3,
}: ClickableCardProps) => {
  const Heading = `h${headingLevel}` as const;

  return (
    <article className="card">
      <img className="card__image" src={imageSrc} alt={imageAlt} />
      <div className="card__body">
        <p className="card__category">{category}</p>
        <Heading className="card__title">
          <a className="card__link" href={href}>
            {title}
          </a>
        </Heading>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default ClickableCard;
