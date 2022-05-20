import Head from "next/head";

export default function Base({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link href="/images/logo.svg" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>{children}</section>
      <script
        async
        src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"
      ></script>
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=[your-google-map-api]&amp;libraries=places"
      ></script>
      <script
        async
        type="text/javascript"
        src="styles/themes/rubick/dist/js/app.js"
      ></script>
    </>
  );
}
