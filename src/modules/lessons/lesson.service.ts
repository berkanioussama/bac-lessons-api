import { type ILesson, lessonsData } from './lesson.data';

class LessonService {
  private lessons: ILesson[] = lessonsData;

  public async getAll(): Promise<ILesson[]> {
    return this.lessons;
  }

  public async getById(id: string): Promise<ILesson | undefined> {
    return this.lessons.find(lesson => lesson.id === id);
  }

  public async getByClassId(classId: string): Promise<ILesson[]> {
    return this.lessons.filter(lesson => lesson.classId === classId);
  }

}

export default new LessonService();
