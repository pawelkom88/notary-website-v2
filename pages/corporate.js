import NavDesktop from "../components/navigation/nav-desktop/NavDesktop";
import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";
import MetaData from "../components/meta/MetaData";
import Header from "../components/header/Header";

export default function Corporate() {
  return (
    <>
      <MetaData title="Sikorska Notary - Corporate clients" />
      <Header applyStyle={true}>
        <NavDesktop />
      </Header>
      <Layout>
        <section className="padding">
          <h2 className="heading">CORPORATE CLIENTS</h2>
          <p className="paragraph">
            Dealing with an instruction from a corporate body means that the notary must properly
            identify both the individuals and the company. Great care is essential at every stage to
            minimise the risks of errors, omissions, alterations, fraud, forgery or money
            laundering.
          </p>
          <br />
          <ol>
            <li className="underline">INITIAL CONTACT</li>
            <br />
            <ol className="list-style-letters">
              <p className="paragraph">
                To avoid any delays and mistakes, make sure that you can produce the following as
                soon as you make initial contact with the notary:
              </p>
              <li>
                INCORPORATION DOCUMENTS (unless this is available the Companies House website)
              </li>
              <li>
                ELECTRONIC COPY OF IDENTIFICATION DOCUMENTS FOR THE PERSON/S SIGNING ON BEHALF OF
                THE COMPANY (Proof of Identity and Proof of Residence)
              </li>
              <li>
                EVIDENCE OF THE SIGNATORY’S AUTHORITY TO SIGN (a board resolution, memorandum &
                articles of association, Power of Attorney etc.)
              </li>
              <li>
                DOCUMENTS RELEVANT FOR THE MATTER (including the document to be notarised and any
                forms of instructions given by the overseas lawyer/ legal advisor who prepared the
                document).
              </li>
            </ol>
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
            <li className="underline">
              CONTACTING OVERSEAS LAWYER / LEGAL ADVISORS/ FOREIGN AUTHORITY REGARDING THE
              INSTRUCTIONS
            </li>
            <br />
            <p className="paragraph">
              When there are any overseas lawyers or legal advisors involved in the matter, you
              should provide the notary with their contact details and any covering correspondence
              received from them to enable efficient communication regarding the instructions and
              any specific directions for execution.
            </p>
            <br />
            <li className="underline">ARRANGING MEETING WITH THE NOTARY</li>
            <br />
            <p className="paragraph">
              Once the notary is satisfied with the presented documents and information, a meeting
              will be arranged. During the appointment the notary will verify the identity of all
              signatories and the company and confirm that there is a validly granted authority to
              sign on behalf of the company.
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
              Most notarised documents require legalisation by the FCDO or the Consulate of the
              country that the documents are for. Legalisation is the official confirmation that a
              signature, seal or stamp on a document is genuine.
            </p>
            <br />
            <p className="paragraph">
              If the legislation is required by the receiving jurisdiction, the notary will advise
              you on the exact procedure and your available options to obtain it.
            </p>
            <br />
            <li className="underline">STORAGE OF COPIES OF THE NOTARIAL ACT</li>
            <br />
            <p className="paragraph">
              The notary is required to store your records in accordance with the Code of Practice
              rules.
            </p>
            <br />
            <p className="underline">ACCEPTABLE IDENTIFICATION DOCUMENTS FOR THE SIGNATORY:</p>
            <br />
            <ol>
              <li>PROOF OF IDENTITY OF THE REPRESENTATIVE:</li>
              <ul>
                <li className="list-item">
                  Passport or if not available, a current photographic driving licence or recent
                  utility bill showing your current address
                </li>
              </ul>
              <br />
              <li>COMPANY DETAILS:</li>
              <ul>
                <li className="list-item">
                  A copy of the current letterhead (showing the registered office it is a company)
                </li>
                <li className="list-item">
                  A Letter of Authority, Minute, Resolution or Power of Attorney, authorising
                  Representative to sign the document
                </li>
              </ul>
              <br />
              <li>ADITTIONAL INFORMATION FOR COMPANIES THAT I MAY REQUEST:</li>
              <li className="list-item">Certificate of Incorporation and of any Change of Name</li>
              <li className="list-item">A copy of the Memorandum & Articles of Association</li>
              <li className="list-item">Details of Directors and Secretaries</li>
              <li className="list-item">
                A Partnership Agreement, or relevant Trust Deed or Charter, or Constitution/Rules
              </li>
              <li className="list-item">
                A copy of the latest Annual Accounts or the latest Tax Assessment or the latest
                quarterly VAT Return
              </li>
            </ol>
          </ol>
          <br />
          <br />
        </section>
      </Layout>
      <Footer />
    </>
  );
}
