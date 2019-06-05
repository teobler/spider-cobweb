import React, { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from 'react';
import combineClass from '../../utils/combineClass';
import './menu.scss';

export type KeyType = string | number;

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  defaultSelectedKey?: KeyType;
  selectedKey?: KeyType;
}

const getUniqueKeyFromChild = (child: React.ReactElement, index: number): string | number =>
  child.key || `menu-item-${index}`;

const renderChildren = (
  children: ReactNode,
  selectedKey: KeyType | undefined,
  setSelectedKey: Dispatch<SetStateAction<KeyType>>,
) => {
  return React.Children.map(children, (child: React.ReactElement, index: number) => {
    const uniqueKey = getUniqueKeyFromChild(child, index);
    return React.cloneElement(child, { uniqueKey, selectedKey, setSelectedKey });
  });
};

const Menu: React.FunctionComponent<MenuProps> = (props): ReactElement => {
  const { className = '', defaultSelectedKey, children, ...restProps } = props;
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);

  return (
    <ul className={combineClass('menu', className)} {...restProps}>
      {renderChildren(children, selectedKey, setSelectedKey)}
    </ul>
  );
};

export default Menu;
