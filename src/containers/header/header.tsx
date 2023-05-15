import styles from './header.module.scss';
import { MENU_ITEMS } from '@/configs/menu-config';
import { AUTHOR_NAME } from '@/configs/info';

import ShortText from '@/components/short-text/short-text';
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
      <ShortText themeName={currentTheme} text={AUTHOR_NAME}/>
      <div className="right">
        <Menu menuItems={MENU_ITEMS} themeName={currentTheme} callback={menuSelectCallback} />
        <ThemeToggle themeName={currentTheme} callback={toggleThemeCallback} />
      </div>
    </div>
  );
}

export default Header;