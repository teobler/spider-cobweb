import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import {KeyType} from './menu';

interface MenuItemProps extends React.HTMLAttributes<HTMLElement>{
  key: KeyType;
  uniqueKey?: KeyType;
  selectedKey?: KeyType;
  setSelectedKey?: Dispatch<SetStateAction<KeyType>>;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props): ReactElement => {
  const { className = '', uniqueKey, selectedKey, setSelectedKey, onClick, children, ...restProps } = props;
  const basicClassName = 'menu-item';
  const selectedClassName = uniqueKey === selectedKey ? `${CLASS_PREFIX}${basicClassName}-selected` : '';

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }

    if (setSelectedKey && uniqueKey) {
      setSelectedKey(uniqueKey);
    }
  };

  return (
    <li className={combineClass(basicClassName, selectedClassName, className)} onClick={(event) => handleClick(event)} {...restProps}>
      {children}
    </li>
  );
};

export default MenuItem;
