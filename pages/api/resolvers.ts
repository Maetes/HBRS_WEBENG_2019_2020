import { QueryResolvers, MutationResolvers, User } from './typeDefs.graphqls';
import { ResolverContext } from '../../hooks/useApollo';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authcheck from '../../util/backend/authChecker';

const prisma = new PrismaClient();

const Query: Required<QueryResolvers<ResolverContext>> = {
  // Users
  async getUser(_parent, _args, context, _info) {
    const email = authcheck(context);
    let user: any;
    try {
      user = await prisma.user.findOne({
        where: {
          email: email,
        },
      });
    } catch (err) {
      throw new Error();
    }
    if (user) return user;
    return {};
  },

  async allUsers(_parent, _args, _context, _info) {
    return await prisma.user.findMany();
  },

  async allTasks(_parent, _args, context, _info) {
    const userId = authcheck(context);
    const tasks = await prisma.task.findMany();
    return tasks;
  },

  async allTaskIds(_parent, _args, _context, _info) {
    return await prisma.task.findMany({ select: { name: true } });
  },

  async getTask(_parent, args, _context, _info) {
    let task: any;
    try {
      task = await prisma.task.findOne({
        where: {
          name: args.name,
        },
      });
    } catch (error) {
      throw new Error();
    }
    return task;
  },

  async allProjects(_parent, _args, _context, _info) {
    return await prisma.project.findMany();
  },

  async getProject(_parent, args, _context, _info) {
    let project: any;
    try {
      project = await prisma.project.findOne({
        where: {
          name: args.name,
        },
      });
    } catch (error) {
      throw new Error();
    }
    return project;
  },

  async allTechs(_parent, _args, _context, _info) {
    return await prisma.tech.findMany();
  },

  async getTech(_parent, args, _context, _info) {
    let tech: any;
    try {
      tech = await prisma.tech.findOne({
        where: {
          name: args.name,
        },
      });
    } catch (error) {
      throw new Error();
    }
    return tech;
  },
};

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  async createUser(_parent, args, _context, _info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await prisma.user.create({
      data: {
        title: args.title,
        nachname: args.nachname,
        email: args.email,
        password: password,
      },
    });
    const token = jwt.sign(
      { userId: user.id },
      process.env.APP_SECRET as string
    );

    return { token, user };
  },

  async deleteUser(_parent, args, _context, _info) {
    const user = await prisma.user.delete({ where: { id: args.userId } });
    return user;
  },

  async updateUser(
    _parent,
    { oldMail, title, nachname, email, password },
    _context,
    _info
  ) {
    const user = await prisma.user.update({
      where: { email: oldMail },
      data: { title, nachname, email, password },
    });
    return user;
  },

  //TASK

  async createTask(
    _parent,
    { beschreibung, name, code, click },
    _context,
    _info
  ) {
    const task = await prisma.task.create({
      data: {
        name: name,
        beschreibung: beschreibung,
        code: code,
        click: click,
      },
    });
    return task;
  },

  async deleteTask(_parent, { taskId }, _context, _info) {
    const task = await prisma.task.delete({ where: { id: taskId } });
    return task;
  },

  async updateTask(
    _parent,
    { oldName, beschreibung, code, click },
    _context,
    _info
  ) {
    const task = await prisma.task.update({
      where: { name: oldName },
      data: { name, beschreibung, code, click },
    });
    return task;
  },

  //PROJECT

  async createProject(
    _parent,
    { name, beschreibung, url, click },
    _context,
    _info
  ) {
    const project = await prisma.project.create({
      data: {
        name,
        beschreibung,
        url,
        click,
      },
    });
    return project;
  },

  async deleteProject(_parent, { projectId }, _context, _info) {
    const project = await prisma.project.delete({
      where: { id: projectId },
    });
    return project;
  },

  async updateProject(
    _parent,
    { oldName, name, beschreibung, url },
    _context,
    _info
  ) {
    const project = await prisma.project.update({
      where: { name: oldName },
      data: { name, beschreibung, url },
    });
    return project;
  },

  // TECH

  async createTech(_parent, { name, beschreibung, pic }, _context, _info) {
    const tech = await prisma.tech.create({
      data: {
        name,
        beschreibung,
        pic,
      },
    });
    return tech;
  },

  async deleteTech(_parent, { techId }, _context, _info) {
    const tech = await prisma.tech.delete({
      where: { id: techId },
    });
    return tech;
  },

  async updateTech(
    _parent,
    { oldName, name, beschreibung, pic },
    _context,
    _info
  ) {
    const tech = await prisma.tech.update({
      where: { name: oldName },
      data: { name, beschreibung, pic },
    });
    return tech;
  },

  async signIn(_parent, args, _context, _info) {
    const user = await prisma.user.findOne({ where: { email: args.email } });
    if (!user) {
      return {
        message: 'No such user found',
      };
    }
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      return {
        message: 'Wrong Password',
      };
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.APP_SECRET as string
    );

    return { user, token };
  },
};

export default { Query, Mutation };
