import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='title' content='Martin Mueller Webdeveloper' />
          <meta
            name='description'
            content='Martin Mueller - Webdeveloper from germany. Used stack: React, Next.js, Next, Mongo,MongoDB, Mysql, postgres, prisma, graphql, REST, Typescript'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://martinm.tech/' />
          <meta property='og:title' content='Martin Mueller Webdeveloper' />
          <meta
            property='og:description'
            content='Martin Mueller - Webdeveloper from germany. Used stack: React, Next.js, Next, Mongo,MongoDB, Mysql, postgres, prisma, graphql, REST, Typescript'
          />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://martinm.tech/' />
          <meta
            property='twitter:title'
            content='Martin Mueller Webdeveloper'
          />
          <meta
            property='twitter:description'
            content='Martin Mueller - Webdeveloper from germany. Used stack: React, Next.js, Next, Mongo,MongoDB, Mysql, postgres, prisma, graphql, REST, Typescript'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
