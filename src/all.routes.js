const express = require('express');
const all = [{ name: 'nvdia', status: false }];
const allRoutes = express.Router();
const { PrismaClient } = require('@prisma/client');
const { response } = require('express');

const prisma = new PrismaClient();

// C

allRoutes.post('/all', async (req, res) => {
  const { name } = req.body;
  const todo = await prisma.todo.create({
    data: {
      name,
    },
  });
  //all.push({ name, status: false });
  return res.status(201).json(todo);
});

// R

allRoutes.get('/all', async (req, res) => {
  const todos = await prisma.todo.findMany();
  return res.status(200).json(todos);
});

// U || Modificar os dados

allRoutes.put('/all', async (req, res) => {
  const { name, id, status } = req.body;

  if (!id) {
    return res.status(400).json('Id is mandatory');
  }

  const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } });

  if (!todoAlreadyExist) {
    return res.status(404).json('Todo not found');
  }

  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      status,
    },
  });

  return res.status(200).json(todo);
});

// D || DELETE

allRoutes.delete('/all/:id', async (req, res) => {
  const { id } = req.params;

  const intId = parseInt(id);

  if (!intId) {
    return res.status(400).json('Id is mandatory');
  }

  const todoAlreadyExist = await prisma.todo.findUnique({
    where: { id: intId },
  });

  if (!todoAlreadyExist) {
    return res.status(404).json(`Todo not found ${intId}`);
  }

  await prisma.todo.delete({ where: { id: intId } });

  return response.status(200).send();
});

module.exports = allRoutes;
