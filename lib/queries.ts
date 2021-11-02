import gql from "graphql-tag";

const queries = {
  getBeverages: gql`
  query{
    beverages{
      id name description image native
    }
  }
  `,
  getKeywords: gql`
  query{
    keywords{
      id content
    }
  }
  `,
  getClassifications: gql`
  query{
    classifications{
      id beverageId keywordId
    }
  }
  `,
  getSelf: gql`
  query{
    self{
      id username description password avatar
    }
  }
  `,
  createUser: gql`
  mutation($user: UserInput!){
    createUser(user: $user){
      id username password description avatar
    }
  }
  `
}

export default queries;