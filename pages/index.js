import Head from "next/head";
import Main from "./main";
import NavDesktop from "../components/navigation/nav-desktop/NavDesktop";
import Layout from "../components/layout/Layout";
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <a href="#main" className="visible-hidden">
        Jump directly to main content
      </a>
      <Hero>
        <NavDesktop />
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
