import { Router } from 'express';
import classController from './class.controller';

const router = Router();

// Get all classes
router.get('/', classController.getAllClasses);

// Get class by ID
router.get('/:id', classController.getClassById);

export default router;
