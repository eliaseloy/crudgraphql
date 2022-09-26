import { ApolloServer, gql } from 'apollo-server';
import {createAssignments, createProjects, createUsers, getUsers} from './utils';

import db from '../models';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/schema';

//createUsers();
//createProjects();
createAssignments();
//getUsers();

const server = new ApolloServer({typeDefs, resolvers});

db.sequelize.sync().then(() => {
    server.listen().then(({url}:{url: string}) => {
        console.log(`Server listening at ${url}`);
    })
})



