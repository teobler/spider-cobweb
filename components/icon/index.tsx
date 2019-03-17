import React from 'react';
import '../../utils/imoprtAllIcons';
import './index.scss';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, name, ...restProps} = props;

  return (
    <svg className={`spider-icon ${className}`} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
