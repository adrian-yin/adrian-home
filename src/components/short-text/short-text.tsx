import styles from './short-text.module.scss';

function ShortText({ text }: { text: string }) {
  return (
    <div className={styles.textContainer}>
      <div className="text">
        {text}
      </div>
    </div>
  );
}

export default ShortText;