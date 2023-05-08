import React from "react"
import { getTerms } from "../api/poilcy&terms/policy"
import Layout from "../components/layout"
import { TermAndCondtionEntity } from "../graphql/generated/gql_types"

interface TermsAndConditionProps {
  TermList: TermAndCondtionEntity
}

const TermsAndCondition = ({ TermList }: TermsAndConditionProps) => {
  const createMarkup = () => {
    if (TermList.attributes?.description)
      return { __html: TermList.attributes?.description }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-7xl min-h-screen py-24 px-8">
        <div className="text-start px-24">
          <h1 className="text-2xl font-bold mb-5">
            {TermList.attributes?.title}
          </h1>
          <div className="px-3">
            <div className="" dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({}) => {
  try {
    const TermList = await getTerms()

    return {
      props: {
        TermList,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default TermsAndCondition
