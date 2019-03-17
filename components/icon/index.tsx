import React from 'react';
import '../../utils/imoprtAllIcons';
import './index.scss';
import combineClass from '../../utils/combineClass';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...restProps } = props;

  return (
    <svg className={combineClass('spider-icon', className)}
         {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
