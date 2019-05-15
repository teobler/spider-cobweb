import React from 'react';
import combineClass from '../../utils/combineClass';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <header
      className={combineClass('layout-header', className)}
      {...restProps}>
      header
    </header>
  );
};

export default Header;
