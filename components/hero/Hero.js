import styles from "./Hero.module.css";

export default function Hero({ children }) {
  return (
    <section className={styles.hero}>
      {children}
      <h1 className={styles["hero__heading"]}>
        Sikorska notary -<br />
        the notary that cares
      </h1>
      <p className={styles["hero__paragraph"]}>
        As a mobile notary, I provide a full range of notarial services for clients at their
        convenience. Whether it is in your office, home, place of business or residence, I am able
        to meet you at any place to help you in the most efficient way in your notarial matter.
      </p>
      <a href="#main" className={`${styles["hero__btn"]} btn `}>
        Learn more
      </a>
      <span className={styles.latin}>Lex est quod notamus</span>
    </section>
  );
}
