import React from 'react';
import combineClass from '../../utils/combineClass';
import '../../utils/importAllIcons';
import './index.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...restProps } = props;

  return (
    <svg className={combineClass('icon', className)}
         {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
