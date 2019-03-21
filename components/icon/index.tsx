import React from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import '../../utils/importAllIcons';
import './index.scss';

interface IIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  spin?: boolean;
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const { className, name, spin, ...restProps } = props;
  const spinClass = spin || name === 'loading' ? CLASS_PREFIX + 'spin' : '';

  return (
    <svg className={combineClass('icon', spinClass, className)}
         {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
