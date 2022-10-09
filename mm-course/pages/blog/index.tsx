import { useRouter } from "next/router"
import React from "react"
import {
  getBlogFilter,
  getbloglistQuery,
  getBlogsRecommend,
} from "../../api/blog/getblog"
import Layout from "../../components/layout"
import { Blog } from "../../graphql/generated/gql_types"
import { classNames } from "../../utils"
const tabs = [
  { name: "Suggestions", href: "#", current: false },
  { name: "Mobile", href: "#", current: false },
  { name: "Web", href: "#", current: true },
]

const BlogList = (props) => {
  const router = useRouter()
  return (
    <Layout>
      <div className="mx-auto mt-20 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-5 sm:pb-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Articles
          </h3>
          <div className="mt-3 sm:mt-4">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid lg:flex lg:space-x-6 mt-6">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            {/* Description list*/}
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="divide-y tube-card px-6 md:m-0 -mx-5 py-2">
                  {props.BlogList.map((item: any, i: number) => (
                    <div
                      key={i}
                      onClick={() => {
                        router.push(`/blog/${item.slug}+${item.id}`)
                      }}
                      className="md:flex md:space-x-6 py-5"
                    >
                      <div>
                        <div className="md:w-56 w-full h-36 overflow-hidden rounded-lg relative shadow-sm">
                          <img
                            src={"http://localhost:1337" + item?.url}
                            alt=""
                            className="w-full h-full absolute inset-0 object-cover"
                          />
                          <div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
                            JavaScript
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 md:pt-0 pt-4">
                        <div className="text-lg font-semibold line-clamp-2 leading-8">
                          {item.title}
                        </div>
                        <p className="line-clamp-2">
                          {item.short_description.slice(0, 150)}
                        </p>

                        {/* <div className="flex items-center pt-2 text-sm">
                          <div className="flex items-center"> 12 </div>
                          <div className="flex items-center mx-4">12</div>
                          <div className="flex items-center">
                            {" "}
                            <ion-icon
                              name="bookmark-outline"
                              className="text-xl mr-2 md hydrated"
                              role="img"
                              aria-label="bookmark outline"
                            ></ion-icon>{" "}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Comments*/}
          </div>

          <section
            aria-labelledby="timeline-title"
            className="lg:col-span-1 lg:col-start-3"
          >
            <div className="lg:w-80 w-full">
              <div
                className="space-y-5 uk-sticky "
                uk-sticky="offset:22; bottom:true ; top:30 ; animation: uk-animation-slide-top-small"
              >
                <div className="tube-card p-6 shadow bg-white rounded">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg -mb-0.5 font-semibold">
                        {" "}
                        Recently Posted{" "}
                      </h4>
                    </div>
                    <a href="#" className="text-blue-600">
                      {" "}
                      {/* <ion-icon
                        name="refresh"
                        className="-mt-0.5 -mr-2 hover:bg-gray-100 p-1.5 rounded-full text-lg md hydrated"
                        role="img"
                        aria-label="refresh"
                      ></ion-icon>{" "} */}
                    </a>
                  </div>
                  <ul>
                    {props.recommendBlog.map((item: any, i: number) => {
                      return (
                        <li key={i}>
                          <div
                            onClick={() => {
                              router.push(`/${item.slug}-${item.id}`)
                            }}
                            className="hover:bg-gray-50 rounded-md p-2 -mx-2 block"
                          >
                            <h3 className="font-medium line-clamp-2">
                              {item?.title}
                            </h3>
                            <div className="flex items-center my-auto text-xs space-x-1.5 mt-1.5">
                              <div>{item?.publishedAt}</div>{" "}
                              <div className="pb-1"> . </div>
                              {/* <div> 23</div>s */}
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  {/* <a
                    href="#"
                    className="hover:bg-gray-100 -mb-2 mt-0.5 h-8 flex items-center justify-center rounded-md text-blue-400 text-sm"
                  >
                    See all
                  </a> */}
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
              <div
                className="uk-sticky-placeholder"
                style={{ height: "626px", margin: "0px" }}
              ></div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogList

const page_per_count_first = 7
const page_per_count_other = 9

export const getServerSideProps = async ({
  query: { page = 0, types: typeParams = null },
}) => {
  try {
    const filterQuery: any = []

    if (typeParams) {
      const types = typeParams
      filterQuery.push({ category: { name: { in: types } } })
    }

    let blogs: any // bottomt insight list and filter insights

    let start = 0 // pagination

    if (+page === 2) {
      start = page_per_count_first
    } else if (+page > 2) {
      start = page_per_count_first + (+page - 2) * page_per_count_other
    }

    if (filterQuery.length > 0) {
      blogs = await getBlogFilter({
        limit: page_per_count_other,
        start: start === 0 ? 0 : (+page - 1) * page_per_count_other,
        filter: filterQuery,
      })
    } else {
      if (start === 0) {
        blogs = await getbloglistQuery({
          start,
          limit: page_per_count_first,
        })
      } else {
        blogs = await getbloglistQuery({
          start,
          limit: page_per_count_other,
        })
      }
    }

    const recommendBlog = await getBlogsRecommend({
      limit: 3,
      start: 0,
    })

    return {
      props: {
        BlogList: blogs.data ?? [],
        recommendBlog: recommendBlog,
        page: page,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}
