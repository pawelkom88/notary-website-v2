import Main from "./main";
import Layout from "../components/layout/Layout";
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact-form/ContactForm";
import { createClient } from "contentful";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";
import Nav from "../components/navigation/Nav";
import Messanger from "../components/messanger-chat/Messanger";

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   client;
// }

export default function Home() {
  return (
    <>
      <MetaData title="Sikorska Notary - mobile notary in Bristol and South West" />
      <Hero>
        <Header>
          <Nav />
        </Header>
      </Hero>
      <Layout>
        <Main />
        <Contact />
        <ContactForm />
      </Layout>
      <Footer />
      <Messanger />
    </>
  );
}
