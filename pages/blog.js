import Nav from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";
import BlogPost from "../components/blogPost/blogPost";
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
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <MetaData title="Sikorska Notary - Blog" />
      <Header applyStyle={true}>
        <Nav />
      </Header>
      <h1 className="heading">Blog</h1>
      {posts.length === 0 && <h3>There are no posts</h3>}
      <div className="container">
        {posts.map(post => (
          <BlogPost key={post.sys.id} post={post} />
        ))}
      </div>
      <Footer />
    </>
  );
}
