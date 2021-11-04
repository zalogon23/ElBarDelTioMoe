import gql from "graphql-tag";

const queries = {
  getBeverages: gql`
  query{
    beverages{
      id name description image native 
      instructions{
        id content order beverageId
      }
      ingredients{
        id product measure quantity beverageId
      }
      keywords{
        id content
      }
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