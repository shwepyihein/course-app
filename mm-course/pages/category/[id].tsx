import moment from "moment"
import React from "react"
import { getCategoryCourseListDetail } from "../../api/category/category"
import Layout from "../../components/layout"
import NoDataComponent from "../../components/NoData"
import { Category, CourseEntity } from "../../graphql/generated/gql_types"
import { IMAGE_PATH } from "../../utils"

interface CategoryPageProps {
  categoryCourseList: CourseEntity[]
  slug: string
}

function CategoryPage({ categoryCourseList, slug }: CategoryPageProps) {
  console.log(categoryCourseList, "course")
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="mx-auto min-h-screen max-w-7xl py-12 px-4 text-center sm:px-6">
          <h4 className="text-2xl text-start pb-5 font-bold">
            All Course in {slug.toUpperCase()}
          </h4>
          {categoryCourseList.length === 0 && <NoDataComponent />}
          <div
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4"
          >
            {categoryCourseList.length !== 0 &&
              categoryCourseList?.map((item: CourseEntity) => {
                return (
                  <div key={item.id}>
                    <div className="w-full md:h-40 h-32 overflow-hidden rounded-lg relative block">
                      <img
                        src={`${IMAGE_PATH}${item.attributes?.course_img?.data?.attributes?.url}`}
                        alt=""
                        className="w-full h-full absolute inset-0 object-cover"
                      />
                    </div>
                    <div className="pt-3 text-start">
                      <div className="font-semibold line-clamp-2">
                        {item.attributes?.name}
                      </div>
                      <div className="pt-2">
                        <p className="text-sm"> {item.attributes?.name}</p>
                        <div className="flex space-x-2 items-center text-xs">
                          <div>
                            {moment(item.attributes?.publishedAt).format(
                              "MMM DD YYYY"
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const slug = context.params.id as string
  console.log(slug, "asd")
  const data = slug.split("-")

  try {
    const categoryCourseList = await getCategoryCourseListDetail({
      id: data[data.length - 1],
    })
    return {
      props: {
        slug: data.slice(0, data.length - 1).join(" "),
        categoryCourseList,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}

export default CategoryPage
