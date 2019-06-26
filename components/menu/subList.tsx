import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import combineClass from '../../utils/combineClass';

interface SubList extends React.HTMLAttributes<HTMLElement> {
  setSelectedKey?: Dispatch<SetStateAction<string>>;
  setIfSelected?: Dispatch<SetStateAction<boolean>>;
  childUniqueKey?: string;
  selectedKey?: string;
  mode?: string;
}

const SubList: React.FunctionComponent<SubList> = (props): ReactElement => {
  const { title, setSelectedKey, selectedKey, mode, setIfSelected, childUniqueKey, children } = props;

  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, { childUniqueKey, selectedKey, setSelectedKey, mode, setIfSelected });
    });
  };

  return (
    <>
      {title ?
        <div className={combineClass('submenu-title')}>{title}</div>
        : null
      }
      <ul className={combineClass('submenu-list')}>
        {renderChildren()}
      </ul>
    </>
  );
};

export default SubList;
