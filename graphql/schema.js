const { gql } = require('apollo-server');

export const typeDefs = gql`
    type User {
      id: String
      name: String
      email: String
      salary: Double
      birth: Date
      active: Boolean
      projects: [Project]
    }
  
    type Project {
        id: Int
        title: String 
        status: String 
        members: [User]
    }
  
    type Query {
      users: [User]
    }
  `;

