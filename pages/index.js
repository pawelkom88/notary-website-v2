import Main from "./main";
import NavDesktop from "../components/navigation/nav-desktop/NavDesktop";
import Layout from "../components/layout/Layout";
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <MetaData title="Sikorska Notary - mobile notary in Bristol and South West" />
      <Hero>
        <Header>
          <NavDesktop />
        </Header>
      </Hero>
      <Layout>
        <Main />
        <Contact />
        <ContactForm />
      </Layout>
      <Footer />
    </>
  );
}
