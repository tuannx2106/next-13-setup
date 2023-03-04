import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render = () => (
    <Html lang="ja">
      <Head>
        <title>Knowledge Society</title>
        <meta
          name="description"
          content="Knowledge Society is a large and spacious coworking space, virtual office, and rental office company which is located less than one minute walk from Kudanshita station in down town Tokyo."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
