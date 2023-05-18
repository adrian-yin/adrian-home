import styles from './layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect, useState } from 'react';
import { DARK } from '@/configs/themes';

function Layout({ children }: { children: React.ReactNode }) {

  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    const currentThemeStorage = localStorage.getItem('currentTheme') || DARK;
    setCurrentTheme(currentThemeStorage);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('theme-name', currentTheme)
  }, [currentTheme]);

  function handleToggleTheme(themeName: string) {
    setCurrentTheme(themeName);
    localStorage.setItem('currentTheme', themeName);
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