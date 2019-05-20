import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';
import './row.scss';

interface RowProps extends React.HTMLAttributes<HTMLElement> {
  gutter?: number;
}

const Row: React.FunctionComponent<RowProps> = (props): ReactElement => {
  const { className = '', gutter, children, ...restProps } = props;
  const gutterStyle = gutter ? { padding: `0 ${gutter / 2}` } : {};

  return (
    <div className={combineClass('row', className)} {...restProps} style={gutterStyle}>
      {children}
    </div>
  );
};

export default Row;
