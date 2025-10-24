import { Router } from 'express';
import lessonController from './lesson.controller';

const router = Router();

router.get('/', lessonController.getAllLessons);
router.get('/:id', lessonController.getLessonById);
router.get('/class/:classId', lessonController.getLessonsByClassId);

export default router;
