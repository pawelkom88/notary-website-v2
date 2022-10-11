import Image from "next/image";
import Link from "next/link";
import MetaData from "../../components/meta/MetaData";
import Layout from "../../components/layout/Layout";
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

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "sikorskaNotary",
    "fields.slug": params.slug,
  });

  return { props: { post: items[0] } };
}

export default function BlogDetails({ post }) {
  const { title, slug, thumbnail, featuredImage, content, date } = post.fields;

  const { url } = thumbnail.fields.file;
  const { width, height } = featuredImage.fields.file.details.image;

  return (
    <>
      <MetaData title={`Sikorska Notary - blog - ${title}`} />
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
          {documentToReactComponents(content)}
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
