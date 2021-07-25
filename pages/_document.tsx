import Document, { Html, Head, Main, NextScript } from 'next/document'
import packageInfo from '../package.json'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Split The Facts!'
    }

    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVXZ5BF');`
            }}
          ></script>

          <meta name="robots" content="follow, index" />
          <meta property="og:site_name" content={meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourname" />
          {/* <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} /> */}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVXZ5BF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          ></noscript>
          <Main />
          <NextScript />

          <div className="w-90 mt-10">
            <span className="block text-center text-sm text-gray-200">
              &copy; 2021 Sam Roffey
            </span>
            <span className="inline-block text-right ml-10 text-sm text-gray-200">
              {packageInfo.version}
            </span>
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
