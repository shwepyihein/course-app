import { gql } from "graphql-request"

export const GET_BOOK_LIST = gql`
  query getBooks($limit: Int, $start: Int) {
    books(
      pagination: { start: $start, limit: $limit }
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
          slug
          author {
            data {
              attributes {
                name
              }
            }
          }
          publishedAt
          book_img {
            data {
              id
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

export const GET_BOOK_FILTER = gql`
  query getblogs($limit: Int, $start: Int, $filter: [BlogFiltersInput]) {
    blogs(
      pagination: { start: $start, limit: $limit }
      filters: { and: $filter }
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
          title
          slug
          description
          description_mm
          publishedAt
          short_description
          author {
            data {
              attributes {
                name
              }
            }
          }
          seo_image {
            data {
              id
              attributes {
                url
              }
            }
            __typename
          }
        }
      }
    }
  }
`

export const FETCH_BOOK_RECOMMEND = gql`
  query getbookRecommands($limit: Int, $start: Int) {
    books(
      pagination: { start: $start, limit: $limit }
      filters: { is_recommend: { eq: true } }
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
          slug
          publishedAt
          author {
            data {
              attributes {
                name
              }
            }
          }
          book_img {
            data {
              id
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

export const FETCH_BOOK_LATEST = gql`
  query getbookRecommands($limit: Int, $start: Int) {
    books(
      pagination: { start: $start, limit: $limit }
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
          publishedAt
          slug
          author {
            data {
              attributes {
                name
              }
            }
          }
          book_img {
            data {
              id
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

export const FETCH_BOOK_DETAIL = gql`
  query getbookDetail($slug: String) {
    books(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          slug
          description
          description_mm
          word_count
          page_count
          download_link
          book_img {
            data {
              attributes {
                previewUrl
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
        }
      }
    }
  }
`
