import { getTopicsList } from "../api/topics/topics"
import Layout from "../components/layout"
import { TopicEntity } from "../graphql/generated/gql_types"
import { IMAGE_PATH } from "../utils"

interface TopicsListProps {
  TopicsList: TopicEntity[]
}

export default function TopicsList({ TopicsList }: TopicsListProps) {
  console.log(TopicsList)
  return (
    <Layout>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Topic
              </h2>
              <p className="text-xl text-gray-500">
                Topics combine the courses belonging to them. We have recently
                launched the functionality of creating topics and will actively
                form them to facilitate the search for courses and navigation
                through the site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto min-h-[500px] max-w-7xl py-12 px-4 text-center sm:px-6">
        <h4 className="text-2xl text-start pb-5 font-bold">Topics</h4>
        <ul
          role="list"
          className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4"
        >
          {TopicsList.map((topic) => (
            <li
              key={topic.id}
              className="space-y-4 mx-auto bg-gray-100 p-10 w-full rounded cursor-pointer"
            >
              <div className="min-w-full flex flex-col justify-center items-center">
                <img
                  className="object-cover w-24"
                  src={`${IMAGE_PATH}${topic.attributes?.icon?.data[0].attributes?.url}`}
                  alt=""
                />
                <div className="space-y-2 mt-5">
                  <div className="text-xl font-medium lg:text-sm">
                    <h3>{topic.attributes?.name}</h3>
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
    const TopicsList = await getTopicsList()
    return {
      props: {
        TopicsList,
      },
    }
  } catch (e) {
    console.log("ERRR", e)
    return {
      notFound: true,
    }
  }
}
