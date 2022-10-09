import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="redirect" value="https://sikorskanotary.co.uk/success" />
      <input type="hidden" name="subject" value="New message from your website" />
      <input type="hidden" name="apikey" value="e78b38a7-90c7-4e93-9b00-da8a681984f6" />
      <label htmlFor="name">Name:</label>
      <input id="name" title="name" type="text" placeholder="John Smith" required />
      <label htmlFor="e-mail">E-mail:</label>
      <input
        id="e-mail"
        title="e-mail"
        name="e-mail"
        type="text"
        placeholder="JohnSmith@gmail.com"
        required
      />
      <label htmlFor="message">Your enquiry:</label>
      <textarea
        title="message"
        name="message"
        id="message"
        cols="38"
        rows="10"
        required
        placeholder="Your message"></textarea>
      <input id="checkbox" type="checkbox" name="botcheck" style={{ display: "none" }} />
      <input
        type="checkbox"
        name="botcheck"
        className={styles.hidden}
        style={{ display: "none" }}
      />
      <button type="submit" className={`${styles["form_btn"]} btn`}>
        Submit
      </button>
    </form>
  );
}
