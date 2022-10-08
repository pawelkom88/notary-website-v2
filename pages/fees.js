import Link from "next/link";
import Nav from "../components/navigation/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function FeesAndDisbursements() {
  return (
    <>
      <MetaData title="Sikorska Notary - Corporate clients" />
      <Header applyStyle={true}>
        <Nav />
      </Header>
      <Layout>
        <section className="padding">
          <h2 className="heading">Fees & Disbursements</h2>
          <h3>FEES</h3>
          <br />
          <p className="paragraph">
            The fees for notarial matters at Sikorska Notary are fixed to give you transparency and
            peace of mind.
          </p>
          <br />
          <p className="paragraph">
            I charge a minimum fee of £75 for notarisation of a simple document such as passport,
            certificate or one page letter.
          </p>
          <br />
          <p className="paragraph">
            Any notarial services that are more complex will incur a higher fee. An individual fixed
            fee quote will be provided before we commence any notarial work.
          </p>
          <br />
          <p className="paragraph">
            If it is not possible to quote a fixed fee, I will provide you with the fee structure,
            applying an hourly rate of £240, and further provide you with a proper estimate of the
            fee based on the information that you have provided at that time.
          </p>
          <br />
          <p className="paragraph">No VAT applies to my fees.</p>
          <br />
          <p className="paragraph">
            Payment can be made in pound sterling only by cash or bank transfer.
          </p>
          <br />
          <br />
          <h3>DISBURSEMENTS</h3>
          <br />
          <p className="paragraph">
            I will inform you in advance if I have to make any additional payments in your matter.
            You are responsible for any disbursements made on your behalf such as:
          </p>
          <br />
          <ul>
            <li className="list-item">
              Legalisation fees payable to the FCDO and/or Consulate/ Embassy
            </li>
            <li className="list-item">Translation or interpretation fees</li>
            <li className="list-item">Agent fees</li>
            <li className="list-item">Travelling expenses</li>
            <li className="list-item">Courier and postage fees</li>
            <li className="list-item">Companies House search fees</li>
            <li className="list-item">Other third – party fee.</li>
          </ul>
          <br />
          <br />
          <h3>CHANGES TO FEES</h3>
          <br />
          <p className="paragraph">
            Occasionally unforeseen or unusual issues arise during the course of the matter which
            may result in a revision of my fee, for example if further documents need to be
            notarised, or if translation or legalisation became required.
          </p>
          <br />
          <p className="paragraph">
            If you would like to obtain a full and comprehensive fee quote in your matter, please
            email <a href="mailto:ps@sikorskanotary.co.uk">ps@sikorskanotary.co.uk</a>.
          </p>
          <br />
          <br />
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="current" aria-current="page">
                Fees
              </li>
              <li>
                <Link href="legislation">Apostille & Legislation</Link>
              </li>
              <li>
                <Link href="legal">Regulatory</Link>
              </li>
            </ol>
          </nav>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
