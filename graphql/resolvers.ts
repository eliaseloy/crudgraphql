import {getUsers} from '../src/utils';

export const resolvers = {
        Query: {
          users: async () => getUsers()
        },
      };
