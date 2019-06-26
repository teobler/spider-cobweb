import React, { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from 'react';
import combineClass from '../../utils/combineClass';
import './menu.scss';

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  defaultSelectedKey?: string;
  mode?: string;
}

const renderChildren = (
  children: ReactNode,
  selectedKey: string | undefined,
  setSelectedKey: Dispatch<SetStateAction<string>>,
  mode: string | undefined,
) => {
  return React.Children.map(children, (child: React.ReactElement) => {
    return React.cloneElement(child, { selectedKey, setSelectedKey, mode });
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
