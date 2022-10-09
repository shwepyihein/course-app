import { gql } from "graphql-request"

export const GET_COURSE_LIST_FILTER = gql`
  query getCourseFilter(
    $limit: Int
    $start: Int
    $filter: [CourseFiltersInput]
    $price_type: String
  ) {
    courses(
      pagination: { start: $start, limit: $limit }
      filters: { price_type: { eq: $price_type }, and: $filter }
      sort: ["publishedAt:desc"]
    ) {
      meta {
        pagination {
          page
          pageCount
          total
        }
      }
      data {
        id
        attributes {
          name
          description
          duration
          slug
          language
          publishedAt
          num_lessons
          course_img {
            data {
              attributes {
                url
              }
            }
          }

          categories {
            data {
              attributes {
                name
              }
            }
          }
          author {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const GET_COURSE_LIST = gql`
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