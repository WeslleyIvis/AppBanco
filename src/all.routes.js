const express = require('express');
const allRoutes = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// C

allRoutes.post('/:table', async (req, res) => {
  const { table } = req.params;

  if (table == 'users') {
    const { username, password } = req.body;
    const post = await prisma.users.create({
      data: {
        username,
        password,
      },
    });
    return res.status(201).json(post);
  }

  if (table == 'accounts') {
    const { balance } = req.body;
    const post = await prisma.accounts.create({
      data: {
        balance,
      },
    });
    return res.status(201).json(post);
  }

  if (table == 'transactions') {
    const { debitedAccountId, creditedAccountid, value, createdAt } = req.body;
    const post = await prisma.transactions.create({
      data: {
        debitedAccountId,
        creditedAccountid,
        value,
        createdAt,
      },
    });
    return res.status(201).json(post);
  }

  //all.push({ name, status: false });
});

// R

allRoutes.get('/:table', async (req, res) => {
  const { table } = req.params;
  let get;

  if (table == 'users') get = await prisma.users.findMany();
  if (table == 'accounts') get = await prisma.accounts.findMany();
  if (table == 'transactions') get = await prisma.transactions.findMany();

  return res.status(200).json(get);
});

// U || Modificar os dados

allRoutes.put('/:table', async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json('Id is mandatory');
  }

  const todoAlreadyExist = await prisma.users.findUnique({ where: { id } });

  if (!todoAlreadyExist) {
    return res.status(404).json('Todo not found');
  }

  if (req.params.table == 'users') {
    const { username, id, password } = req.body;
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
  }
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
