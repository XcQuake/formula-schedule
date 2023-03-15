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
};

const InternalPlaceholder: React.FC<Props> = () => (
  <div className="placeholder" />
);

const Placeholder = InternalPlaceholder as CompoundedComponent;

Placeholder.Rect = ({ height, style }: Props) => (
  <div className="placeholder-rect" style={{ height, ...style }} />
);

Placeholder.Circle = ({ height, style }: Props) => (
  <div className="placeholder-circle" style={{ height, ...style }} />
);

export default Placeholder;
