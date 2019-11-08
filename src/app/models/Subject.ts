import {Student} from './student';

export class Subject {
  id: string;
  name: string;
  students: Student[];

  constructor(id = '', name = '', students = null ) {
    this.id = id;
    this.name = name;
    this.students = students;
  }
}
