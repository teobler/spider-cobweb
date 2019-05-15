import React from 'react';
import combineClass from '../../utils/combineClass';

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <section
      className={combineClass('layout', className)}
      {...restProps}>
      {props.children}
    </section>
  );
};

export default Layout;
