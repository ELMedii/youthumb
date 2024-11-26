import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="additional-info">
            <p>
              "Welcome to our YouTube Thumbnail Downloader, the fastest way to grab high-quality thumbnails from YouTube videos. Whether you're creating content, need a reference image, or just want to save a stunning thumbnail, our tool allows you to easily download high-definition, 4K, and standard quality thumbnails for any video. Use our free tool today and enjoy quick access to professional-grade images!"
            </p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
