import moment from "moment"
import { useRouter } from "next/router"
import React from "react"
import { getBlogDetail, getBlogLatest } from "../../api/blog/getblog"
import Layout from "../../components/layout"
import { Blog, BlogEntity } from "../../graphql/generated/gql_types"

interface blogDetailProps {
  blogData: Blog
  LatestBlog: BlogEntity[]
}

const BlogDetail = ({ blogData, LatestBlog }: blogDetailProps) => {
  const router = useRouter()
  console.log(blogData)
  return (
    <Layout>
      <div className="mx-auto min-h-screen mt-20 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="lg:flex lg:space-x-4 lg:-mx-4">
          <div className="lg:w-9/12 lg:space-y-6">
            <div className="tube-card">
              <div className="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
                <img
                  src={
                    "http://localhost:1337" +
                    blogData.seo_image?.data?.attributes?.url
                  }
                  alt=""
                  className="w-full h-full absolute inset-0 object-cover"
                />
              </div>

              <div className="md:p-6 p-4">
                <h1 className="lg:text-2xl text-xl font-semibold mb-6">
                  {blogData.title}
                </h1>

                <div className="flex items-center space-x-3 my-3 pb-4 border-b">
                  {/* <img src="../assets/images/avatars/avatar-2.jpg" alt="" className="w-10 rounded-full"> */}
                  <div>
                    <div className="text-base font-semibold">
                      {blogData.blog_author}
                    </div>
                    <div className="text-xs">
                      Published on{" "}
                      {moment(blogData.publishedAt).format("MM DD YY")}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">{blogData.description}</div>

                <div className="relative">
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center space-x-3"
                    aria-expanded="false"
                  >
                    {/* <ion-icon name="share-social-outline" className="p-2 rounded-md text-lg bg-gray-200 md hydrated" role="img" aria-label="share social outline"></ion-icon> */}
                    <div>
                      {" "}
                      Intersting?{" "}
                      <span className="text-blue-600"> Share it </span>{" "}
                    </div>
                  </a>

                  {/* <div className="bg-white w-96 shadow-md hidden mx-auto p-2 mt-12 rounded-md text-gray-500 border uk-drop" uk-drop="mode: hover;pos: right-center;animation: uk-animation-slide-right-small; offset:15">
                                   
                                   <div className="grid grid-flow-col text-sm w-full">
                                    <a href="#" className="p-2 text-center hover:bg-gray-100 rounded-md text-sm space-y-1"> <ion-icon name="logo-facebook" className="text-4xl md hydrated" role="img" aria-label="logo facebook"></ion-icon> <div> Facebook </div> </a>
                                    <a href="#" className="p-2 text-center hover:bg-gray-100 rounded-md text-sm space-y-1"> <ion-icon name="logo-facebook" className="text-4xl md hydrated" role="img" aria-label="logo facebook"></ion-icon> <div> Facebook </div> </a>
                                    <a href="#" className="p-2 text-center hover:bg-gray-100 rounded-md text-sm space-y-1"> <ion-icon name="logo-google" className="text-4xl md hydrated" role="img" aria-label="logo google"></ion-icon> <div> Facebook </div> </a>
                                    <a href="#" className="p-2  text-center hover:bg-gray-100 rounded-md text-sm space-y-1"> <ion-icon name="logo-twitter" className="text-4xl md hydrated" role="img" aria-label="logo twitter"></ion-icon> <div> Facebook </div> </a>
                                   </div>
                                </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-80 w-full lg:mt-0 mt-5">
            <div
              className="space-y-5 uk-sticky"
              uk-sticky="offset:22; bottom:true ; top:30 ; animation: uk-animation-slide-top-small"
            >
              <div className="tube-card p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg -mb-0.5 font-semibold">
                      {" "}
                      Recently Posted{" "}
                    </h4>
                  </div>
                  {/* <a href="#" className="text-blue-600"> <ion-icon name="refresh" className="-mt-0.5 -mr-2 hover:bg-gray-100 p-1.5 rounded-full text-lg md hydrated" role="img" aria-label="refresh"></ion-icon> </a> */}
                </div>
                <ul>
                  {LatestBlog.map((item: any, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        router.push(`/blog/${item.slug}+${item.id}`)
                      }}
                      className="cursor-pointer  rounded-md hover:border hover:bg-gray-100 "
                    >
                      <div className=" rounded-md p-2  block">
                        <h3 className="font-medium line-clamp-2">
                          {" "}
                          {item?.title}
                        </h3>
                        <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                          <div>
                            {moment(item?.publishedAt).format("MMM DD YYYY")}
                          </div>{" "}
                          <div className="pb-1"> . </div>
                          {/* <ion-icon name="chatbox-ellipses-outline" role="img" className="md hydrated" aria-label="chatbox ellipses outline"></ion-icon> <div> 23</div> */}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div
                  onClick={() => {
                    router.push("/blog")
                  }}
                  className="cursor-pointer hover:bg-gray-100 -mb-2 mt-0.5 h-8 flex items-center justify-center rounded-md text-blue-400 text-sm"
                >
                  See all
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg mb-2 font-semibold"> Tags </h4>
                <div className="flex flex-wrap font-medium gap-2">
                  <a
                    href="#"
                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                  >
                    {" "}
                    JavaScript
                  </a>
                  <a
                    href="#"
                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                  >
                    {" "}
                    Angular
                  </a>
                  <a
                    href="#"
                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                  >
                    {" "}
                    Design
                  </a>
                  <a
                    href="#"
                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                  >
                    {" "}
                    Photography
                  </a>
                  <a
                    href="#"
                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                  >
                    {" "}
                    Technology
                  </a>
                  <a
                    href="#"
                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                  >
                    {" "}
                    Music
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="uk-sticky-placeholder" hidden="" style="height: 586px; margin: 0px;"></div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const slug = context.params.blog as string
  console.log(slug)
  const id = slug?.split("+")[1]

  try {
    const blogData = await getBlogDetail({
      id: id,
    })
    const LatestBlog = await getBlogLatest({
      limit: 5,
      start: 0,
    })
    return {
      props: {
        blogData,
        LatestBlog,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}

export default BlogDetail
