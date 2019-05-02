import { prisma } from 'generated/prisma-client';

const getUsers = async (req, res) => {
  try {
    const users = await prisma.users();
    res.status(200).json(users.map(({ password, ...user }) => user));
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

export { getUsers };
