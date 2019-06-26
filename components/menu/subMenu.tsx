import React, {
  Dispatch,
  MouseEventHandler,
  ReactElement,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import combineClass from '../../utils/combineClass';
import { CLASS_PREFIX } from '../constants';
import Icon from '../icon';

interface SubMenu extends React.HTMLAttributes<HTMLElement> {
  selectedKey?: string;
  uniqueKey: string;
  disable?: boolean;
  setSelectedKey?: Dispatch<SetStateAction<string>>;
  mode?: string;
  openPopup?: boolean;
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

const handleBlur = (setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, mode: string | undefined) => {
  if (mode && mode === 'horizontal') {
    setShowPopup(false);
  }
};

const SubMenu: React.FunctionComponent<SubMenu> = (props): ReactElement => {
  const {
    className = '',
    onClick,
    title,
    setSelectedKey,
    selectedKey,
    disable,
    mode,
    openPopup = false,
    uniqueKey,
    children,
  } = props;
  const initPopStatus = mode === 'vertical' ? openPopup : false;
  const [showPopup, setShowPopup] = useState(initPopStatus);
  const divRef = useRef<HTMLDivElement>(null);
  const disabledClassName = disable ? `${CLASS_PREFIX}menu-item-disabled` : '';
  const disabledTitleClassName = disable ? `${CLASS_PREFIX}submenu-title-disabled` : '';
  const selectedClassName = uniqueKey === selectedKey ? `${CLASS_PREFIX}menu-item-selected` : '';
  const rotationClassName = showPopup ? 'rotation' : '';

  useEffect(() => {
    if (showPopup && divRef.current) {
      divRef.current.style.overflow = 'visible';
      divRef.current.style.height = divRef.current.scrollHeight.toString() + 'px';
      divRef.current.style.padding = mode === 'horizontal' ? '10px' : '0';
      divRef.current.style.opacity = '1';
    } else if (!showPopup && divRef.current) {
      divRef.current.style.overflow = 'hidden';
      divRef.current.style.height = '0';
      divRef.current.style.paddingTop = '0';
      divRef.current.style.paddingBottom = '0';
      divRef.current.style.opacity = '0';
    }
  }, [mode, showPopup]);

  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, { childUniqueKey: uniqueKey, mode, setSelectedKey, selectedKey });
    });
  };

  return (
    <li className={combineClass('menu-submenu', disabledClassName, className)}>
      <div
        className={combineClass('menu-submenu-title', disabledTitleClassName, selectedClassName)}
        tabIndex={1}
        onClick={e => handleClick(e, showPopup, setShowPopup, divRef, onClick)}
        onBlur={() => handleBlur(setShowPopup, mode)}
      >
        {title}
        {mode === 'vertical' ? <Icon className={combineClass(rotationClassName)} name="up" /> : null}
      </div>
      <div ref={divRef} className={combineClass('menu-submenu-container')}>
        {renderChildren()}
      </div>
    </li>
  );
};

export default SubMenu;
