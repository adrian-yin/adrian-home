import styles from './short-text.module.scss';

function ShortText({ themeName, text }: { themeName: string, text: string }) {
  return (
    <div className={styles.textContainer}>
      <div className={`text ${themeName}`}>
        {text}
      </div>
    </div>
  );
}

export default ShortText;