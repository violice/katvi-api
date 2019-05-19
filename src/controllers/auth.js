import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import parseDomain from 'parse-domain';

import { prisma } from 'generated/prisma-client';

const createToken = user => jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '14d' });

const getDomain = hostname => {
  if (hostname === 'localhost') return hostname;
  const { domain, tld } = parseDomain(hostname);
  return domain + tld;
}

const login = async (req, res) => {
  try {
    const { body: { email, password }, hostname } = req;
    if (!email) {
      return res.status(422).json({ error: 'Email is required' });
    }
    if (!password) {
      return res.status(422).json({ error: 'Password is required' });
    }
    const user = await prisma.user({ email });
    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check) {
        delete user.password;
        const token = createToken(user);
        const domain = getDomain(hostname);
        res.clearCookie('katvi-token')
        res.cookie('katvi-token', token, { domain });
        res.status(200).json(user);
      } else {
        res.status(422).json({ error: 'Incorrect password' });
      }
    } else {
      res.status(422).json({ error: 'User with such email wasn\'t found' });
    }
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

const registration = async (req, res) => {
  try {
    const { body: { email, password }, hostname } = req;
    if (!email) {
      return res.status(422).json({ error: 'Email is required' });
    }
    if (!password) {
      return res.status(422).json({ error: 'Password is required' });
    }
    const oldUser = await prisma.user({ email });
    if (oldUser) {
      return res.status(422).json({ error: 'User with this email already exist' });
    }
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));
    const user = await prisma.createUser({ email, password: hash });
    delete user.password;
    const token = createToken(user);
    const domain = getDomain(hostname);
    res.clearCookie('katvi-token')
    res.cookie('katvi-token', token, { domain });
    res.status(200).json(user);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

export { login, registration };
