import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main id="main">
      <section className={styles.container}>{children}</section>
    </main>
  );
}
