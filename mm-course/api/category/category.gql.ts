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

export const Get_CateoryCourse_List = gql`
  query getBooks($limit: Int, $start: Int) {
    categories(pagination: { start: $start, limit: $limit }) {
      data {
        id
        attributes {
          name
          courses {
            data {
              id
            }
          }
          slug
        }
      }
    }
  }
`
