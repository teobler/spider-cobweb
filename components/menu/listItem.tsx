import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { KeyType } from './menu';

interface SubList extends React.HTMLAttributes<HTMLElement> {
  setSelectedKey?: Dispatch<SetStateAction<KeyType>>;
  uniqueKey?: KeyType;
}

const ListItem: React.FunctionComponent<SubList> = (props): ReactElement => {
  const { setSelectedKey, uniqueKey, onClick, children } = props;

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }

    setSelectedKey!(uniqueKey!);
  };

  return (<li className={combineClass('submenu-item')}
              onClick={(event) => handleClick(event)}>
          {children}
          </li>);
};

export default ListItem;
