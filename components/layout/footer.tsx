import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';

const Footer: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = (props): ReactElement => {
  const { className = '', children, ...restProps } = props;

  return (
    <footer className={combineClass('layout-footer', className)} {...restProps}>
      {children}
    </footer>
  );
};

export default Footer;
