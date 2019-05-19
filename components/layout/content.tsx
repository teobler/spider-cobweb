import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';

const Content: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = (props): ReactElement => {
  const { className = '', children, ...restProps } = props;

  return (
    <main className={combineClass('layout-content', className)} {...restProps}>
      {children}
    </main>
  );
};

export default Content;
