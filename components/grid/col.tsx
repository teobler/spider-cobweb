import React, { ReactElement, ReactNode } from 'react';
import combineClass from '../../utils/combineClass';
import './col.scss';
import { CLASS_PREFIX } from '../constants';

interface Adaptive {
  span: number;
  offset?: number;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span: number;
  offset?: number;
  gutter?: number;
  xs?: Adaptive;
  sm?: Adaptive;
  md?: Adaptive;
  lg?: Adaptive;
  xl?: Adaptive;
}

const renderChildren = (gutter: number, children: ReactNode) => {
  return gutter ? React.Children.map(children, (child: ReactElement<ColProps>) => {
    return <div className="gutter-box">{child}</div>;
  }) : children;
};

const getAdaptiveClassName = (restProps: any): string[] => {
  const classNames: string[] = [];
  ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
    let adaptiveProp: Adaptive = restProps[size] || {};
    classNames.push(`spider-${size}-col-${adaptiveProp.span}`);
    if (adaptiveProp.offset) {
      classNames.push(`spider-${size}-col-offset-${adaptiveProp.offset}`);
    }
  });

  return classNames;
};

const Col: React.FunctionComponent<ColProps> = (props): ReactElement => {
  const { className = '', span, gutter = 0, offset, style, children, ...restProps } = props;
  const styleWithGutter = gutter ? { padding: `0 ${gutter / 2}px`, ...style } : { ...style };
  const offsetClassName = offset ? `${CLASS_PREFIX}col-offset-${offset}` : '';
  const adaptiveClassName = getAdaptiveClassName(restProps).join(' ');

  return (
    <div className={combineClass(`col-${span}`, offsetClassName, adaptiveClassName, className)} style={styleWithGutter} {...restProps}>
      {renderChildren(gutter, children)}
    </div>
  );
};

export default Col;
