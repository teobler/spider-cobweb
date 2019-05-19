import React, { ReactElement } from 'react';
import Icon from '../../components/icon/index';

const IconDemo: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Icon name="apple" />
      <Icon name="wechat" />
    </div>
  );
};

export default IconDemo;
