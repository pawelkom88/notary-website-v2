import Image from "next/image";
import Link from "next/link";
import MetaData from "../components/meta/MetaData";
import BlogPost from "../components/blogPost/blogPost";
import Header from "../components/header/Header";
import logoWebp from "../public/images/logo-webp.webp";
import phoneIcon from "../public/images/phone-icon.png";
import emailIcon from "../public/images/email-icon.png";
import facebookIcon from "../public/images/fb-icon.png";
import whatsappIcon from "../public/images/whatsapp.svg";
import linkedInIcon from "../public/images/linkedin-icon.png";
import styles from "../styles/blog/Blog.module.css";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "sikorskaNotary", select: "fields" });

  return {
    props: {
      posts: response.items,
      revalidate: 10,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <MetaData title="Sikorska Notary - Blog" />
      <Header applyStyle={true}>
        <div className={styles.wrapper}>
          <Image width={70} height={70} src={logoWebp} alt="Sikorska Notary Logo" />
          <Link href="https://www.sikorskanotary.co.uk">Homepage</Link>
        </div>
      </Header>
      <h1 className="heading">Notary Blog</h1>
      {posts.length === 0 && <h3>There are no posts</h3>}
      <div className={`${styles.container} padding`}>
        {posts.map(post => (
          <BlogPost key={post.sys.id} post={post} />
        ))}
      </div>
      <footer className={styles.footer}>
        <ul className={styles["footer__contact"]}>
          <li>
            <a href="tel:447401388094">
              <Image width={25} height={25} src={phoneIcon} alt="email Icon" />
            </a>
          </li>
          <li>
            <Link href="mailto:ps@sikorskanotary.co.uk">
              <Image width={25} height={25} src={emailIcon} alt="email Icon" />
            </Link>
          </li>
          <li>
            <a
              aria-label="Sikorska Notary facebook profile"
              href="https://www.facebook.com/profile.php?id=100086467775955"
              target="_blank"
              rel="noreferrer">
              <Image width={25} height={25} src={facebookIcon} alt="facebook Icon" />
            </a>
          </li>
          <li>
            <a
              aria-label="Sikorska Notary whatsapp"
              href="https://wa.me/447401388094"
              target="_blank"
              rel="noreferrer">
              <Image width={25} height={25} src={whatsappIcon} alt="whatsup Icon" />
            </a>
          </li>
          <li>
            <a
              aria-label="Sikorska Notary linkedin profile"
              href="https://uk.linkedin.com/in/patrycja-sikorska-86145b145"
              target="_blank"
              rel="noreferrer">
              <Image width={25} height={25} src={linkedInIcon} alt="linkedIn Icon" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
