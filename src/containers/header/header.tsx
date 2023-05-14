import styles from './header.module.scss';
import { MENU_ITEMS } from '@/configs/menu-config';

import Menu from '@/components/menu/menu';
import ThemeToggle from '@/components/theme-toggle/theme-toggle';

function Header({
  currentTheme,
  menuSelectCallback,
  toggleThemeCallback,
}: {
  currentTheme: string,
  menuSelectCallback: Function,
  toggleThemeCallback: Function
}) {

  return (
    <div className={styles.header}>
      <Menu menuItems={MENU_ITEMS} themeName={currentTheme} callback={menuSelectCallback} />
      <ThemeToggle themeName={currentTheme} callback={toggleThemeCallback}></ThemeToggle>
    </div>
  );
}

export default Header;