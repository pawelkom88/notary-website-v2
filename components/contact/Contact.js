import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles["contact"]}>
      <h2 className="heading">Mobile Notary Service</h2>
      <article className={styles["contact__about"]}>
        <h3 className="info__alert">Contact me</h3>
        <p className="paragraph">
          Sikorska Notary is a mobile notary providing a full range of notarial services for clients
          at their convenience. Whether it is in your office, home, place of business or residence,
          I am able to meet you at any place to help you in the most efficient way in your notarial
          matter.
        </p>
        <br />
        <p className="paragraph">
          I offer a mobile notary service throughout the week, including weekends and out of office
          hours.
        </p>
        <br />
        <p className="paragraph">
          To enquire about my services please{" "}
          <a className={styles["underline"]} href="mailto:ps@sikorskanotary.co.uk">
            {" "}
            email me
          </a>{" "}
          or complete the contact form below. I’ll review your request, and promptly get back to you
          with a quote.
        </p>
      </article>
    </section>
  );
}
