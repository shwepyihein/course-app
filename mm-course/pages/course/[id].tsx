import moment from "moment"
import { GetServerSideProps } from "next"
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
import { IMAGE_PATH } from "../../utils"

interface BookDetailProps {
  CourseData: CourseEntity
  // LatestBook: BookEntity[]
}

const BookDetail = ({ CourseData }: BookDetailProps) => {
  const router = useRouter()
  console.log(CourseData)
  return (
    <Layout>
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

                <a
                  href="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book-description.jpg"
                  data-caption="Caption 2"
                >
                  {" "}
                </a>
                <a
                  href="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/book/book-description.jpg"
                  data-caption="Caption 3"
                >
                  {" "}
                </a>
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
                  <a
                    href="#"
                    className="hover:text-gray-800 bg-gray-300 font-semibold inline-flex items-center justify-center py-2 rounded-md text-center w-full"
                  >
                    {" "}
                    <i className="uil-book-open mr-1 md:block hidden"></i> Read{" "}
                  </a>
                  <a
                    href="#"
                    className="hover:text-white-800 text-white bg-gray-600 font-semibold inline-flex items-center justify-center py-2 rounded-md text-center w-full"
                  >
                    {" "}
                    <i className="uil-book-open mr-1 md:block hidden"></i>{" "}
                    Download{" "}
                  </a>
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
                <div>{CourseData?.attributes?.description}</div>
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

  try {
    const CourseData = await getCourseDetail({
      slug: slug,
    })
    // const LatestBook = await getBookLatest({
    //   limit: 10,
    //   start: 0,
    // })

    return {
      props: {
        CourseData,
        // LatestBook,
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