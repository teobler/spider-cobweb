import React, { ReactElement, ReactNode } from 'react';
import combineClass from '../../utils/combineClass';
import './col.scss';
import { CLASS_PREFIX } from '../constants';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span: number;
  gutter?: number;
  offset?: number;
}

const renderChildren = (gutter: number, children: ReactNode) => {
  return gutter ? React.Children.map(children, (child: ReactElement<ColProps>) => {
    return <div className="gutter-box">{child}</div>
  }) : children;
};

const Col: React.FunctionComponent<ColProps> = (props): ReactElement => {
  const { className = '', span, gutter = 0, offset, style, children, ...restProps } = props;
  const styleWithGutter = gutter ? { padding: `0 ${gutter / 2}px`, ...style } : {...style};
  const offsetClassName = offset ? `${CLASS_PREFIX}col-offset-${offset}` : '';

  return (
    <div className={combineClass(`col-${span}`, offsetClassName, className)} style={styleWithGutter} {...restProps}>
      {renderChildren(gutter, children)}
    </div>
  );
};

export default Col;
