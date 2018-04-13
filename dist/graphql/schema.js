"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'Djian',
        email: 'djian@lucca.com'
    },
    {
        id: 2,
        name: 'Lucca',
        email: 'lucca@lucca.com'
    },
    {
        id: 3,
        name: 'Carvalho',
        email: 'carvalho@lucca.com'
    }
];
const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
        photo: String
        posts: [Post!]!
        createdAt: String!
        updatedAt: String!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        photo: String!
        author: User!
        comments: [Comment!]!
        createdAt: String!
        updatedAt: String!
    }

    type Comment {
        id: ID!
        comment: String!
        email: String!
        user: User!
        post: Post!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String, email: String): User
    }
`;
const resolvers = {
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
