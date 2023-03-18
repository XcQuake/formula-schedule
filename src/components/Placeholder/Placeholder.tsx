import React from 'react';
import './Placeholder.scss';

interface Props {
  height?: string;
  style?: {
    [key: string]: string;
  };
}

type CompoundedComponent = React.ForwardRefExoticComponent<Props> & {
  Rect: ({ height, style }: Props) => JSX.Element;
  Circle: ({ height, style }: Props) => JSX.Element;
  Man: () => JSX.Element;
};

const InternalPlaceholder: React.FC<Props> = () => (
  <span className="placeholder" />
);

const Placeholder = InternalPlaceholder as CompoundedComponent;

Placeholder.Rect = ({ height, style }: Props) => (
  <span className="placeholder-rect" style={{ height, ...style }} />
);

Placeholder.Circle = ({ height, style }: Props) => (
  <span className="placeholder-circle" style={{ height, ...style }} />
);

Placeholder.Man = () => (
  <span className="placeholder-man" />
);

export default Placeholder;
