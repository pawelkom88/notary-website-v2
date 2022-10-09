import useRedirect from "../../hooks/useRedirect";
import Image from "next/image";
import { logoPng } from "../../helpers/images";
import styles from "./custom.module.css";

export default function NotFound({ message, time, children }) {
  const { countdown } = useRedirect(time);

  return (
    <div className={styles.container}>
      <Image src={logoPng} alt="Sikorska notary logo" />
      <h1 className={`${styles.heading} heading`}>{message}</h1>
      <br />
      {children}
      <br />
      <p>
        Redirect in : <span className={styles.timer}>{countdown}</span>
      </p>
      <br />
    </div>
  );
}
