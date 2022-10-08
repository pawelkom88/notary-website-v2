import styles from "./NavMobile.module.css";

export default function NavMobile() {
  return (
    <div role="navigation" className="mobile__menu" aria-label="mobile menu">
      <ul className="mobile__menu-links">
        <li className="mobile__menu-link">
          <a href="service">Notarial service</a>
        </li>
        <li className="mobile__menu-link">
          <a href="legislation">Apostille & Legislation</a>
        </li>
        <li className="mobile__menu-link">
          <a href="fees">Fees & Disbursements</a>
        </li>
        <li className="mobile__menu-link">
          <a href="legal">Legal & Regulatory Information</a>
        </li>
        <li className="mobile__menu-link">
          <a href="index#contact">Contact</a>
        </li>
      </ul>
      <p className="opening-times">Monday - Friday 9.00 am until 5.00 pm</p>
      <div className="mobile__menu-contact">
        <a href="tel:447401388094" aria-label="Call Patrycja Sikorska">
          {/* <svg
          fill="#69502B"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 53.942 53.942"
          xml:space="preserve">
          <path
            d="M53.364 40.908c-2.008-3.796-8.981-7.912-9.288-8.092-.896-.51-1.831-.78-2.706-.78-1.301 0-2.366.596-3.011 1.68-1.02 1.22-2.285 2.646-2.592 2.867-2.376 1.612-4.236 1.429-6.294-.629L17.987 24.467c-2.045-2.045-2.233-3.928-.632-6.291.224-.309 1.65-1.575 2.87-2.596.778-.463 1.312-1.151 1.546-1.995.311-1.123.082-2.444-.652-3.731-.173-.296-4.291-7.27-8.085-9.277a4.947 4.947 0 0 0-2.306-.573 4.908 4.908 0 0 0-3.49 1.445L4.7 3.986C.686 7.999-.767 12.548.379 17.506c.956 4.132 3.742 8.529 8.282 13.068l14.705 14.705c5.746 5.746 11.224 8.66 16.282 8.66h.001c3.72 0 7.188-1.581 10.305-4.698l2.537-2.537a4.908 4.908 0 0 0 .873-5.796z" />
        </svg> */}
        </a>
        <a href="mailto:ps@sikorskanotary.co.uk" aria-label="Email Patrycja Sikorska">
          {/* <svg
          fill="#69502B"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 474 474"
          xml:space="preserve">
          <path
            d="M437.5 59.3h-401C16.4 59.3 0 75.7 0 95.8v282.4c0 20.1 16.4 36.5 36.5 36.5h401c20.1 0 36.5-16.4 36.5-36.5V95.8c0-20.1-16.4-36.5-36.5-36.5zm-5.3 27L239.5 251.1 46.8 86.3h385.4zM447 378.2c0 5.2-4.3 9.5-9.5 9.5h-401c-5.2 0-9.5-4.3-9.5-9.5V104.9l203.7 174.2c.1.1.3.2.4.3.1.1.3.2.4.3.3.2.5.4.8.5.1.1.2.1.3.2l1.2.6c.1 0 .2.1.3.1.3.1.6.3 1 .4.1 0 .3.1.4.1.3.1.6.2.9.2.1 0 .3.1.4.1.3.1.7.1 1 .2h.3c.4 0 .9.1 1.3.1s.9 0 1.3-.1h.3c.3 0 .7-.1 1-.2.1 0 .3-.1.4-.1.3-.1.6-.2.9-.2.1 0 .3-.1.4-.1.3-.1.6-.2 1-.4.1 0 .2-.1.3-.1l1.2-.6c.1-.1.2-.1.3-.2.3-.2.5-.3.8-.5.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3L447 109.2v269z" />
        </svg> */}
        </a>
      </div>
    </div>
  );
}

{
  /* <div
role="button"
className="hamburger"
tabIndex="0"
aria-expanded="false"
aria-label="show navigation menu">
<span className={styles.line}></span>
<span className={styles.line}></span>
<span className={styles.line}></span>
</div> */
}
