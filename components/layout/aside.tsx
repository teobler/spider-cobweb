import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';

const Aside: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = (props): ReactElement => {
  const { className = '', children, ...restProps } = props;

  return (
    <aside className={combineClass('layout-aside', className)} {...restProps}>
      {children}
    </aside>
  );
};

export default Aside;
