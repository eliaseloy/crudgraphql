import { v4 as uuidv4 } from 'uuid';

export const users = [
    {
        id: uuidv4(),
        name: 'Carolina Castro',
        email: 'ccastro@mycompany.com',
        salary: 1500.25,
        birth: '1994/03/29',
        active: true
    },
    {
        id: uuidv4(),
        name: 'Joao Batista',
        email: 'jbatista@mycompany.com',
        salary: 1625.75,
        birth: '1998/07/04',
        active: true
    },
    {
        id: uuidv4(),
        name: 'Lucio Santos',
        email: 'lsantos@mycompany.com',
        salary: 900.00,
        birth: '1968/01/28',
        active: false
    },
]