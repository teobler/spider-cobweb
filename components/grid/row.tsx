import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';
import { ColProps } from './col';
import './row.scss';

interface RowProps extends React.HTMLAttributes<HTMLElement> {
  gutter?: number;
}

const Row: React.FunctionComponent<RowProps> = (props): ReactElement => {
  const { className = '', gutter = 0, style, children, ...restProps } = props;
  const styleWithGutter = gutter ? { margin: `0 -${gutter / 2}px`, ...style } : {...style};

  return (
    <div className={combineClass('row', className)} style={styleWithGutter} {...restProps}>
      {React.Children.map(children, (child: ReactElement<ColProps>) => {
        return React.cloneElement(child, {
          gutter,
        })
      })}
    </div>
  );
};

export default Row;
