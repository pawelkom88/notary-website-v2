import Modal from "../../modal/Modal";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logoPng } from "../../../helpers/images";
import styles from "./NavDesktop.module.css";

export default function NavDesktop() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(isShown => !isShown);
  }

  return (
    <>
      <nav className={styles["nav-bar"]}>
        <Link href="/">
          <div className={styles.logo}>
            <Image width={66} height={66} src={logoPng} alt="Sikorska notary logo" />
          </div>
        </Link>
        <ul className={styles["nav-links"]}>
          <li className={styles["nav-link"]}>
            <a href="service">Notarial service</a>
          </li>
          <li className={styles["nav-link"]}>
            <a href="legislation">Apostille & Legislation</a>
          </li>
          <li className={styles["nav-link"]}>
            <a href="fees">Fees</a>
          </li>
          <li className={styles["nav-link"]}>
            <a href="legal">Regulatory</a>
          </li>
          <li className={styles["nav-link"]}>
            <a href="index#contact">Contact</a>
          </li>
          <li className={styles["nav-link"]}>
            <a href="blog">Blog</a>
          </li>
        </ul>
        <button onClick={handleModal} type="button" className={`${styles["cta-btn"]} btn`}>
          Make an enquiry
        </button>
      </nav>
      {showModal && <Modal showModal={showModal} handleModal={handleModal} />}
    </>
  );
}
