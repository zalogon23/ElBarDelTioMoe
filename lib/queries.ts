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
      createdBeverages{
        id name description image native 
        ingredients{id product quantity measure beverageId} 
        instructions{id content order beverageId} keywords{id content}
      }
      favoriteBeverages{
        id name description image native 
        ingredients{id product quantity measure beverageId} 
        instructions{id content order beverageId} keywords{id content}
      }
    }
  }
  `,
  createUser: gql`
  mutation($user: UserInput!){
    createUser(user: $user){
      id username description password avatar
      createdBeverages{
        id name description image native 
        ingredients{id product quantity measure beverageId} 
        instructions{id content order beverageId} keywords{id content}
      }
      favoriteBeverages{
        id name description image native 
        ingredients{id product quantity measure beverageId} 
        instructions{id content order beverageId} keywords{id content}
      }
    }
  }
  `
}

export default queries;