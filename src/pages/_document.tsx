import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="transition-colors bg-gray-100 dark:text-white dark:bg-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
