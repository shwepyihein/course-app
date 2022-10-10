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

export const GET_CATEGORY_ROUTE = gql`
  query getRoute {
    topics {
      data {
        id
        attributes {
          name
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
      }
    }
  }
`
