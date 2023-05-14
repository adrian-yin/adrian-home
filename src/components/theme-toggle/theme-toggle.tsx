import styles from './theme-toggle.module.scss';
import Moon from '@/assets/logo/moon.svg';
import Sun from '@/assets/logo/sun.svg';

function ThemeToggle({
  themeName,
  callback,
}: {
  themeName: string,
  callback: Function
}) {

  function handleClick() {
    callback();
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