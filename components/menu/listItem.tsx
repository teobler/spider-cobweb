import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';

interface SubList extends React.HTMLAttributes<HTMLElement> {
  setSelectedKey?: Dispatch<SetStateAction<string>>;
  uniqueKey: string;
  childUniqueKey?: string;
  selectedKey?: string;
  mode?: string;
}

const ListItem: React.FunctionComponent<SubList> = (props): ReactElement => {
  const { setSelectedKey, selectedKey, uniqueKey, childUniqueKey, mode, onClick, children } = props;
  const selectedClassName =
    mode === 'horizontal' ? '' : uniqueKey === selectedKey ? `${CLASS_PREFIX}menu-item-selected` : '';

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    if (onClick) {
      onClick(event);
    }

    if (mode === 'vertical' && setSelectedKey) {
      setSelectedKey(uniqueKey);
    }

    if (mode === 'horizontal' && setSelectedKey && childUniqueKey) {
      setSelectedKey(childUniqueKey);
    }
  };

  return (
    <li className={combineClass('submenu-item', selectedClassName)} onClick={event => handleClick(event)}>
      {children}
    </li>
  );
};

export default ListItem;
