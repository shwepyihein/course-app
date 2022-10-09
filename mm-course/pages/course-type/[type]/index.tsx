import React, { useEffect, useState } from "react"
import { getCategoryList } from "../../../api/category/category"
import Layout from "../../../components/layout"
import {
  Category,
  CategoryEntity,
  ChannelEntity,
} from "../../../graphql/generated/gql_types"
import qs from "query-string"
import { useRouter } from "next/router"
import { getCourseFilter } from "../../../api/course/course"
import { classNames } from "../../../utils"
import { getChannelList } from "../../../api/channel/channel"

interface filterType {
  page: string
  category: string[]
  channel: string[]
  type: string
}
const CourseFilterPage = ({
  categoryList,
  filterOpiton,
  courserData,
  channelList,
  filterQuery,
}) => {
  const [filterList, setFilterList] = useState<filterType>({
    page: "",
    category: [],
    channel: [],
    type: "",
  })
  const [courseList, setCourseList] = useState([])
  const router = useRouter()

  const fetchCourses = (filterList: any) => {}

  const fitlerCategory = (id: any) => {
    let cate = filterList.category
    if (!cate.includes(id)) {
      cate.push(id)
    } else {
      cate = cate.filter((item) => item !== id)
    }
    const queryParam = router.query
    const newQueryParam = {
      ...queryParam,
      category: cate.length === 0 ? [] : cate.join(" "),
    }
    setFilterList({ ...filterList, category: cate })

    router.push(
      {
        pathname: router.pathname,
        search: qs.stringify(newQueryParam),
      },
      undefined,
      { shallow: true }
    )
  }
  const fitlerChannel = (id: any) => {
    let cha = filterList.channel
    if (!cha.includes(id)) {
      cha.push(id)
    } else {
      cha = cha.filter((item) => item !== id)
    }
    const queryParam = router.query
    const newQueryParam = {
      ...queryParam,
      channel: cha.length === 0 ? [] : cha.join(" "),
    }
    setFilterList({ ...filterList, channel: cha })

    router.push(
      {
        pathname: router.pathname,
        search: qs.stringify(newQueryParam),
      },
      undefined,
      { shallow: true }
    )
  }

  useEffect(() => {
    if (filterOpiton) {
      console.log(filterOpiton)
      setFilterList({ ...filterList, ...filterOpiton })
    }
    setCourseList(courserData.data)
  }, [])

  return (
    <Layout>
      <div className="mx-auto min-h-screen  max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex gap-5 mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-1 lg:col-start-1">
            <div className="sticky pt-[100px] top-0">
              <h4 className="text-lg mb-2 font-semibold">Categories</h4>
              <div className="flex flex-wrap font-medium gap-2">
                {categoryList.map((item: CategoryEntity, i: number) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        fitlerCategory(item.id)
                      }}
                      className={classNames(
                        filterList.category.includes(item.id as string)
                          ? "bg-gray-100"
                          : "bg-white",
                        "cursor-pointer  px-3.5 py-1.5 rounded shadow text-sm"
                      )}
                    >
                      {item.attributes?.name}
                    </div>
                  )
                })}
              </div>
              <h4 className="text-lg mb-2 mt-3 font-semibold">Channels</h4>
              <div className="flex flex-wrap font-medium gap-2">
                {channelList.map((item: ChannelEntity, i: number) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        fitlerChannel(item.id)
                      }}
                      className={classNames(
                        filterList.channel.includes(item.id as string)
                          ? "bg-gray-100"
                          : "bg-white",
                        "cursor-pointer  px-3.5 py-1.5 rounded shadow text-sm"
                      )}
                    >
                      {item.attributes?.name}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="space-y-6  py-[100px] lg:col-span-3 lg:col-start-0">
            <div className="md:flex justify-between items-center mb-8">
              <div>
                <div className="text-xl font-semibold">
                  {" "}
                  Web Development Courses{" "}
                </div>
                <div className="text-sm mt-2 font-medium text-gray-500 leading-6">
                  {" "}
                  Choose from +10.000 courses with new additions published every
                  months{" "}
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="bg-gray-100 border inline-flex p-0.5 rounded-md text-lg self-center">
                  <a
                    href="#"
                    className="py-1.5 px-2.5 rounded-md bg-white shadow"
                    data-tippy-placement="top"
                    data-tippy=""
                    data-original-title="List view"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="courses.html"
                    className="py-1.5 px-2.5 rounded-md"
                    data-tippy-placement="top"
                    data-tippy=""
                    data-original-title="Grid view"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                  </a>
                </div>
                <div className="w-40 lg:block hidden ml-3">
                  <div className="btn-group bootstrap-select is-small rounded-md shadow-sm">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      role="button"
                      title="Popular"
                      aria-expanded="false"
                    >
                      <span className="filter-option pull-left">Popular</span>
                      &nbsp;
                      <span className="bs-caret">
                        <span className="caret"></span>
                      </span>
                    </button>

                    {/* <select
                  className="selectpicker is-small rounded-md shadow-sm"
                  data-size="7"
                >
                  <option value="">Newest</option>
                  <option value="1">Popular</option>
                  <option value="2">Free</option>
                  <option value="3">Paid</option>
                </select> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="tube-card mt-3 lg:mx-0 bg-white rounded-md -mx-5">
              <h4 className="py-3 px-5 border-b font-semibold text-grey-700">
                Featured today
              </h4>
              {courseList.map((item, i) => (
                <div
                  key={i}
                  className="flex md:space-x-6 space-x-3 md:p-5 p-2 relative"
                >
                  <div className="md:w-60 md:h-36 w-28 h-20 overflow-hidden rounded-lg relative shadow-sm">
                    {/* <img src="../assets/images/courses/img-5.jpg" alt="" className="w-full h-full absolute inset-0 object-cover"/> */}
                  </div>
                  <div className="flex- md:space-y-2 space-y-1">
                    <p className="md:text-xl font-semibold line-clamp-2">
                      {" "}
                      Learn C sharp for Beginners Crash Course{" "}
                    </p>
                    <p className="leading-6 pr-4 line-clamp-2 md:block hidden">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut magna .{" "}
                    </p>
                    <a href="#" className="md:font-semibold block text-sm">
                      {" "}
                      John Michael
                    </a>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2 items-center text-sm">
                        <div> Binginner levels </div>
                        <div className="md:block hidden">·</div>
                        <div className="flex items-center"> 18 Hourse </div>
                      </div>
                      <div className="md:flex items-center justify-center h-9 px-8 rounded-md border -mt-3.5 hidden">
                        {" "}
                        Enroll Now{" "}
                      </div>
                    </div>

                    {/* <div className="absolute top-1 right-3 md:flex hidden">
                  <a
                    href="#"
                    className="hover:bg-gray-200 p-1.5 inline-block rounded-full"
                    aria-expanded="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </a>
                </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({
  query: {
    page = 0,
    type: typeParams = null,
    category: categoryParams = null,
    channel: channelParams = null,
  },
}) => {
  const filterQuery: any = []
  let type

  const filterOpiton = {
    category: [],
    channel: [],
  }

  if (typeParams) {
    type = typeParams
  }

  if (categoryParams) {
    const name = categoryParams.split("+")
    filterOpiton.category = name
    filterQuery.push({ categories: { id: { in: Number(name) } } })
  }

  if (channelParams) {
    const channel = channelParams.split("+")
    console.log(channel)
    filterOpiton.channel = channel
    filterQuery.push({ channel: { id: { in: Number(channel) } } })
  }

  try {
    const courserData = await getCourseFilter({
      limit: 10,
      start: 0,
      filter: filterQuery,
      price_type: type,
    })

    const categoryList = await getCategoryList()
    const channelList = await getChannelList()
    return {
      props: {
        courserData,
        categoryList,
        channelList,
        filterOpiton,
        page: page,
        filterQuery,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}

export default CourseFilterPage
