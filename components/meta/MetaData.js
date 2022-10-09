import Head from "next/head";

export default function MetaData({ title }) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        href="https://sikorska-notary.netlify.app/logo-png.2bc4e0ea.png"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://sikorskanotary.co.uk/logo-png.2bc4e0ea.png"
      />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="title" content="Sikorska Notary - mobile notary in Bristol and South West" />
      <meta
        name="description"
        content="Sikorska Notary is a mobile notary providing a full range of notarial services for clients at their convenience. Whether it is in your office, home, place of business or residence."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sikorskanotary.co.uk/social-media-card.png" />
      <meta
        property="og:title"
        content="Sikorska Notary - mobile notary in Bristol and South West"
      />
      <meta
        property="og:description"
        content="Sikorska Notary is a mobile notary providing a full range of notarial services for clients at their convenience. Whether it is in your office, home, place of business or residence, I am able to meet you at any place to help you in the most efficient way in your notarial matter."
      />
      <meta property="og:image" content="https://sikorskanotary.co.uk/social-media-card.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sikorskanotary.co.uk/social-media-card.png" />
      <meta
        property="twitter:title"
        content="Sikorska Notary - mobile notary in Bristol and South West"
      />
      <meta
        property="twitter:description"
        content="Sikorska Notary is a mobile notary providing a full range of notarial services for clients at their convenience. Whether it is in your office, home, place of business or residence, I am able to meet you at any place to help you in the most efficient way in your notarial matter."
      />
      <meta property="twitter:image" content="https://sikorskanotary.co.uk/social-media-card.png" />
      <title>{title}</title>
    </Head>
  );
}
