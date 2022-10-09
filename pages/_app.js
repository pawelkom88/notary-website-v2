import "@fontsource/playfair-display/400.css";
import "@fontsource/lato/300.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <a href="#main" className="visible-hidden">
        Jump directly to main content
      </a>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
