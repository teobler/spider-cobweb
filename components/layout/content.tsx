import React from 'react';
import combineClass from '../../utils/combineClass';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<ContentProps> = (props) => {
  const { className = '', children, ...restProps } = props;

  return (
    <main
      className={combineClass('layout-content', className)}
      {...restProps}>
      {children}
    </main>
  );
};

export default Content;
