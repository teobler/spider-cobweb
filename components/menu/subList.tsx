import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';
import { KeyType } from './menu';

interface SubList extends React.HTMLAttributes<HTMLElement> {
  setSelectedKey?: Dispatch<SetStateAction<KeyType>>;
  uniqueKey?: KeyType;
}

const renderChildren = (children: ReactNode, uniqueKey: KeyType | undefined, setSelectedKey: Dispatch<SetStateAction<KeyType>>) => {
  return React.Children.map(children, (child: React.ReactElement) => {
    return React.cloneElement(child, { uniqueKey, setSelectedKey });
  });
};

const SubList: React.FunctionComponent<SubList> = (props): ReactElement => {
  const { title, setSelectedKey, uniqueKey, children } = props;

  return (<React.Fragment>
    <div className={combineClass('submenu-title')}>
      {title}
    </div>
    <ul className={combineClass('submenu-list')}>
      {renderChildren(children, uniqueKey, setSelectedKey!)}
    </ul>
  </React.Fragment>);
};

export default SubList;
