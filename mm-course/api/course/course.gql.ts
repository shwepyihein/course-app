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

export const GET_LATEST_COURSE = gql`
  query getCourseFilter($limit: Int, $start: Int) {
    courses(
      pagination: { start: $start, limit: $limit }
      sort: ["publishedAt:desc"]
    ) {
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

export const FETCH_COURSE_DETAIL = gql`
  query getCourseDetail($courseId: ID!) {
    course(id: $courseId) {
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
          level
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
