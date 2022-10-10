import { gql } from "graphql-request"

export const GET_BLOG_LIST = gql`
  query getblogs($limit: Int, $start: Int) {
    blogs(
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
          title
          slug
          description
          short_description
          publishedAt
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

export const GET_BLOG_FILTER = gql`
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
          publishedAt
          short_description
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

export const FETCH_BLOG_RECOMMEND = gql`
  query getblogsRecommands($limit: Int, $start: Int) {
    blogs(
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
          title
          publishedAt
          short_description
          description
          slug
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

export const FETCH_BLOG_LATEST = gql`
  query getbloglatest($limit: Int, $start: Int) {
    blogs(
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
          title
          publishedAt
          description
          slug
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

export const BLOG_DETAIL = gql`
  query getblogdetail($blogId: ID!) {
    blog(id: $blogId) {
      data {
        id
        attributes {
          title
          publishedAt
          description
          slug
          blog_author
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
