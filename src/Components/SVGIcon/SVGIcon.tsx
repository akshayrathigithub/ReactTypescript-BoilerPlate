import React from 'react';
import { SVGIconProps } from './SVGIcon.interface';

const SVGIcon: React.FC<SVGIconProps> = (props) => {
  return <>{props.children}</>;
};

export default SVGIcon;
