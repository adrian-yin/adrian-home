import styles from './layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useState } from 'react';
import { LIGHT_MODE, DARK_MODE } from '@/configs/themes';

function Layout({ children }: { children: React.ReactNode }) {

  const [currentTheme, setCurrentTheme] = useState(LIGHT_MODE);

  function handleToggleTheme() {
    setCurrentTheme(currentTheme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE);
  }

  function handleMenuSelect() {

  }

  return (
    <div className={styles.layout}>
      <Header
        currentTheme={currentTheme}
        toggleThemeCallback={handleToggleTheme}
        menuSelectCallback={handleMenuSelect}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;