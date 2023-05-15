import styles from './layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect, useState } from 'react';
import { LIGHT_MODE, DARK_MODE } from '@/configs/themes';

function Layout({ children }: { children: React.ReactNode }) {

  const [currentTheme, setCurrentTheme] = useState(LIGHT_MODE);

  useEffect(() => {
    document.body.classList.remove(LIGHT_MODE);
    document.body.classList.remove(DARK_MODE);
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  function handleToggleTheme() {
    if (currentTheme === LIGHT_MODE) {
      setCurrentTheme(DARK_MODE);
    } else {
      setCurrentTheme(LIGHT_MODE);
    }
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