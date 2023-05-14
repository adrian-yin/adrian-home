import styles from './layout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useState } from 'react';
import { LIGHT_MODE, DARK_MODE } from '@/configs/themes';

function Layout({ children }: { children: React.ReactNode }) {

  const [currentTheme, setCurrentTheme] = useState(LIGHT_MODE);

  return (
    <div className={styles.layout}>
      <Header currentTheme={currentTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;