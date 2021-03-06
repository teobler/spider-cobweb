import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';

interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  uniqueKey: string;
  selectedKey?: string;
  disable?: boolean;
  setSelectedKey?: Dispatch<SetStateAction<string>>;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props): ReactElement => {
  const { className = '', uniqueKey, selectedKey, disable, setSelectedKey, onClick, children, ...restProps } = props;
  const basicClassName = 'menu-item';
  const disabledClassName = disable ? `${CLASS_PREFIX}${basicClassName}-disabled` : '';
  const selectedClassName = uniqueKey === selectedKey ? `${CLASS_PREFIX}${basicClassName}-selected` : '';

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (onClick) {
      onClick(event);
    }

    if (setSelectedKey && uniqueKey && !disable) {
      setSelectedKey(uniqueKey);
    }
  };

  return (
    <li
      className={combineClass(basicClassName, selectedClassName, disabledClassName, className)}
      onClick={event => handleClick(event)}
      {...restProps}
    >
      {children}
    </li>
  );
};

export default MenuItem;
