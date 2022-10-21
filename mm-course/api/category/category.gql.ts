import { gql } from "graphql-request"

export const GET_CATEGORY_LIST = gql`
  query getCategoryList($limit: Int, $start: Int) {
    categories(pagination: { start: $start, limit: $limit }) {
      data {
        id
        __typename
        attributes {
          name
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
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

export const CATEGORY_COURSE_LIST = gql`
  query getCateogrycourse($categoryId: ID) {
    courses(filters: { categories: { id: { eq: $categoryId } } }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`
