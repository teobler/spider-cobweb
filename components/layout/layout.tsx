import React, { ReactElement, ReactNode } from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import Aside from './aside';
import './layout.scss';

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
}

const childrenHasAside = (children: ReactNode) => {
  if (children instanceof Array) {
    return children.some((node: ReactElement) => node.type === Aside)
  } else {
    return false;
  }
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className = '', children, ...restProps } = props;
  const asideClassName = childrenHasAside(children) ? `${CLASS_PREFIX}layout-with-aside` : '';

  return (
    <section
      className={combineClass('layout', asideClassName, className)}
      {...restProps}>
      {children}
    </section>
  );
};

export default Layout;
