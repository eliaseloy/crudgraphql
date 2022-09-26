import { DateDataType, FloatDataType } from 'sequelize';

import { assignments } from '../seeders/assignments';
import db from '../models'
import { projects } from '../seeders/projects';
import { users } from '../seeders/users';

export const createUsers = () => {
    users.map(user => {
        db.User.create(user);
    })
}
export const createProjects = () => {
    projects.map(project => {
        db.Project.create(project);
    })
}
export const createAssignments = () => {
    assignments.map(assignment => {
        db.ProjectAssignment.create(assignment);
    })
}

interface project {
    id: number;
    title: string;
    status: string;
}

interface user {
    id: string;
    name: string;
    email: string;
    salary: FloatDataType;
    birth: DateDataType;
    active: Boolean;
    Projects: project []
}

export const getUsers = async (): Promise<user[]> => {
    const userdata = await db.User.findAll({
        include: {
            model: db.Project,
            through: {
                attributes: []
            }
        }
    });
    const users = await userdata.map((user: user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            salary: user.salary,
            birth: user.birth,
            active: user.active,
            projects: user.Projects
        }
    })
    return users
}

