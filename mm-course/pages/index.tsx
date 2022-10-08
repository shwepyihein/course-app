import { ChevronRightIcon } from "@heroicons/react/24/outline"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { getBookLatest } from "../api/book/getBook"
import Layout from "../components/layout"
import PopularCardList from "../components/poplarCardList"
import BookCardSlide from "../components/slide/bookCardSlide"
import FeatureSlider from "../components/slide/featureSlide"
import { BlogEntity } from "../graphql/generated/gql_types"
import styles from "../styles/Home.module.css"

interface HomePageProps {
  latestBook: BlogEntity
}

const HomePage = (props: HomePageProps) => {
  const router = useRouter()
  return (
    <Layout>
      <main>
        <div className="">
          <div className="mx-auto mt-20 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-semibold text-black md:my-5 mb-4">
                Browse categories
              </h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              <a
                href="#"
                className="rounded-md overflow-hidden relative w-full lg:h-48 h-40"
              >
                <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                <img
                  src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/design.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                  {" "}
                  Design{" "}
                </div>
              </a>
              <a
                href="#"
                className="rounded-md overflow-hidden relative w-full lg:h-48 h-40"
              >
                <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                <img
                  src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/development.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                  {" "}
                  Development{" "}
                </div>
              </a>
              <a
                href="#"
                className="rounded-md overflow-hidden relative w-full lg:h-48 h-40"
              >
                <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                <img
                  src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/it-and-software.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                  {" "}
                  it-and-software{" "}
                </div>
              </a>
              <a
                href="#"
                className="rounded-md overflow-hidden relative w-full lg:h-full h-40 lg:row-span-2"
              >
                <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                <img
                  src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/marketing.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                  {" "}
                  Marketing{" "}
                </div>
              </a>
              <a
                href="#"
                className="rounded-md overflow-hidden relative w-full lg:h-48 h-40 lg:col-span-2"
              >
                <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                <img
                  src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/music.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                  {" "}
                  Music{" "}
                </div>
              </a>
              <a
                href="#"
                className="rounded-md overflow-hidden relative w-full lg:h-48 h-40"
              >
                <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
                <img
                  src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/category/photography.jpg"
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">
                  photography{" "}
                </div>
              </a>
            </div>
            <div className="md:p-7 p-5 bg-white rounded-md shadow mt-10">
              <h3 className="text-2xl mt-4 mb-1 font-bold">
                {" "}
                Featured topics{" "}
              </h3>
              <p className="mb-8"> Choose Your Favorite Topic</p>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2 -m-3">
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="logo-angular"
                className="text-3xl text-white from-red-600 to-red-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="logo angular"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg">Web Development</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 12 Courses </div>
                        <div>·</div>
                        <div> 156 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="briefcase"
                className="text-3xl text-white from-blue-600 to-blue-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="briefcase"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {" "}
                        Financial Analysis
                      </h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 16 Courses </div>
                        <div>·</div>
                        <div> 523 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="color-wand"
                className="text-3xl text-white from-purple-600 to-purple-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="color wand"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg"> Graphic Design</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 23 Courses </div>
                        <div>·</div>
                        <div> 356 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="shield-checkmark"
                className="text-3xl text-white from-yellow-600 to-yellow-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="shield checkmark"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {" "}
                        Ethical Hacking
                      </h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 12 Courses </div>
                        <div>·</div>
                        <div> 256 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="leaf"
                className="text-3xl text-white from-green-600 to-green-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="leaf"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg"> Cyber Security</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 34 Courses </div>
                        <div>·</div>
                        <div> 420 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="logo-figma"
                className="text-3xl text-white from-pink-600 to-pink-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="logo figma"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg"> Adobe Target</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 14 Courses </div>
                        <div>·</div>
                        <div> 259K Students</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 -m-3 mt-7">
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="briefcase"
                className="text-3xl text-white from-blue-600 to-blue-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="briefcase"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {" "}
                        Financial Analysis
                      </h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 16 Courses </div>
                        <div>·</div>
                        <div> 523 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="color-wand"
                className="text-3xl text-white from-purple-600 to-purple-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="color wand"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg"> Graphic Design</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 23 Courses </div>
                        <div>·</div>
                        <div> 356 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="shield-checkmark"
                className="text-3xl text-white from-yellow-600 to-yellow-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="shield checkmark"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {" "}
                        Ethical Hacking
                      </h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 12 Courses </div>
                        <div>·</div>
                        <div> 256 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="logo-angular"
                className="text-3xl text-white from-red-600 to-red-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="logo angular"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg">Web Development</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 12 Courses </div>
                        <div>·</div>
                        <div> 156 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="leaf"
                className="text-3xl text-white from-green-600 to-green-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="leaf"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg"> Cyber Security</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 34 Courses </div>
                        <div>·</div>
                        <div> 420 Students</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-gray-100 flex items-start px-3 py-2 rounded-lg space-x-3">
                    {/* <ion-icon
                name="logo-figma"
                className="text-3xl text-white from-pink-600 to-pink-400 bg-gradient-to-tl p-2 rounded-md md hydrated"
                role="img"
                aria-label="logo figma"
              ></ion-icon> */}
                    <div>
                      <h3 className="font-semibold text-lg"> Adobe Target</h3>
                      <div className="flex space-x-2 items-center text-sm pt-0.5">
                        <div> 14 Courses </div>
                        <div>·</div>
                        <div> 259K Students</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex justify-center mt-9">
                <a
                  href="#"
                  className="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm"
                >
                  {" "}
                  More Topics ..
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FeatureSlider />
      <PopularCardList />

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
    const LatestBook = await getBookLatest({
      limit: 10,
      start: 0,
    })

    return {
      props: {
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
