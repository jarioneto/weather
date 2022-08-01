import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'styles';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
