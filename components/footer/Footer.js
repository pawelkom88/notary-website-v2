import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import logoWebp from "../../public/images/logo-webp.webp";
import facultyLogo from "../../public/images/faculty-logo-webp.webp";
import emailIcon from "../../public/images/email-icon.png";
import phoneIcon from "../../public/images/phone-icon.png";
import linkedInIcon from "../../public/images/linkedin-icon.png";
import facebookIcon from "../../public/images/fb-icon.png";
import whatsappIcon from "../../public/images/whatsapp.svg";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <ul className={styles["footer__contact"]}>
        <li>
          <Link href="/">
            <div className={styles["footer__contact-logo"]}>
              <Image width={84} height={84} src={logoWebp} alt="Sikorska notary logo" />
            </div>
          </Link>
        </li>
        <li className={styles.phone}>
          <div className={styles["margin-right"]}>
            <Image src={phoneIcon} alt="email Icon" />
          </div>
          <a href="tel:447401388094">+447401388094</a>
        </li>
        <li className={styles.mail}>
          <div className={styles["margin-right"]}>
            <Image src={emailIcon} alt="email Icon" />
          </div>
          <Link href="mailto:ps@sikorskanotary.co.uk">ps@sikorskanotary.co.uk</Link>
        </li>
        <li className={styles["social__media"]}>
          <a
            aria-label="Sikorska Notary facebook profile"
            href="https://www.facebook.com/profile.php?id=100086467775955"
            target="_blank"
            rel="noreferrer">
            <Image src={facebookIcon} alt="facebook Icon" />
          </a>
          <a
            aria-label="Sikorska Notary whatsapp"
            href="https://wa.me/447401388094"
            target="_blank"
            rel="noreferrer">
            <Image src={whatsappIcon} alt="whatsup Icon" />
          </a>
          <a
            aria-label="Sikorska Notary linkedin profile"
            href="https://uk.linkedin.com/in/patrycja-sikorska-86145b145"
            target="_blank"
            rel="noreferrer">
            <Image src={linkedInIcon} alt="linkedIn Icon" />
          </a>
        </li>
      </ul>
      <ul className={styles["footer__services"]}>
        <li className={styles["footer__services-title"]}>REGULATORY INFORMATION</li>
        <li className={styles["footer__services-links"]}>
          <a href="/files/TERMS_OF_BUSINESS.pdf">1. Terms of Business</a>
        </li>
        <li className={styles["footer__services-links"]}>
          <a href="/files/PRIVACY_NOTICE.pdf">2. Privacy Notice</a>
        </li>
        <li className={styles["footer__services-links"]}>
          <a href="/files/DATA_PROCESSING_TERMS.pdf">3. Data Processing Terms</a>
        </li>
        <li className={styles["footer__services-links"]}>
          <a href="/files/DATA_PROTECTION_POLICY.pdf">4. Data Protection Policy</a>
        </li>
        <li className={styles["footer__services-links"]}>
          <a href="/files/POLICY_APPOINTING_SUPPLIERS.pdf">5. Policy Appointing Suppliers</a>
        </li>
        <li className={styles["footer__services-links"]}>
          <a href="/files/TERMS_OF_USE.pdf">6. Website Terms of Use</a>
        </li>
      </ul>
      <div className={styles["footer__about"]}>
        <a href="https://www.thenotariessociety.org.uk/" target="_blank" rel="noreferrer">
          <div className={styles["faculty-logo"]}>
            <Image width={60} height={88} src={facultyLogo} alt="The Faculty Office Logo" />
          </div>
        </a>
        <p className={styles["footer__about-description"]}>
          Sikorska Notary practice is regulated pursuant to the Legal Services Act 2007 by the
          Master of the Faculties through the Faculty Office of the Archbishop of Canterbury.
        </p>
      </div>
    </footer>
  );
}
