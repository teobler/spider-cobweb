import React from 'react';
import combineClass from '../../utils/combineClass';

interface MainProps extends React.HTMLAttributes<HTMLElement> {
}

const Main: React.FunctionComponent<MainProps> = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <main
      className={combineClass('layout-main', className)}
      {...restProps}>
      main
    </main>
  );
};

export default Main;
