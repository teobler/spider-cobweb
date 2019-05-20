import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';
import './col.scss';

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span: number;
}

const Col: React.FunctionComponent<ColProps> = (props): ReactElement => {
  const { className = '', span, children, ...restProps } = props;

  return (
    <div className={combineClass(`col-${span}`, className)} {...restProps}>
      {children}
    </div>
  );
};

export default Col;
