import Link from "next/link";
import Nav from "../components/navigation/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function LegalAndRegulatoryInformation() {
  return (
    <>
      <MetaData title="Sikorska Notary - Corporate clients" />
      <Header applyStyle={true}>
        <Nav />
      </Header>
      <Layout>
        <section className="padding">
          <h2 className="heading">LEGAL & REGULATORY INFORMATION</h2>
          <h3>Regulatory information</h3>
          <br />
          <p className="paragraph">
            Sikorska Notary Limited is a private limited company registered at the Companies House
            of England and Wales with number 14336748.
          </p>
          <br />
          <p className="paragraph">
            Sikorska Notary Limited supplies notarial services to individuals throughout England and
            Wales.
          </p>
          <br />
          <p className="paragraph">
            Sikorska Notary Limited Faculties through the Faculty Office of the Archbishop of
            Canterbury:
          </p>
          <br />
          <ul className="list-indent">
            <li className="line-height">The Faculty Office 1, The Sanctuary</li>
            <li className="line-height">Westminster, London SW1P 3JT</li>
            <li className="line-height">
              telephone:<a href="tel:020 7222 5381">020 7222 5381</a>
            </li>
            <li className="line-height">
              email: 
              <a href="mailto:faculty.office@1thesanctuary.com">faculty.office@1thesanctuary.com</a>
            </li>
            <li className="line-height">
              Website:<a href="https://www.facultyoffice.org.uk/">www.facultyoffice.org.uk</a>
            </li>
          </ul>
          <br />
          <h3>Redress Information</h3>
          <br />
          <p className="paragraph">
            Sikorska Notary maintains professional indemnity liability cover, which is at least the
            minimum level of cover specified by the Master of the Faculties (presently £1 million).
            Sikorska Notary’s professional indemnity insurance is underwritten by HCC International
            Insurance Company PLC Fitzwilliam House, 10 St Mary Axe, London EC3A 8BF.
          </p>
          <br />

          <p className="paragraph">
            Further information on Sikorska Notary’s insurance cover may be obtained by sending
            e-mail to <a href="mailto:ps@sikorskanotary.co.uk">ps@sikorskanotary.co.uk</a>.
          </p>
          <br />
          <h3>Complaint Procedure Information</h3>
          <br />
          <p className="paragraph">
            Sikorska Notary aims to provide all clients with efficient and high standard of
            services. However, in the unlikely event that you should wish to complain, please get in
            touch with us immediately so that we can do our best to resolve the problem for you.
          </p>
          <br />
          <ol>
            <li className="line-height">
              If you are dissatisfied about the service you have received please do not hesitate to
              contact us directly to discuss any concerns and we will do our best to resolve any
              issues at this stage. Our telephone number is
              <a href="tel:447401388094"> +44 7401388094</a> and email address is
              <a href="mailto:ps@sikorskanotary.co.uk">ps@sikorskanotary.co.uk</a>.
            </li>
            <br />
            <li className="line-height">
              If we are unable to resolve the matter you may then complain to the Notaries Society
              of which we are a members, and who have a complaints procedure approved by the Faculty
              Office. This procedure is free to use and is designed to provide a quick resolution to
              any dispute. In that case please write (but do not enclose any original documents)
              with full details of your complaint to:
            </li>
            <br />
            <ul className="list-indent">
              <li className="line-height">Christopher Vaughan</li>
              <li className="line-height">Secretary of The Notaries Society</li>
              <li className="line-height">PO Box 7655</li>
              <li className="line-height">Milton Keynes</li>
              <li className="line-height">MK11 9NR</li>
              <li className="line-height">
                telephone:<a href="tel:01908 803527">01908 803527</a>
              </li>
              <li className="line-height">
                email: 
                <a href="mailto:secretary@thenotariessociety.org.uk">
                  secretary@thenotariessociety.org.uk
                </a>
                .
              </li>
            </ul>
            <br />
            <li className="line-height">
              Finally, even if you have your complaint considered under the Notaries Society’s
              Complaints Procedure, you may at the end of that procedure or after a period of eight
              weeks from the date you first notified us that you were dissatisfied, make your
              complaint to the Legal Ombudsman if you are not happy with the result.
            </li>
            <br />
            <ul className="list-indent">
              <li className="line-height">The Legal Ombudsman’s contact details are:</li>
              <li className="line-height">Legal Ombudsman</li>
              <li className="line-height">PO Box 6806</li>
              <li className="line-height">Wolverhampton</li>
              <li className="line-height">WV1 9WJ</li>
              <li className="line-height">
                telephone:<a href="tel:0300 555 0333 ">0300 555 0333 </a>
              </li>
              <li className="line-height">
                email: 
                <a href="mailto:enquiries@legalombudsman.org.uk ">
                  enquiries@legalombudsman.org.uk{" "}
                </a>
                .
              </li>
              <li className="line-height">
                website: <a href="https://www.legalombudsman.org.uk/">www.legalombudsman.org.uk</a>
              </li>
            </ul>
          </ol>
          <br />
          <br />
          <p className="paragraph">
            If you decide to make a complaint to the Legal Ombudsman, you must refer your matter to
            the Legal Ombudsman within six months from the conclusion of the complaint process.
          </p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="current" aria-current="page">
                Legal & Regulatory information
              </li>
              <li>
                <Link href="service">Notarial service</Link>
              </li>
              <li>
                <Link href="legislation">Apostille & Legislation</Link>
              </li>
            </ol>
          </nav>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
