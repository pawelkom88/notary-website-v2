import "@fontsource/playfair-display";
import "@fontsource/lato";
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
