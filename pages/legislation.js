import Link from "next/link";
import Nav from "../components/navigation/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function ApostilleAndLegislation() {
  return (
    <>
      <MetaData title="Sikorska Notary - Corporate clients" />
      <Header applyStyle={true}>
        <Nav />
      </Header>
      <Layout>
        <section class="padding">
          <h3 class="heading">APOSTILLE & LEGISLATION</h3>
          <br />
          <p class="paragraph">
            Legalisation is the process by which the signature and seal of the notary are
            authenticated by the Foreign Office and the Consulate of the country in which the
            document is to be used.
          </p>
          <br />
          <p class="paragraph">
            Countries which are part of the Commonwealth most likely do not require notarial acts
            issued in the United Kingdom to be legalised. However, it is always best to confirm this
            with the receiving jurisdiction to avoid unnecessary delays.
          </p>
          <br />
          <br />
          <h3>APOSTILLE LEGISLATION</h3>
          <br />
          <p class="paragraph">
            It is sufficient to legalise documents for use in Countries that have accepted the Hague
            Convention of 5th October 1961 over the legalisation of public documents by way of an
            Apostille at the Foreign, Commonwealth & Development Office (FCDO).
          </p>
          <br />
          <p class="paragraph">
            Apostille is an official certificate that the FCDO will add to the back of some
            documents before they can be used abroad. 
          </p>
          <p class="paragraph">
            The FCDO offers the options of Premium or Standard services. For more information,
            please visit:
            <a href="https://www.gov.uk/get-document-legalised">
              https://www.gov.uk/get-document-legalised
            </a>
          </p>
          <br />
          <p class="paragraph">
            Fees for Legalisation at the Foreign and Commonwealth Office (FCO):
          </p>
          <ul>
            <li class="list-item">Legalisation standard service £30</li>
            <li class="list-item">Legalisation express service £75</li>
            <li class="list-item">Attendance to FCO standard £22+VAT</li>
            <li class="list-item">Attendance to FCO express £32+VAT</li>
          </ul>
          <br />
          <br />
          <br />
          <h3>CONSULAR/ EMBASSY LEGALISATION</h3>
          <br />
          <p class="paragraph">
            Countries which are not party to the Hague Convention of 5th October 1961 over the
            legalisation of public documents must obtain legalisation of the documents at the
            Consulate/ Embassy of the relevant country. In some cases, Apostille is still required
            before the Consular Legalisation is affixed. 
          </p>
          <br />
          <p class="paragraph">
            It would be best to send a copy of any document you need legalised, so we can advise
            accordingly and provide you with the accurate fee quote. If you are unsure about whether
            or not you need any documents to be legalised, simply contact me.
          </p>
          <br />
          <p class="paragraph">Fees for Legislation at Consulates / Embassies:</p>
          <ul>
            <li class="list-item">Consular legalisation fee TBC with each Consulate</li>
            <li class="list-item">Attendance to the Consulate £40+VAT</li>
          </ul>
          <br />
          <p class="paragraph">
            Sikorska Notary uses specialised agents assisting private individuals and corporate
            clients with their document attestation and legalisation requirements for use worldwide.
          </p>
          <br />
          <br />
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="current" aria-current="page">
                Apostille & Legislation
              </li>
              <li>
                <Link href="service">Notarial service</Link>
              </li>
              <li>
                <Link href="fees">Fees</Link>
              </li>
            </ol>
          </nav>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
