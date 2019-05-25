import React, { ReactElement } from 'react';
import Menu from '../../components/menu/menu';
import MenuItem from '../../components/menu/menuItem';

const MenuDemo: React.FunctionComponent = (): ReactElement => {
  return <Menu defaultSelectedKey='menu-item-1'>
    <MenuItem key='menu-item-1'>item1</MenuItem>
    <MenuItem key='menu-item-2'>item2</MenuItem>
    <MenuItem key='menu-item-3'>item3</MenuItem>
    <MenuItem key='menu-item-4'>item4</MenuItem>
  </Menu>;
};

export default MenuDemo;
