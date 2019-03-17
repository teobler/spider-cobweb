import React from 'react';
import '../../utils/imoprtAllIcons';
import './index.scss';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className='spider-icon'>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
