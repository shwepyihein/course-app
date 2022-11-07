import { gql } from "graphql-request"

export const GET_POLICY = gql`
  query getPolicy {
    policy {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`

export const TERMS_CONDITIONS = gql`
  query getPolicy {
    termAndCondtion {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`
