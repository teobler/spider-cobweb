import React from 'react';
import combineClass from '../../utils/combineClass';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<ContentProps> = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <footer
      className={combineClass('layout-content', className)}
      {...restProps}>
      footer
    </footer>
  );
};

export default Content;
