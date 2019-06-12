import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import { KeyType } from './menu';

interface SubList extends React.HTMLAttributes<HTMLElement> {
  setSelectedKey?: Dispatch<SetStateAction<KeyType>>;
  uniqueKey?: KeyType;
  selectedKey?: string;
  mode?: string;
}

const ListItem: React.FunctionComponent<SubList> = (props): ReactElement => {
  const { setSelectedKey, selectedKey, uniqueKey, mode, onClick, children } = props;
  const selectedClassName =
    mode === 'horizontal' ? '' : uniqueKey === selectedKey ? `${CLASS_PREFIX}menu-item-selected` : '';

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    if (onClick) {
      onClick(event);
    }

    if (setSelectedKey && uniqueKey) {
      setSelectedKey(uniqueKey);
    }
  };

  return (
    <li className={combineClass('submenu-item', selectedClassName)} onClick={event => handleClick(event)}>
      {children}
    </li>
  );
};

export default ListItem;
