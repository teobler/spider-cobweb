import React, { ReactElement } from 'react';
import ListItem from '../../components/menu/listItem';
import Menu from '../../components/menu/menu';
import MenuItem from '../../components/menu/menuItem';
import SubList from '../../components/menu/subList';
import SubMenu from '../../components/menu/subMenu';

const MenuDemo: React.FunctionComponent = (): ReactElement => {
  return (
    <>
      <Menu defaultSelectedKey="menu-item-1" mode="horizontal">
        <MenuItem key="menu-item-1">item1</MenuItem>
        <MenuItem key="menu-item-2" disable={true}>
          item2
        </MenuItem>
        <MenuItem key="menu-item-3">item3</MenuItem>
        <MenuItem key="menu-item-4">item4</MenuItem>
        <SubMenu key="menu-item-5" title="item5">
          <SubList title="group title 1">
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
          </SubList>
          <SubList title="group title 2">
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
          </SubList>
        </SubMenu>
      </Menu>

      <Menu defaultSelectedKey="menu-item-1" mode="vertical">
        <MenuItem key="menu-item-1">item1</MenuItem>
        <MenuItem key="menu-item-2" disable={true}>
          item2
        </MenuItem>
        <MenuItem key="menu-item-3">item3</MenuItem>
        <SubMenu key="menu-item-4" title="item4">
          <SubList title="group title 1">
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
          </SubList>
          <SubList title="group title 2">
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
            <ListItem>dididi</ListItem>
          </SubList>
        </SubMenu>
        <MenuItem key="menu-item-5">item5</MenuItem>
      </Menu>
    </>
  );
};

export default MenuDemo;
