import styles from './theme-toggle.module.scss';
import Moon from '@/assets/logo/moon.svg';
import Sun from '@/assets/logo/sun.svg';
import { DARK } from '@/configs/themes';
import { LIGHT } from '@/configs/themes';

function ThemeToggle({
  themeName,
  toggleThemeCallback,
}: {
  themeName: string,
  toggleThemeCallback: Function
}) {

  function handleClick() {
    if (themeName === DARK) {
      toggleThemeCallback(LIGHT);
    } else if (themeName === LIGHT) {
      toggleThemeCallback(DARK);
    }
  }

  return (
    <div className={styles.themeToggleContainer}>
      <button className={`theme-toggle ${themeName}`} onClick={handleClick}>
        <div className="left">
          <Sun />
          <div className="circle"></div>
        </div>
        <div className="right">
          <Moon />
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;