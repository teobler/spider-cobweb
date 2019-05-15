import React, { ReactElement } from 'react';
import combineClass from '../../utils/combineClass';
import '../../utils/importAllIcons';
import { CLASS_PREFIX } from '../constants';
import './index.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  spin?: boolean;
}

const Icon: React.FunctionComponent<IconProps> = (props): ReactElement => {
  const { className = '', name, spin, ...restProps } = props;
  const spinClass = spin || name === 'loading' ? CLASS_PREFIX + 'spin' : '';

  return (
    <svg className={combineClass('icon', spinClass, className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
