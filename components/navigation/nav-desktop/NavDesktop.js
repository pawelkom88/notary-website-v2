import Link from "next/link";
import Image from "next/image";
import { logoPng } from "../../../helpers/images";
import styles from "./NavDesktop.module.css";

export default function NavDesktop() {
  return (
    <>
      <header>
        <nav className={styles["nav-bar"]}>
          <Link href="/">
            <div className={styles.logo}>
              <Image width={66} height={66} src={logoPng} alt="Sikorska notary logo" />
            </div>
          </Link>
          <ul className={styles["nav-links"]}>
            <li className={styles["nav-link"]}>
              <a href="service.html">Notarial service</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="legislation.html">Apostille & Legislation</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="fees.html">Fees</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="legal.html">Regulatory</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="index.html#contact">Contact</a>
            </li>
          </ul>
          <button type="button" className={`${styles["cta-btn"]} btn`}>
            Make an enquiry
          </button>
        </nav>
      </header>
    </>
  );
}
