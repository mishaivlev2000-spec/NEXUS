import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { memoryStore } from '../db/index.js';

export const signup = async (req, res) => {
  const { email, password, companyName, role } = req.body;

  if (!email || !password || !companyName || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const existingUser = memoryStore.users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = { id: `u-${Date.now()}`, email, passwordHash: hash, role, companyId: `c-${Date.now()}` };
  const company = {
    id: user.companyId,
    name: companyName,
    description: 'New marketplace participant',
    specialization: role,
    supportedBrands: ['Cisco', 'Dell', 'HPE'],
    location: 'Global',
    contacts: email,
    role
  };

  memoryStore.users.push(user);
  memoryStore.companies.push(company);

  const token = jwt.sign({ userId: user.id, email: user.email, role: user.role, companyId: user.companyId }, process.env.JWT_SECRET || 'dev-secret', {
    expiresIn: '12h'
  });

  res.json({ token, user: { email, role, company } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = memoryStore.users.find((record) => record.email === email);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const company = memoryStore.companies.find((record) => record.id === user.companyId);
  const token = jwt.sign({ userId: user.id, email: user.email, role: user.role, companyId: user.companyId }, process.env.JWT_SECRET || 'dev-secret', {
    expiresIn: '12h'
  });

  res.json({ token, user: { email: user.email, role: user.role, company } });
};
