import moment from "moment"
import { useRouter } from "next/router"
import React from "react"
import { getTopicCourseListDetail } from "../../api/category/category"
import Layout from "../../components/layout"
import NoDataComponent from "../../components/NoData"
import { CourseEntity } from "../../graphql/generated/gql_types"
import { IMAGE_PATH } from "../../utils"

interface CategoryPageProps {
  slug: any
  TopicCourseList: CourseEntity[]
}

function CategoryPage({ slug, TopicCourseList }: CategoryPageProps) {
  const router = useRouter()
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="mx-auto min-h-screen max-w-7xl py-12 px-4 text-center sm:px-6">
          <h4 className="text-2xl text-start pb-5 font-bold">
            {slug.toUpperCase()}
          </h4>
          {TopicCourseList.length === 0 && <NoDataComponent />}
          <div
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4"
          >
            {TopicCourseList.length !== 0 &&
              TopicCourseList.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      router.push(`/course/${item.attributes?.slug}+${item.id}`)
                    }}
                  >
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

  const data = slug.split("-")

  try {
    const TopicCourseList = await getTopicCourseListDetail({
      id: data[data.length - 1],
    })
    return {
      props: {
        slug: data.slice(0, data.length - 1).join(" "),
        TopicCourseList,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default CategoryPage
