import { gql } from "graphql-request"

export const GET_CATEGORY_LIST = gql`
  query getCategoryList {
    categories {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`
