import { useState } from "react";
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
import polishFlag from "../public/images/polish-flag.svg";
import ukFlag from "../public/images/uk-flag.svg";
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
    },
    revalidate: 60,
  };
}

export default function Blog({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  function handleLanguage(condition) {
    const postsInEnglish = posts.filter(post => post.fields.isEnglish === condition);
    setFilteredPosts(postsInEnglish);
  }

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
      <br />

      <p className="paragraph">
        Hello and welcome to Sikorska Notary Blog, where I share my insights and tips on various
        notarial matters. My name is Patrycja Sikorska and I am a mobile notary in Bristol and the
        South West of England.
      </p>
      <p className="paragraph">
        As a notary, my main function is to certify the authenticity of documents, signatures and
        identities for use in foreign countries. I also advise clients on the formalities and
        requirements of different legal systems and jurisdictions. I deal with both individual and
        corporate clients, and each case is different and treated individually.
      </p>

      <p className="paragraph">
        In this blog, I will share with you some of the typical stages of notarial activities, the
        documents and evidence required for different types of transactions, the fees and
        disbursements involved, and the legalisation process for different countries. I will also
        answer some of the frequently asked questions and common misconceptions about notaries and
        their role. I hope you will find this blog informative and helpful, and if you have any
        questions or comments, please feel free to contact me.
      </p>

      <br />
      {posts.length === 0 ? (
        <h3>There are no posts</h3>
      ) : (
        <div className={styles.language}>
          <h3>Choose language</h3>
          <div className={styles["language-options"]}>
            <Image
              onClick={() => handleLanguage(false)}
              width={50}
              height={50}
              src={polishFlag}
              alt="Polish flag"
            />
            <Image
              onClick={() => handleLanguage(true)}
              width={50}
              height={50}
              src={ukFlag}
              alt="UK flag"
            />
          </div>
        </div>
      )}

      <div className={`${styles.container} padding`}>
        {filteredPosts.map(post => {
          return <BlogPost key={post.sys.id} post={post} />;
        })}
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
