import styles from './header.module.scss';
import Menu from '@/components/menu/menu';
import { MENU_ITEMS } from '@/configs/menu-config';

function Header({ currentTheme }: { currentTheme: string }) {

  function callBack() {
    // TODO: improve level of this callBack
  }

  return (
    <div className={styles.header}>
      <Menu menuItems={MENU_ITEMS} themeName={currentTheme} selectCallBack={callBack} />
    </div>
  );
}

export default Header;