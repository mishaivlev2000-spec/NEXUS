import { memoryStore } from '../db/index.js';

export const getDashboard = (_req, res) => {
  res.json({
    projects: memoryStore.projects,
    quoteRequests: memoryStore.quotes,
    messages: memoryStore.messages,
    notifications: [
      { id: 'n-1', message: '2 new quote requests pending supplier response' },
      { id: 'n-2', message: 'Project deadline reminder: Core switch refresh' }
    ]
  });
};

export const getProducts = (_req, res) => res.json(memoryStore.products);

export const requestQuote = (req, res) => {
  const quote = { id: `q-${Date.now()}`, ...req.body, createdAt: new Date().toISOString() };
  memoryStore.quotes.push(quote);
  res.status(201).json(quote);
};

export const getProjects = (_req, res) => res.json(memoryStore.projects);

export const createProject = (req, res) => {
  const project = { id: `pr-${Date.now()}`, ...req.body, status: 'Open' };
  memoryStore.projects.push(project);
  res.status(201).json(project);
};

export const getCompanies = (_req, res) => res.json(memoryStore.companies);

export const getMessages = (_req, res) => res.json(memoryStore.messages);

export const sendMessage = (req, res) => {
  const message = { id: `m-${Date.now()}`, ...req.body };
  memoryStore.messages.push(message);
  res.status(201).json(message);
};
