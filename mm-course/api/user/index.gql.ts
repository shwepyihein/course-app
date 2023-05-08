import { gql } from "graphql-request"

export const MUTATION_LOGIN = gql`
  mutation LoginMutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`

export const MUTATION_Register = gql`
  mutation LoginMutation($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`
