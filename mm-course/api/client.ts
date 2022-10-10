import { GraphQLClient } from "graphql-request"

import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const backend = publicRuntimeConfig.NEXT_PUBLIC_BACKEND

const graphqlRoute = backend
  ? backend + "/graphql"
  : "http://stg-api.hunterdox.com/graphql"

const client = new GraphQLClient(graphqlRoute)

export default client
