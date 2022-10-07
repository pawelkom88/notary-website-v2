import styles from "../styles/main/Main.module.css";

export default function Main() {
  return (
    <>
      <h2 className="heading">Welcome to Sikorska Notary</h2>
      <p className="info__alert">Before contacting the Notary Public</p>
      <p className="paragraph">
        The main function of a notary is to provide notarial services to clients that have business,
        property or family interests abroad. Each case a Notary deals with is different and
        therefore it is especially important that a notary is presented with the relevant
        information as soon as the client makes initial contact.
      </p>
      <br />
      <p className="paragraph">
        Before meeting a notary, a client will be interviewed regarding the matter and people
        intervening in the act. This will aim to identify all documents and evidence that should be
        presented to a notary for inspection.
      </p>
      <br />
      <p className="paragraph">
        A notarisation provides a guarantee that the act is lawful and not the result of fraud or
        violence. Therefore, a notary must be satisfied with the identity of the person appearing
        before them to sign a document, with that person’s mental and statutory capacity,
        understanding of the act and willingness to be bound to all provisions.
      </p>
      <br />
      <p className="paragraph">
        The Notary will usually be able to tell you the fee and any disbursements payable to third
        parties once they have received details of what is required. For complex matters you will
        receive details of how the fee will be charged, and an estimate of how long it is likely to
        take to deal with the matter. However, in some cases this is not known at the outset.
      </p>
      <br />
      <p className="paragraph">
        To help you prepare for the meeting with a notary and understand typical stages of the
        notarial activity, <span>please refer to the applicable guidance below</span>:
      </p>
      <div className={styles["info__clients"]}>
        <a href="individual.html" className={`${styles["btn-individual"]} btn`}>
          INDIVIDUAL CLIENTS
        </a>
        <a href="corporate.html" className={`${styles["btn-corporate"]} btn`}>
          CORPORATE CLIENTS
        </a>
      </div>
    </>
  );
}
