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
  `
}

export default queries;