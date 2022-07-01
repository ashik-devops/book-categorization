import Document, { Html, Head, Main, NextScript } from "next/document";
class AppDocument extends Document {
  render() {
    return (
      <Html className="light">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"
          ></script>
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key=['your-google-map-api]&libraries=places"
          ></script>
          <script async type="text/javascript" src="/js/app.js"></script>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
