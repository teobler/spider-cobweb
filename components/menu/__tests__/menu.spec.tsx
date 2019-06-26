import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../listItem';
import Menu from '../menu';
import MenuItem from '../menuItem';
import SubList from '../subList';
import SubMenu from '../subMenu';

describe('<Menu />', () => {
  it('should render a empty menu', () => {
    const menuJson = renderer.create(<Menu />).toJSON();
    expect(menuJson).toMatchSnapshot();
  });

  it('should render a empty menu with horizontal mode', () => {
    const menuJson = renderer.create(<Menu mode="horizontal" />).toJSON();
    expect(menuJson).toMatchSnapshot();
  });

  it('If has select nested submenu item ,the menu items on the grandfather level should be highlight', () => {
    const wrapper = mount(
      <Menu defaultSelectedKey="2-1">
        <SubMenu uniqueKey="1" title="submenu1">
          <SubList title="subTitle 1">
            <ListItem uniqueKey="1-1">Option 1</ListItem>
            <ListItem uniqueKey="1-2">Option 2</ListItem>
          </SubList>
        </SubMenu>
        <SubMenu uniqueKey="2" title="submenu1-3">
          <SubList>
            <ListItem uniqueKey="2-1">Option 3</ListItem>
            <ListItem uniqueKey="2-2">Option 4</ListItem>
          </SubList>
        </SubMenu>
        <MenuItem uniqueKey="3">menu2</MenuItem>
      </Menu>,
    );
    expect(wrapper.find('.spider-menu-item-selected').length).toBe(1);
    expect(wrapper.find('.spider-submenu-title').length).toBe(1);
  });

  it('should accept openPopup in mode vertical', () => {
    const wrapper = mount(
      <Menu>
        <SubMenu uniqueKey="submenu1" openPopup={false} title="submenu1">
          <SubList>
            <ListItem uniqueKey="listItem1">Option 1</ListItem>
            <ListItem uniqueKey="listItem2">Option 2</ListItem>
          </SubList>
        </SubMenu>
      </Menu>,
    );
    expect(
      wrapper
        .find('.spider-menu-submenu')
        .at(0)
        .hasClass('spider-menu-item-disabled'),
    ).toBeFalsy();
  });

  it('menuItems can be disable and selected', () => {
    const wrapper = mount(
      <Menu defaultSelectedKey="item2">
        <MenuItem uniqueKey="item1" disable={true}>item1</MenuItem>
        <MenuItem uniqueKey="item2">item2</MenuItem>
        <MenuItem uniqueKey="item3">item3</MenuItem>
        <MenuItem uniqueKey="item4">item4</MenuItem>
        <MenuItem uniqueKey="item5">item5</MenuItem>
        <MenuItem uniqueKey="item6">item6</MenuItem>
      </Menu>,
    );
    expect(
      wrapper
        .find('.spider-menu-item')
        .at(0)
        .hasClass('spider-menu-item-disabled'),
    ).toBeTruthy();

    expect(
      wrapper
        .find('.spider-menu-item')
        .at(1)
        .hasClass('spider-menu-item-selected'),
    ).toBeTruthy();
  });

  describe('event handler should work', () => {
    const toggle = (wrapper: ReactWrapper, selector: string, index: number, event: string) => {
      wrapper
        .find(selector)
        .at(index)
        .simulate(event);
      jest.runAllTimers();
      wrapper.update();
    };

    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should be selected when click menu item', () => {
      const clickHandler = jest.fn();
      const wrapper = mount(
        <Menu>
          <MenuItem uniqueKey="item1" onClick={clickHandler}>item1</MenuItem>
          <MenuItem uniqueKey="item2" disable={true}>item2</MenuItem>
          <MenuItem uniqueKey="item3">item3</MenuItem>
        </Menu>,
      );

      expect(wrapper.find('.spider-menu-item-selected').length).toBe(0);
      toggle(wrapper, '.spider-menu-item', 0, 'click');
      toggle(wrapper, '.spider-menu-item', 1, 'click');
      expect(wrapper.find('.spider-menu-item-selected').length).toBe(1);
      expect(clickHandler).toBeCalled();
    });

    it('should show subMenu when click subMenu', () => {
      const wrapper = mount(
        <Menu mode="horizontal">
          <SubMenu uniqueKey="submenu1">
            <SubList title="group title 1">
              <ListItem uniqueKey="1">subItem 1</ListItem>
              <ListItem uniqueKey="2">subItem 2</ListItem>
              <ListItem uniqueKey="3">subItem 3</ListItem>
            </SubList>
          </SubMenu>
        </Menu>,
      );

      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: hidden');
      toggle(wrapper, '.spider-menu-submenu-title', 0, 'click');
      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: visible');
    });

    it('should hid subMenu when blur subMenu', () => {
      const clickHandler = jest.fn();
      const wrapper = mount(
        <Menu mode='horizontal'>
          <SubMenu uniqueKey="submenu1" title="submenu title" onClick={clickHandler}>
            <SubList title="group title 1">
              <ListItem uniqueKey="1">subItem 1</ListItem>
              <ListItem uniqueKey="2">subItem 2</ListItem>
              <ListItem uniqueKey="3">subItem 3</ListItem>
            </SubList>
          </SubMenu>
        </Menu>,
      );

      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: hidden');

      toggle(wrapper, '.spider-menu-submenu-title', 0, 'click');
      expect(clickHandler).toBeCalled();
      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: visible');

      toggle(wrapper, '.spider-menu-submenu-title', 0, 'blur');
      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: hidden');
    });

    it('should not hid subMenu when mode is vertical', () => {
      const clickHandler = jest.fn();
      const wrapper = mount(
        <Menu>
          <SubMenu uniqueKey="submenu1" title="submenu title" onClick={clickHandler}>
            <SubList title="group title 1">
              <ListItem uniqueKey="1">subItem 1</ListItem>
              <ListItem uniqueKey="2">subItem 2</ListItem>
              <ListItem uniqueKey="3">subItem 3</ListItem>
            </SubList>
          </SubMenu>
        </Menu>,
      );

      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: hidden');

      toggle(wrapper, '.spider-menu-submenu-title', 0, 'click');
      expect(clickHandler).toBeCalled();
      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: visible');

      toggle(wrapper, '.spider-menu-submenu-title', 0, 'blur');
      expect(wrapper
        .find('.spider-menu-submenu-container')
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: visible');
    });

    it('should be selected when click listItem', () => {
      const clickHandler = jest.fn();
      const wrapper = mount(
        <Menu>
          <SubMenu uniqueKey="submenu1" openPopup={true}>
            <SubList title="group title 1 - 1">
              <ListItem uniqueKey="1-1-1" onClick={clickHandler}>subItem 1</ListItem>
              <ListItem uniqueKey="1-1-2">subItem 2</ListItem>
              <ListItem uniqueKey="1-1-3">subItem 3</ListItem>
            </SubList>
          </SubMenu>
          <SubMenu uniqueKey="submenu2" disable={true}>
            <SubList title="group title 2 - 1">
              <ListItem uniqueKey="2-1-1">subItem 1</ListItem>
              <ListItem uniqueKey="2-1-2">subItem 2</ListItem>
              <ListItem uniqueKey="2-1-3">subItem 3</ListItem>
            </SubList>
          </SubMenu>
        </Menu>,
      );

      expect(wrapper.find('.spider-menu-item-disabled').length).toBe(1);
      expect(wrapper.find('.spider-submenu-title-disabled').length).toBe(1);

      expect(wrapper
        .find('.spider-menu-submenu-container')
        .at(0)
        .getDOMNode()
        .getAttribute('style'))
        .toContain('overflow: visible');

      toggle(wrapper, '.spider-submenu-item', 0, 'click');
      expect(clickHandler).toBeCalled();
      expect(wrapper.find('.spider-menu-item-selected').length).toBe(1);
    });

    it('submenu title should highlight when click listItem in it under horizontal mode', () => {
      const wrapper = mount(
        <Menu mode="horizontal">
          <SubMenu uniqueKey="submenu1">
            <SubList title="group title 1 - 1">
              <ListItem uniqueKey="1-1-1">subItem 1</ListItem>
              <ListItem uniqueKey="1-1-2">subItem 2</ListItem>
              <ListItem uniqueKey="1-1-3">subItem 3</ListItem>
            </SubList>
          </SubMenu>
        </Menu>,
      );

      expect(wrapper.find('.spider-menu-item-selected').length).toBe(0);
      toggle(wrapper, '.spider-submenu-item', 0, 'click');
      expect(wrapper.find('.spider-menu-item-selected').length).toBe(1);
    });
  });
});
