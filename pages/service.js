import Link from "next/link";
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
      <Layout>
        <section class="padding">
          <h2 class="heading">Notarial service</h2>
          <p class="paragraph">
            In the vast majority of cases, the acts of an English or Welsh notary are destined for
            use in a foreign jurisdiction. In consequence, there is a great deal of variety in the
            work of a notary. The clients are varied as are the transactions and procedures that
            they are involved in.
          </p>
          <br />
          <p class="paragraph">
            It is impossible to list all potential notarial services. However, the most common are
            listed below.
          </p>
          <br />
          <p class="paragraph">
            If you are not sure if you need a notary’s help, please do not hesitate to email <a href="mailto:ps@sikorskanotary.co.uk">ps@sikorskanotary.co.uk</a>.
          </p>
          <br />
          <br />
          <h3>FOR INDIVIDUAL CLIENTS:</h3>
          <ul class="individual-clients">
            <li class="list-item">Witnessing Powers of Attorney for worldwide use</li>
            <li class="list-item">Administering oaths and affidavits for use abroad</li>
            <li class="list-item">Consent letters to let one parent travel with children</li>
            <li class="list-item">
              Statutory declarations made before a notary (eg. confirming single status when getting
              married abroad)
            </li>
            <li class="list-item">
              Copies of passports (eg. for setting up a foreign bank account)
            </li>
            <li class="list-item">
              Copies of any other documents, which require a notarial seal (eg. qualification
              certificates) Providing certificates certifying the authenticity of signatures and
              execution of private documents and of copy documents
            </li>
            <li class="list-item">Application forms (eg. Pension)</li>
            <li class="list-item">Retirement life certificates</li>
            <li class="list-item">Purchases and sale of foreign properties and investments</li>
            <li class="list-item">Transfers of land, houses, shares</li>
            <li class="list-item">Change of name deed and notarisation</li>
            <li class="list-item">Adoption applications</li>
            <li class="list-item">Certifying translations of documents</li>
          </ul>
          <br />
          <h3>FOR CORPORATE CLIENTS:</h3>
          <ul class="corporate-clients">
            <li class="list-item">
              Authenticating company and business documents and transactions (eg. resolutions,
              minutes, certificates of incorporation, memorandum & articles of association,
              accounts, reports)
            </li>
            <li class="list-item">Notarisation of the corporate Powers of Attorney</li>
            <li class="list-item">
              Certification of Identity of Directors, Secretaries and other Company Officers
            </li>
            <li class="list-item">Certifying translations of documents</li>
            <li class="list-item">Sale and purchase of commercial properties/land abroad</li>
            <li class="list-item">Affidavits and Statutory Declarations</li>
            <li class="list-item">
              Authenticating documents used to set up bank account or business branch offices (eg.
              Good Standing Certificates, Certificates of Law, Application forms)
            </li>
            <li class="list-item">Trademark Assignments</li>
            <li class="list-item">Notarisation of the Loan Agreements and Mortgage documents</li>
            <li class="list-item">
              Certifying the execution of Commercial Contracts for International Use
            </li>
            <li class="list-item">Share Pledges</li>
          </ul>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="current" aria-current="page">
              Service
            </li>
            <li>
              <Link href="individual">Individual clients</Link>
            </li>
            <li>
              <Link href="corporate">Corporate clients</Link>
            </li>
          </ol>
        </nav>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
