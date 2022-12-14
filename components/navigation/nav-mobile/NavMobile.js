import Image from "next/image";
import Link from "next/link";
import emailIcon from "../../../public/images/email-icon.png";
import phoneIcon from "../../../public/images/phone-icon.png";
import styles from "./NavMobile.module.css";

export default function NavMobile({ showMenu }) {
  return (
    <div
      role="navigation"
      className={`${styles["mobile__menu"]} ${showMenu ? styles["menu-open"] : ""}`}
      aria-label="mobile menu">
      <ul className={styles["mobile__menu-links"]}>
        <li className={styles["mobile__menu-link"]}>
          <Link href="service">Notarial service</Link>
        </li>
        <li className={styles["mobile__menu-link"]}>
          <Link href="legislation">Apostille & Legislation</Link>
        </li>
        <li className={styles["mobile__menu-link"]}>
          <Link href="fees">Fees & Disbursements</Link>
        </li>
        <li className={styles["mobile__menu-link"]}>
          <Link href="legal">Legal & Regulatory Information</Link>
        </li>
        <li className={styles["mobile__menu-link"]}>
          <Link href="/#contact">Contact</Link>
        </li>
        <li className={styles["mobile__menu-link"]}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <div className={styles["mobile__menu-contact"]}>
        <p>Monday - Friday</p>
        <p>9.00 am until 5.00 pm</p>
        <a href="tel:447401388094" aria-label="Call Patrycja Sikorska">
          <Image src={emailIcon} alt="email Icon" />
        </a>
        <a href="mailto:ps@sikorskanotary.co.uk" aria-label="Email Patrycja Sikorska">
          <Image src={phoneIcon} alt="email Icon" />
        </a>
      </div>
    </div>
  );
}
