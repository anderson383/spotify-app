
import {
  useRef, useState
} from 'react';
import useOnClick from '@/hooks/use-onclick';
import { useOntoggleMenu } from '@/hooks/use-ontoggle-menu';
import styles from './menu-dropdown.module.scss';
interface MenuDropDownProps {
  className?: string | string[]
  children?: React.ReactNode
  activator?: (setOpenMenu: () => void) => React.ReactNode
}

export const MenuDropDown:React.FC<MenuDropDownProps> = ({
  children, activator, className
}) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const dropdown = useRef(null);
  const toggeMenuWind = useOntoggleMenu(dropdown, setOpenMenu);

  useOnClick(isOpenMenu, toggeMenuWind);
  const toggeMenu = () => setOpenMenu(opened => !opened);

  return (
    <div ref={dropdown} className={styles.content}>
      { activator && activator(toggeMenu) }
      <div
        className={`${ !isOpenMenu && styles.hidden } ${ className } ${ styles.activator }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {children}
      </div>
    </div>
  );
};
