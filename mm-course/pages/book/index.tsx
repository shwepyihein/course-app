import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "../../components/layout"
import BookCardSlide from "../../components/slide/bookCardSlide"

import { Navigation } from "swiper"
import BookCard from "../../components/cards/bookcard"
import { classNames, IMAGE_PATH } from "../../utils"
import { getbooklistQuery, getBookRecommend } from "../../api/book/getBook"
import { BookEntity } from "../../graphql/generated/gql_types"
import { useRouter } from "next/router"

const tabs = [
  { name: "Applied", href: "#", current: false },
  { name: "Phone Screening", href: "#", current: false },
  { name: "Interview", href: "#", current: true },
  { name: "Offer", href: "#", current: false },
  { name: "Hired", href: "#", current: false },
]
interface BookPageProps {
  booklist: any
  recommendBook: any
  page: any
}

const BookPage = (props: BookPageProps) => {
  const router = useRouter()
  return (
    <Layout>
      <div className="mx-auto min-h-screen mt-20 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            {/* Description list*/}
            {/* <div>
              <div className="border-b border-gray-200 pb-5 sm:pb-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Candidates
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
            </div> */}
            <div className="">
              <div className="flex justify-between items-center">
                <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Book
                </h2>
                {/* <p className="text-sky-800 text-lg">see all</p> */}
              </div>
              {/* <div className="pt-6 pb-12 mx-auto max-w-7xl">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper  bg-white py-2"
                >
                  {cardList.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <BookCard key={i} post={item} />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div> */}
              <div className="pt-6 pb-12 mx-auto max-w-7xl">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                  {props.booklist.map((item: any, i: number) => {
                    return <BookCard key={i} post={item} />
                  })}
                </div>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="timeline-title"
            className="lg:col-span-1 lg:col-start-3"
          >
            <div className="bg-white px-4 py-5 sm:px-6">
              <div className="my-2 flex items-center justify-between pb-2">
                <div>
                  <h2 className="text-xl font-semibold">Top Books</h2>
                </div>
                {/* <a href="#" className="text-blue-500">
                  See all{" "}
                </a> */}
              </div>

              <div className="space-y-7 mt-6">
                {props.recommendBook.map((item: any, i: null) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        router.push(`/book/${item.slug}`)
                      }}
                      className="p-3 bg-white shadow rounded-md flex items-center space-x-3"
                    >
                      <img
                        src={`${IMAGE_PATH}${item?.url}`}
                        className="w-20 h-24 rounded-lg -mt-7 shadow-md"
                        alt=""
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm">{item?.author} </div>
                      </div>
                      <div>
                        <ArrowDownTrayIcon className="w-5 h-5" />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Activity Feed */}

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
          </section>
        </div>
      </div>
    </Layout>
  )
}

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

    let books: any // bottomt insight list and filter insights

    let start = 0 // pagination

    if (+page === 2) {
      start = page_per_count_first
    } else if (+page > 2) {
      start = page_per_count_first + (+page - 2) * page_per_count_other
    }

    if (filterQuery.length > 0) {
      // blogs = await getBlogFilter({
      //   limit: page_per_count_other,
      //   start: start === 0 ? 0 : (+page - 1) * page_per_count_other,
      //   filter: filterQuery,
      // })
    } else {
      if (start === 0) {
        books = await getbooklistQuery({
          start,
          limit: page_per_count_first,
        })
      } else {
        books = await getbooklistQuery({
          start,
          limit: page_per_count_other,
        })
      }
    }

    const recommendBook = await getBookRecommend({
      limit: 3,
      start: 0,
    })

    return {
      props: {
        booklist: books.data ?? [],
        recommendBook: recommendBook,
        page: page,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default BookPage
