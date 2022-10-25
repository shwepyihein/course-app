import { useRouter } from "next/router"
import Layout from "../components/layout"

function Custom404() {
  const router = useRouter()
  return (
    <Layout>
      <div className="min-h-screen pt-[64px] lg:pt-[86px] bg-white h-[518px] lg:h-full">
        <div className="flex flex-col py-32  justify-center items-center">
          <div className="w-[500px]">
            <p className="text-primary font-bold text-[20px] text-center mb-8">
              404 Error
            </p>
            <h1 className="font-bold text-[40px] lg:text-[48px] text-center">
              Page not found
            </h1>
            <p className="mt-4 card-title-text text-center text-neutral-600">
              Please Check the URL in the address bar and try again.
            </p>
            <button
              className="bg-gray-600 cursor-pointer mt-20 font-semibold hover:bg-gray-700 items-center justify-center px-4 py-2 rounded-md text-center text-white w-full"
              onClick={() => router.push("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Custom404
