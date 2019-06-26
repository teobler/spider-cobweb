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
        <MenuItem uniqueKey="menu-item-1">item1</MenuItem>
        <MenuItem uniqueKey="menu-item-2" disable={true}>
          item2
        </MenuItem>
        <MenuItem uniqueKey="menu-item-3">item3</MenuItem>
        <MenuItem uniqueKey="menu-item-4">item4</MenuItem>
        <SubMenu uniqueKey="submenu-1" title="item5">
          <SubList title="group title 1">
            <ListItem uniqueKey="listItem-1">dididi</ListItem>
            <ListItem uniqueKey="listItem-2">dididi</ListItem>
            <ListItem uniqueKey="listItem-3">dididi</ListItem>
          </SubList>
          <SubList title="group title 2">
            <ListItem uniqueKey="listItem-1">dididi</ListItem>
            <ListItem uniqueKey="listItem-2">dididi</ListItem>
            <ListItem uniqueKey="listItem-3">dididi</ListItem>
          </SubList>
        </SubMenu>
      </Menu>

      <Menu defaultSelectedKey="menu-item-1">
        <MenuItem uniqueKey="menu-item-1">item1</MenuItem>
        <MenuItem uniqueKey="menu-item-2" disable={true}>
          item2
        </MenuItem>
        <MenuItem uniqueKey="menu-item-3">item3</MenuItem>
        <SubMenu uniqueKey="submenu-1" openPopup={true} title="item4">
          <SubList title="group title 1">
            <ListItem uniqueKey="listItem-1-1">dididi</ListItem>
            <ListItem uniqueKey="listItem-1-2">dididi</ListItem>
            <ListItem uniqueKey="listItem-1-3">dididi</ListItem>
          </SubList>
          <SubList title="group title 2">
            <ListItem uniqueKey="listItem-2-1">dididi</ListItem>
            <ListItem uniqueKey="listItem-2-2">dididi</ListItem>
            <ListItem uniqueKey="listItem-2-3">dididi</ListItem>
          </SubList>
        </SubMenu>
        <MenuItem uniqueKey="menu-item-5">item5</MenuItem>
      </Menu>
    </>
  );
};

export default MenuDemo;
