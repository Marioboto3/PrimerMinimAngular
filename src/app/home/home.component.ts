import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentService} from '../components/services/student.service';
import {Subject} from '../models/subject';
import {Router} from '@angular/router';
import {SubjectService} from '../components/services/subject.service';
import {Student} from '../models/student';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentService]
})
export class HomeComponent implements OnInit {

  subjects: Subject[];
  /**
   * To see the enrolled students
   */
  singleSubject: Subject;
  students: Student[];
  idSelectedSubject: string;
  body: object;
  subjectName: string;
  subjectForm: FormGroup;
  validation_messages: any;


  constructor(private studentService: StudentService, private router: Router,
              private subjectService: SubjectService, private formBuilder: FormBuilder) {

    this.singleSubject = new Subject();

    this.subjectForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z]{1,20}$/)]))
    });
  }

  ngOnInit() {
    this.getSubjects();
    this.getStudents();
    this.idSelectedSubject = '';

    this.validation_messages = {
      name: [
        { type: 'required', message: 'Name is required' },
        { type: 'pattern', message: 'Name must be in capital letter and have between 1 and 20 characters' },
        { type: 'error', message: 'Subject Name must be unique' }
      ]
    };
  }


  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(res => {
        console.log(res);
        this.subjects = res as Subject[];
      });
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(res => {
        console.log(res);
        this.students = res as Student[];
      });
  }
  assignSubjectId(id: string) {
    this.idSelectedSubject = id;
  }
  updateStudent(id: string) {
    this.router.navigate(['/updatestudent', id]);
  }

  addNewStudent() {
    this.router.navigateByUrl('/addstudent');
  }

  private handleError(err: HttpErrorResponse) {
    if ( err.status === 500 ) {
      this.subjectForm.get('name').setErrors({error: true});
    }
  }
}
