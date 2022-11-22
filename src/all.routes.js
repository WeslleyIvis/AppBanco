const express = require('express');
const allRoutes = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// C

allRoutes.post('/all', async (req, res) => {
  const { username, password } = req.body;
  const users = await prisma.users.create({
    data: {
      username,
      password,
    },
  });
  //all.push({ name, status: false });
  return res.status(201).json(users);
});

// R

allRoutes.get('/all', async (req, res) => {
  const users = await prisma.users.findMany();
  return res.status(200).json(users);
});

// U || Modificar os dados

allRoutes.put('/all', async (req, res) => {
  const { username, id, password } = req.body;

  if (!id) {
    return res.status(400).json('Id is mandatory');
  }

  const todoAlreadyExist = await prisma.users.findUnique({ where: { id } });

  if (!todoAlreadyExist) {
    return res.status(404).json('Todo not found');
  }

  const users = await prisma.users.update({
    where: {
      id,
    },
    data: {
      username,
      password,
    },
  });

  return res.status(200).json(users);
});

// D || DELETE

allRoutes.delete('/all/:id', async (req, res) => {
  const { id } = req.params;

  const intId = parseInt(id);

  if (!intId) {
    return res.status(400).json('Id is mandatory');
  }

  const todoAlreadyExist = await prisma.users.findUnique({
    where: { id: intId },
  });

  if (!todoAlreadyExist) {
    return res.status(404).json(`Todo not found ${intId}`);
  }

  await prisma.users.delete({ where: { id: intId } });

  return res.status(200).send();
});

module.exports = allRoutes;
