import React, {
  Dispatch,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import { KeyType } from './menu';

interface SubMenu extends React.HTMLAttributes<HTMLElement> {
  uniqueKey?: KeyType;
  selectedKey?: KeyType;
  disable?: boolean;
  setSelectedKey?: Dispatch<SetStateAction<KeyType>>;
}

const handleClick = (
  event: React.MouseEvent,
  showPopup: boolean,
  setShowPopup: Dispatch<SetStateAction<boolean>>,
  divRef: RefObject<HTMLDivElement>,
  onClick: MouseEventHandler | undefined,
) => {
  if (onClick) {
    onClick(event);
  }

  setShowPopup(!showPopup);
};

const renderChildren = (
  children: ReactNode,
  uniqueKey: KeyType | undefined,
  setSelectedKey: Dispatch<SetStateAction<KeyType>> | undefined,
) => {
  return React.Children.map(children, (child: React.ReactElement) => {
    return React.cloneElement(child, { uniqueKey, setSelectedKey });
  });
};

const SubMenu: React.FunctionComponent<SubMenu> = (props): ReactElement => {
  const { className = '', onClick, title, setSelectedKey, uniqueKey, selectedKey, disable, children } = props;
  const [showPopup, setShowPopup] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const disabledClassName = disable ? `${CLASS_PREFIX}menu-item-disabled` : '';
  const disabledTitleClassName = disable ? `${CLASS_PREFIX}submenu-title-disabled` : '';
  const selectedClassName = uniqueKey === selectedKey ? `${CLASS_PREFIX}menu-item-selected` : '';

  useEffect(() => {
    if (showPopup && divRef.current) {
      divRef.current.style.height = divRef.current.scrollHeight.toString() + 'px';
      divRef.current.style.padding = '10px';
      divRef.current.style.opacity = '1';
    } else if (!showPopup && divRef.current) {
      divRef.current.style.height = '0';
      divRef.current.style.paddingTop = '0';
      divRef.current.style.paddingBottom = '0';
      divRef.current.style.opacity = '0';
    }
  }, [showPopup]);

  return (
    <li className={combineClass('menu-submenu', disabledClassName, className)} key={uniqueKey}>
      <div
        className={combineClass('menu-submenu-title', disabledTitleClassName, selectedClassName)}
        tabIndex={1}
        onClick={e => handleClick(e, showPopup, setShowPopup, divRef, onClick)}
        onBlur={() => setShowPopup(false)}
      >
        {title}
      </div>
      <div ref={divRef} className={combineClass('menu-submenu-container')}>
        {renderChildren(children, uniqueKey, setSelectedKey)}
      </div>
    </li>
  );
};

export default SubMenu;
