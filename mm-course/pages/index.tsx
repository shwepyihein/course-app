import { ChevronRightIcon } from "@heroicons/react/24/outline"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { getBookLatest } from "../api/book/getBook"
import { getCategoryCourseList } from "../api/category/category"
import { getLatestCourse } from "../api/course/course"
import Layout from "../components/layout"
import PopularCardList from "../components/poplarCardList"
import BookCardSlide from "../components/slide/bookCardSlide"
import FeatureSlider from "../components/slide/featureSlide"
import { BlogEntity, CategoryEntity } from "../graphql/generated/gql_types"
import styles from "../styles/Home.module.css"
import { classNames } from "../utils"

interface HomePageProps {
  latestBook: BlogEntity
  latestCourse: any
  categoryList: CategoryEntity[]
}
const FindInterst = [
  {
    name: "Frontend",
    route: "frontend-1",
    imgpath: "/frontend.jpeg",
    size: "lg:h-48 h-40",
  },
  {
    name: "Backend",
    route: "backend-2",
    imgpath: "/backend.jpeg",
    size: "lg:h-48 h-40",
  },
  {
    name: "Designs",
    route: "designs-3",
    imgpath: "/design.png",
    size: "lg:h-48 h-40",
  },
  {
    name: "Mobile Development",
    route: "mobile-development-4",
    imgpath: "/mobile.jpeg",
    size: " h-40 lg:h-full lg:row-span-2",
  },
  {
    name: "Quality Assurance (QA)",
    route: "quality-assurance-6",
    imgpath: "/qa.jpeg",
    size: "lg:h-48 h-40 lg:col-span-2",
  },
  {
    name: "Game",
    route: "game-5",
    imgpath: "/latestGame.jpg",
    size: "lg:h-48 h-40",
  },
]
const HomePage = (props: HomePageProps) => {
  const router = useRouter()
  console.log(props.latestCourse)
  return (
    <Layout>
      <main>
        <div className="bg-hero-pattern bg-cover bg-position-center ">
          <div className="mx-auto max-w-7xl py-60 px-4 text-center sm:px-6 lg:px-8 lg:py-80">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-5 mr-auto sm:max-w-xl text-start  lg:max-w-5xl">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Hunting Your Interest in Digital Box
                </h1>
                <p className="text-xl text-white">
                  Choose from online video courses with new additions published
                  every month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto mt-20 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-semibold text-black md:my-5 mb-4">
                Find Your Interest
              </h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              {FindInterst.map((item) => {
                return (
                  <div
                    key={item.name}
                    onClick={() => router.push(`/topics/${item.route}`)}
                    className={classNames(
                      item?.size && item.size,
                      "rounded-md  cursor-pointer overflow-hidden relative w-full"
                    )}
                  >
                    <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                    <img
                      src={item.imgpath}
                      className="absolute w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                      {item.name}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="md:p-7 p-5 bg-white rounded-md shadow mt-10">
              <h3 className="text-2xl mt-4 mb-1 font-bold">
                Browses your Categories
              </h3>

              <div className="mt-2 grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2 -m-3">
                {props.categoryList.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={`/category/${item.attributes?.slug}-${item.id}`}
                    >
                      <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {item.attributes?.name}
                          </h3>
                          <div className="flex space-x-2 items-center text-sm pt-0.5">
                            <div>
                              {item.attributes?.courses?.data?.length} Courses{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="flex justify-center mt-9">
                <Link href="/category">
                  <div className="bg-gray-50 cursor-pointer border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm">
                    Browse Catogories ..
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FeatureSlider list={props.latestCourse} />
      {/* <PopularCardList /> */}

      <BookCardSlide
        cardCount={6}
        book={props.latestBook}
        title={"Latest Book Updated"}
        seeAll={() => router.push("/book")}
      />
    </Layout>
  )
}

export const getServerSideProps = async ({}) => {
  try {
    const categoryList = await getCategoryCourseList({ limit: 6, start: 0 })
    const latestCourse = await getLatestCourse({ limit: 6, start: 0 })
    const LatestBook = await getBookLatest({
      limit: 10,
      start: 0,
    })
    console.log(LatestBook)

    return {
      props: {
        latestCourse: latestCourse,
        categoryList: categoryList,
        latestBook: LatestBook,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}

export default HomePage
