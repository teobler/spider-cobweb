import React from 'react';
import combineClass from '../../utils/combineClass';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <footer
      className={combineClass('layout-footer', className)}
      {...restProps}>
      footer
    </footer>
  );
};

export default Footer;
