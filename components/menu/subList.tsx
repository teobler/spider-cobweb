import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { KeyType } from './menu';

interface SubList extends React.HTMLAttributes<HTMLElement> {
  setSelectedKey?: Dispatch<SetStateAction<KeyType>>;
  uniqueKey?: KeyType;
  selectedKey?: KeyType;
  mode?: string;
}

const getUniqueKeyFromChild = (
  child: React.ReactElement,
  index: number,
  uniqueKey: KeyType | undefined,
): string | number => child.key || `${uniqueKey}-item-${index}`;

const renderChildren = (
  children: ReactNode,
  selectedKey: KeyType | undefined,
  uniqueKey: KeyType | undefined,
  setSelectedKey: Dispatch<SetStateAction<KeyType>> | undefined,
  mode: string,
) => {
  return React.Children.map(children, (child: React.ReactElement, index: number) => {
    const childUniqueKey = mode === 'vertical' ? getUniqueKeyFromChild(child, index, uniqueKey) : uniqueKey;

    return React.cloneElement(child, { uniqueKey: childUniqueKey, selectedKey, setSelectedKey, mode });
  });
};

const SubList: React.FunctionComponent<SubList> = (props): ReactElement => {
  const { title, setSelectedKey, selectedKey, uniqueKey, mode = 'horizontal', children } = props;

  return (
    <React.Fragment>
      {title ?
        <div className={combineClass('submenu-title')}>{title}</div>
        : null
      }
      <ul className={combineClass('submenu-list')}>
        {renderChildren(children, selectedKey, uniqueKey, setSelectedKey, mode)}
      </ul>
    </React.Fragment>
  );
};

export default SubList;
