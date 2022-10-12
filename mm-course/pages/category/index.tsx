import { useRouter } from "next/router"
import { getCategoryList } from "../../api/category/category"
import { getTopicsList } from "../../api/topics/topics"
import Layout from "../../components/layout"
import { CategoryEntity, TopicEntity } from "../../graphql/generated/gql_types"
import { IMAGE_PATH } from "../../utils"

interface TopicsListProps {
  categoryList: CategoryEntity[]
}

export default function CategoryPage({ categoryList }: TopicsListProps) {
  console.log(categoryList)
  const router = useRouter()
  return (
    <Layout>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Category
              </h2>
              <p className="text-xl text-gray-500">
                Hunter dox is constantly working to replenish courses in
                <br />
                existing categories and to organize new ones!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto min-h-[500px] max-w-7xl py-12 px-4 text-center sm:px-6">
        <h4 className="text-2xl text-start pb-5 font-bold">Categories</h4>
        <ul
          role="list"
          className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4"
        >
          {categoryList.map((cat) => (
            <li
              key={cat.id}
              onClick={() => {
                router.push(`/category/${cat.id}`)
              }}
              className="space-y-4 mx-auto bg-gray-100 p-10 w-full rounded cursor-pointer"
            >
              <div className="min-w-full flex flex-col justify-center items-center">
                <img className="object-cover w-24" src={`/logo_3.svg`} alt="" />
                <div className="space-y-2 mt-5">
                  <div className="text-xl font-medium lg:text-sm">
                    <h3>{cat.attributes?.name}</h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  try {
    const categoryList = await getCategoryList()
    return {
      props: {
        categoryList,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}
