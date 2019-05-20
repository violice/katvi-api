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

const getUser = async (req, res) => {
  try {
    const { params: { id }, headers: { user: { id: currentUserId } } } = req;
    const user = await prisma.user({ id: id === 'current' ? currentUserId : id });
    delete user.password;
    res.status(200).json(user);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

export { getUsers, getUser };
