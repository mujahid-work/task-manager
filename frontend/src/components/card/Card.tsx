import React from 'react';
import { CardProps } from '../../types/card/Card';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  style,
  footer,
  'data-testid': testId
}) => {
  return (
    <div className={`card ${className}`} style={style} data-testid={testId}>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>}
        {children && <div className="card-text">{children}</div>}
        {footer && <div className="mt-3">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;