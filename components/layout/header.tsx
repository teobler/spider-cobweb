import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';

const Header: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = (props): ReactElement => {
  const { className = '', children, ...restProps } = props;

  return (
    <header className={combineClass('layout-header', className)} {...restProps}>
      {children}
    </header>
  );
};

export default Header;
