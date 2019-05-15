import React from 'react';
import combineClass from '../../utils/combineClass';

interface AsideProps extends React.HTMLAttributes<HTMLElement> {
}

const Aside: React.FunctionComponent<AsideProps> = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <aside
      className={combineClass('layout-aside', className)}
      {...restProps}>
      aside
    </aside>
  );
};

export default Aside;
