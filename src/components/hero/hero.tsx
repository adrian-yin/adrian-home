import styles from './hero.module.scss';

function Hero({ text }: { text: string}) {
  return (
    <div className={styles.heroContainer}>
      <h1 className="title">{text}</h1>
    </div>
  );
}

export default Hero;