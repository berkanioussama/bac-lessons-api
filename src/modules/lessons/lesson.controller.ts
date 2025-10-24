import type { Request, Response } from 'express';
import lessonService from './lesson.service';

class LessonController {
  public async getAllLessons(req: Request, res: Response): Promise<void> {
    try {
      const lessons = await lessonService.getAll();
      res.status(200).json(lessons);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lessons' });
    }
  }

  public async getLessonById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: 'Lesson ID is required' });
        return;
      }
      
      const lesson = await lessonService.getById(id);
      
      if (!lesson) {
        res.status(404).json({ error: 'Lesson not found' });
        return;
      }
      
      res.status(200).json(lesson);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lesson' });
    }
  }

  public async getLessonsByClassId(req: Request, res: Response): Promise<void> {
    try {
      const { classId } = req.params;
      if (!classId) {
        res.status(400).json({ error: 'Class ID is required' });
        return;
      }
      
      const lessons = await lessonService.getByClassId(classId);
      res.status(200).json(lessons);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lessons by class ID' });
    }
  }

}

export default new LessonController();
