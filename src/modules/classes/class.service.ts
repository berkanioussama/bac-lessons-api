import { classesData, type IClass } from './class.data';

class ClassService {
  private classes: IClass[] = classesData;

  public async getAll(): Promise<IClass[]> {
    return this.classes;
  }

  public async getById(id: string): Promise<IClass | undefined> {
    return this.classes.find(c => c.id === id);
  }
}

export default new ClassService();
