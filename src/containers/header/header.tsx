import styles from './header.module.scss';

import { MENU_ITEMS } from '@/configs/menu-config';
import { AUTHOR_NAME } from '@/configs/info';

import Link from 'next/link';

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
      <Link href="/">
        <ShortText text={AUTHOR_NAME}/>
      </Link>
      <div className="right">
        <Menu menuItems={MENU_ITEMS} callback={menuSelectCallback} />
        <ThemeToggle themeName={currentTheme} toggleThemeCallback={toggleThemeCallback} />
      </div>
    </div>
  );
}

export default Header;