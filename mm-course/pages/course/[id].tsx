import moment from "moment"
import { GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import React from "react"
import { getBookDetail, getBookLatest } from "../../api/book/getBook"
import { getCourseDetail } from "../../api/course/course"
import Layout from "../../components/layout"
import BookCardSlide from "../../components/slide/bookCardSlide"
import {
  Book,
  BookEntity,
  CourseEntity,
} from "../../graphql/generated/gql_types"
import { createMarkup, IMAGE_PATH, removeTags } from "../../utils"

interface BookDetailProps {
  CourseData: CourseEntity
  title: string
  desc: string
  // LatestBook: BookEntity[]
}

const BookDetail = ({ CourseData, title, desc }: BookDetailProps) => {
  const router = useRouter()
  const downloadBook = (v: any) => {
    let link = document.createElement("a")
    link.href = v
    link.setAttribute("download", `${CourseData.attributes?.name}`)
    document.body.appendChild(link)
    link.click()

    // Clean up and remove the link
    // link?.parentNode.removeChild(link)
  }

  console.log(router)

  return (
    <Layout>
      <NextSeo
        title={title}
        description={desc}
        canonical={`https://hunterdox.com${router.asPath}`}
        openGraph={{
          title: title,
          type: "website",
          locale: "utf-8",
          url: `https://hunterdox.com${router.asPath}`,
          description: desc,
          site_name: `${title}`,
          images: [
            {
              url:
                `${IMAGE_PATH}${CourseData?.attributes?.course_img?.data?.attributes?.url}` ??
                "",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      ></NextSeo>
      <div className="max-w-5xl mt-20 min-h-screen mb-0 md:p-5 mx-auto">
        <div className="lg:flex lg:space-x-10 bg-white rounded-md shadow max-w-3x  mx-auto md:p-8 p-3">
          <div className="lg:w-1/3 w-full">
            <div
              className="md:block flex space-x-4 uk-sticky"
              uk-sticky="offset: 91;bottom: true"
            >
              <div uk-lightbox="">
                <img
                  alt="image"
                  src={`
                    ${IMAGE_PATH}${CourseData?.attributes?.course_img?.data?.attributes?.url}`}
                  className="shadow-lg rounded-md w-32 md:w-full"
                />
              </div>
              <div className="flex-1">
                <ul className="my-5 text-sm space-y-2">
                  {/* <li> Visited 120 </li>s */}
                  <li>
                    {" "}
                    Publish time{" "}
                    {moment(CourseData?.attributes?.publishedAt).format(
                      "MMM DD YYY"
                    )}
                  </li>
                  {/* <li> Downloaded 120 </li> */}
                </ul>
                <div className="flex flex-col gap-2">
                  {CourseData.attributes?.course_material_links && (
                    <div
                      onClick={() => {
                        downloadBook(
                          CourseData.attributes?.course_material_links
                        )
                      }}
                      className="hover:text-gray-800 bg-gray-300 font-semibold inline-flex items-center justify-center py-2 rounded-md text-center w-full"
                    >
                      {" "}
                      <i className="uil-book-open mr-1 md:block hidden"></i>{" "}
                      Download material{" "}
                    </div>
                  )}
                  {CourseData.attributes?.download_link && (
                    <div
                      onClick={() => {
                        downloadBook(CourseData.attributes?.download_link)
                      }}
                      className="hover:text-white-800 text-white bg-gray-600 font-semibold inline-flex items-center justify-center py-2 rounded-md text-center w-full"
                    >
                      {" "}
                      <i className="uil-book-open mr-1 md:block hidden"></i>{" "}
                      Download{" "}
                    </div>
                  )}
                  {/* <a
                    href="#"
                    className="bg-gray-600 font-semibold hover:bg-gray-700 inline-flex items-center justify-center px-4 py-2 rounded-md text-center text-white w-full"
                  >
                    {" "}
                    <i className="uil-shopping-basket mr-1 md:block hidden"></i>{" "}
                    Buy{" "}
                  </a> */}
                </div>
              </div>
            </div>
            <div className="uk-sticky-placeholder"></div>
          </div>
          <div className="lg:w-2/3 flex-shrink-0 mt-10 lg:m-0">
            <div>
              <h2 className="font-semibold mb-3 text-xl lg:text-3xl">
                {CourseData?.attributes?.name}
              </h2>
              <hr className="mb-5" />
              <h4 className="font-semibold mb-2 text-base"> Description </h4>
              <div className="space-y-2">
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    CourseData?.attributes?.description
                  )}
                />

                <h4>Book Information</h4>
                <p className="mb-0">
                  <strong>Level:</strong>
                  {CourseData?.attributes?.level}
                </p>
                <p className="mt-0">
                  <strong>Author</strong>:{" "}
                  {CourseData?.attributes?.author?.data?.attributes?.name}
                </p>
                <p className="mt-0">
                  <strong>Duration</strong>: {CourseData?.attributes?.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative  md:p-0 uk-slider" uk-slider="finite: true">
        <BookCardSlide
          seeAll={() => {
            router.push("/book")
          }}
          cardCount={5}
          book={LatestBook}
          title="Related Book"
        />
      </div> */}
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const slug = context.params.id as string

  console.log(slug)
  const id = slug?.split("+")[1]

  try {
    const CourseData = await getCourseDetail({
      slug: id,
    })

    return {
      props: {
        CourseData,
        title: CourseData?.attributes?.name ?? "",
        desc: removeTags(CourseData?.attributes?.description) ?? "",
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}

export default BookDetail
