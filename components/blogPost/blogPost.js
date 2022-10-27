import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./blogPost.module.css";

export default function blogPost({ post }) {
  const { title, slug, thumbnail, date } = post.fields;
  const { url } = thumbnail.fields.file;
  const { width, height } = thumbnail.fields.file.details.image;

  return (
    <div className={styles.card}>
      <div className={styles["card__header"]}>
        <Image src={`https:${url}`} alt="blog image" width={width} height={height} />
      </div>
      <div className={styles["card__body"]}>
        <h4 className={`${styles["card-heading"]} heading`}>{title}</h4>
        {/* <div className="paragraph">{content.slice(0,80)}...</div> */}
        <span className="underline">
          <Link href={"/blog/" + slug}>read more</Link>
        </span>
      </div>
      <div className={styles["card__footer"]}>
        <div className={styles.user}>
          <div className={styles["user__info"]}>
            <h5>Patrycja Sikorska</h5>
            <small>{date.replace("T", " at ").slice(0, 19)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
