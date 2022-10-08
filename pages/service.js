import Nav from "../components/navigation/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function Service() {
  return (
    <>
      <MetaData title="Sikorska Notary - Corporate clients" />
      <Header applyStyle={true}>
        <Nav />
      </Header>
      <Layout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, itaque?</Layout>
      <Footer />
    </>
  );
}
