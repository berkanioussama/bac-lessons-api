import type { Request, Response } from 'express';
import classService from './class.service';

class ClassController {
  public async getAllClasses(req: Request, res: Response): Promise<void> {
    try {
      const classes = await classService.getAll();
      res.status(200).json(classes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch classes' });
    }
  }

  public async getClassById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ error: 'Class ID is required' });
        return;
      }
      
      const classItem = await classService.getById(id);
      
      if (!classItem) {
        res.status(404).json({ error: 'Class not found' });
        return;
      }
      
      res.status(200).json(classItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch class' });
    }
  }
}

export default new ClassController();
