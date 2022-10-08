import Nav from "../components/navigation/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function IndividualClient() {
  return (
    <>
      <MetaData title="Sikorska Notary - Corporate clients" />
      <Header applyStyle={true}>
        <Nav />
      </Header>
      <Layout>
        <section className="padding">
          <h2 className="heading">INDIVIDUAL CLIENTS</h2>
          <p className="paragraph">
            Each notarial matter is different, and every client is treated individually. However,
            there are some typical stages of notarial activities and lists of required documents
            similar for most clients. It is essential that great care is taken at every stage to
            minimise the risks of errors, omissions, alterations, fraud, forgery or money
            laundering.
          </p>
          <br />
          <br />
          <ol>
            <li className="underline">INITIAL CONTACT</li>
            <br />
            <p className="paragraph no-list-style">
              To avoid any delays and mistakes, make sure that you can produce the following as soon
              as you make initial contact with the notary:
            </p>
            <br />
            <ol className="list-style-letters">
              <li>
                ELECTRONIC COPY OF YOUR IDENTIFICATION DOCUMENTS (Proof of Identity and Proof of
                Residence)
              </li>
              <li>
                EVIDENCE OF AUTHORITY TO SIGN IN A REPRESENTATIVE CAPACITY (PoA, EPA, LPA, Court
                Order or a Trustee in Bankruptcy)
              </li>
              <li style={{ listStyle: "upper-alpha" }}>
                DOCUMENTS RELEVANT FOR THE MATTER (including the document to be notarised and any
                forms of instructions given by the overseas lawyer or legal advisor who prepared the
                document).
              </li>
              <li className="no-list-style">
                Make sure that you do not sign the document in advance of your appointment with the
                Notary!
              </li>
            </ol>
            <br />
            <li className="underline">
              REVIEW OF THE INSTRUCTIONS & ASSESSMENT OF YOUR UNDERSTANDING OF THE ACT
            </li>
            <br />
            <p className="paragraph">
              After reviewing the instructions and documents, the notary will advise you on the
              formalities required for completing the notarial certificates. However, they will not
              be able to advise you on the overall nature of the transactions that are to take
              effect in the receiving jurisdiction.
            </p>
            <br />
            <p className="paragraph">
              If the notary is in doubt of you understanding the effect of the act, they may suggest
              obtaining<strong> independent legal </strong>advice before completing the notarial act
              for you.
            </p>
            <br />
            <p className="paragraph">
              If the document is in a foreign language which you do not understand su­fficiently,
              the notary may have to insist that a <strong>translation</strong> be obtained. If you
              arrange for a professional translation, the translator should add his/her name,
              address, relevant qualification, and a certificate stating:
              <i>
                “Document X is a true and complete translation of document Y, to which this
                translation is attached.”
              </i>
            </p>
            <br />
            <p className="paragraph">
              If you and the Notary cannot understand each other because of a language diffi­culty,
              we may have to make arrangements for a competent <strong>interpreter</strong> to be
              available at our interview and this may involve a further fee.
            </p>
            <br />
            <li className="underline">
              CONTACTING OVERSEAS LAWYER / LEGAL ADVISORS/ FOREIGN AUTHORITY REGARDING THE
              INSTRUCTIONS
            </li>
            <br />
            <p className="paragraph">
              When there are any overseas lawyers or legal advisors involved in the matter, you
              should provide the notary with their contact details and any covering correspondence
              received from them to enable efficient communication regarding the instructions. The
              Notary may need to liaise with lawyers abroad to agree any amendments needed to ensure
              the document satisfies all legal requirements both here and abroad. This may take some
              time and may require more than one meeting to finalise.
            </p>
            <br />
            <li className="underline">ARRANGING A MEETING WITH THE NOTARY</li>
            <br />
            <p className="paragraph">
              Once the notary is satisfied with the presented documents and information, a meeting
              will be arranged. Usually, it takes no longer than half an hour if the document is
              straightforward and in the correct form. During the appointment the notary will verify
              your identity and ascertain that you understand what you are signing and that you are
              doing so of your own free will.
            </p>
            <br />
            <p className="paragraph">
              The notary will then ensure that the document is correctly executed and draft and
              affix (or endorse) a notarial certificate to the document.
            </p>
            <br />
            <li className="underline">
              ARRANGING FOR THE LEGISLATION OF THE DOCUMENT (IF APPLICABLE)
            </li>
            <br />
            <p className="paragraph">
              Sometimes it is not sufficient to notarise the document, but it also needs to be
              legalised by the FCDO or the Consulate of the country that the documents are for.
              Legalisation is the official confirmation that a signature, seal or stamp on a
              document is genuine. If the legislation is required by the receiving jurisdiction, the
              notary will advise you on the exact procedure and your available options to obtain it.
            </p>
            <br />
            <li className="underline">STORAGE OF COPIES OF THE NOTARIAL ACT</li>
            <br />
            <p className="paragraph">
              The notary is required to store your records in accordance with the Notarial Practice
              Rules 2019.
            </p>
            <br />
          </ol>
          <br />
          <ol start="0">
            <li className="underline no-list-style">ACCEPTABLE IDENTIFICATION DOCUMENTS:</li>
            <br />
            <li>
              PROOF OF IDENTITY:
              <ul>
                <li className="list-item">Passport</li>
                <li className="list-item">Photographic driving licence</li>
                <li className="list-item">EEA national identity card</li>
                <li className="list-item">Photographic firearms licence</li>
                <li className="list-item">Government issued ID</li>
              </ul>
            </li>
            <br />
            <li>
              PROOF OF RESIDENCE:
              <ul>
                <li className="list-item">
                  Bank statement or letter from your bank (less than 3 months old)
                </li>
                <li className="list-item">Utility bill</li>
                <li className="list-item">Council Tax bill</li>
                <li className="list-item">Tenancy agreement</li>
                <li className="list-item">
                  Inland Revenue tax demand or self assessment statement
                </li>
              </ul>
            </li>
            <br />
            <li>
              PROOF OF NAMES
              <ul>
                <br />
                <li className="paragraph">
                  In a case where the name on the document is different from the name you are
                  currently using or there has been a variation in the form of spelling of the name
                  over the years, please provide me as appropriate with:
                </li>
                <br />
                <li className="list-item">Certificates of Birth, Marriage or Divorce</li>
                <li className="list-item">
                  Decree or Change of Name Deed showing all the different names that you use.
                </li>
                <li className="list-item">
                  Deed Poll or Statutory Declaration confirming change of your name.
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <br />
        </section>
      </Layout>
      <Footer />
    </>
  );
}
