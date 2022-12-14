import Image from "next/image";
import Link from "next/link";
import MetaData from "../../components/meta/MetaData";
import Layout from "../../components/layout/Layout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const response = await client.getEntries();

  const paths = response.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "sikorskaNotary",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "Home",
        permanent: false,
      },
    };
  }

  return { props: { post: items[0] }, revalidate: 60 };
}

export default function BlogDetails({ post }) {
  if (!post) return <Skeleton count={5} />;

  const { title, slug, thumbnail, featuredImage, content1, date } = post.fields;
  const { url } = thumbnail.fields.file;
  const { width, height } = featuredImage.fields.file.details.image;
  return (
    <>
      <MetaData title={`Sikorska Notary - blog - ${title}`} card={url}/>
      <Layout>
        <h1 style={{ margin: "2rem 0" }} className="heading">
          {title}
        </h1>
        <figure>
          <Image src={"https:" + url} alt="blog post image" width={width} height={height} />
          <figcaption style={{ fontSize: ".8rem" }}>
            <i>Image source: {"https:" + url}</i>
          </figcaption>
        </figure>
        <div style={{ margin: "2rem 0" }} className="paragraph">
          {documentToReactComponents(content1)}
        </div>
        <div style={{ margin: "2rem 0" }}>
          <h5>Patrycja Sikorska</h5>
          <small>{date.replace("T", " at ").slice(0, 19)}</small>
        </div>
        <span style={{ margin: "2rem 0" }} className="underline">
          <Link href="../blog">back to blog</Link>
        </span>
      </Layout>
    </>
  );
}
