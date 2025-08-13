export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  'data-testid'?: string;
}