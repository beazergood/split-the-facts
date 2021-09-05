import { useRouter } from 'next/router'

export default function PreviewModeBanner() {
  const router = useRouter()
  //   const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
  //     router.asPath
  //   )}`

  return (
    <div className="flex flex-col fixed w-screen z-40 bottom-0 ">
      <div className="py-4 bg-ocean text-white font-semibold uppercase tracking-wide px-4">
        <div className="container">
          🚧 Preview mode is on.{' '}
          <a className="underline" href={`/api/exit-preview?redirect=/`}>
            Turn off
          </a>
        </div>
      </div>
    </div>
  )
}
