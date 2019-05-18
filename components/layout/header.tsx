import React from 'react';
import combineClass from '../../utils/combineClass';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { className = '', children, ...restProps } = props;

  return (
    <header
      className={combineClass('layout-header', className)}
      {...restProps}>
      {children}
    </header>
  );
};

export default Header;
