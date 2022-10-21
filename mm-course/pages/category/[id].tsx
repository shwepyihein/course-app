import React from "react"
import { getCategoryCourseListDetail } from "../../api/category/category"
import Layout from "../../components/layout"
import { Category } from "../../graphql/generated/gql_types"

interface CategoryPageProps {
  categoryCourseList: Category
}

function CategoryPage({ categoryCourseList }: CategoryPageProps) {
  console.log(categoryCourseList)
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="mx-auto min-h-[500px] max-w-7xl py-12 px-4 text-center sm:px-6">
          <h4 className="text-2xl text-start pb-5 font-bold">
            All Course about {categoryCourseList.name}
          </h4>
          <div
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4"
          >
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <div key={""}>
                  <a
                    href="blog-read.html"
                    className="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block"
                  >
                    <img
                      src=""
                      alt=""
                      className="w-full h-full absolute inset-0 object-cover"
                    />
                  </a>
                  <div className="pt-3 text-start">
                    <a
                      href="blog-read.html"
                      className="font-semibold line-clamp-2"
                    >
                      Top Amazing web demos and experiments in 2021 Should Know
                      About
                    </a>
                    <div className="pt-2">
                      <p className="text-sm"> Denise Marie</p>
                      <div className="flex space-x-2 items-center text-xs">
                        <div> Feb 4, 2020 </div>
                        <div className="md:block hidden">·</div>
                        <div className="flex items-center"></div>
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
  try {
    const categoryCourseList = await getCategoryCourseListDetail({ id: slug })
    return {
      props: {
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
