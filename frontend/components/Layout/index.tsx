import PreviewModeBanner from '../PreviewBanner'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        {preview && <PreviewModeBanner />}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
