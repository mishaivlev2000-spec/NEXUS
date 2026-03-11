import { Router } from 'express';
import {
  createProject,
  getCompanies,
  getDashboard,
  getMessages,
  getProducts,
  getProjects,
  requestQuote,
  sendMessage
} from '../controllers/marketController.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.use(requireAuth);
router.get('/dashboard', getDashboard);
router.get('/products', getProducts);
router.post('/quotes', requestQuote);
router.get('/projects', getProjects);
router.post('/projects', createProject);
router.get('/companies', getCompanies);
router.get('/messages', getMessages);
router.post('/messages', sendMessage);

export default router;
