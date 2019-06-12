import React, { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from 'react';
import combineClass from '../../utils/combineClass';
import './menu.scss';

export type KeyType = string | number;

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  defaultSelectedKey?: KeyType;
  selectedKey?: KeyType;
  mode?: string;
}

const getUniqueKeyFromChild = (child: React.ReactElement, index: number): string | number =>
  child.key || `menu-item-${index}`;

const renderChildren = (
  children: ReactNode,
  selectedKey: KeyType | undefined,
  setSelectedKey: Dispatch<SetStateAction<KeyType>>,
  mode: string | undefined
) => {
  return React.Children.map(children, (child: React.ReactElement, index: number) => {
    const uniqueKey = getUniqueKeyFromChild(child, index);
    return React.cloneElement(child, { uniqueKey, selectedKey, setSelectedKey, mode });
  });
};

const Menu: React.FunctionComponent<MenuProps> = (props): ReactElement => {
  const { className = '', defaultSelectedKey, mode = 'vertical', children, ...restProps } = props;
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
  const modeClassName = mode === 'vertical' ? 'menu-vertical' : 'menu-horizontal';

  return (
    <ul className={combineClass(modeClassName, className)} {...restProps}>
      {renderChildren(children, selectedKey, setSelectedKey, mode)}
    </ul>
  );
};

export default Menu;
