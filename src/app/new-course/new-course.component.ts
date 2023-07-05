import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appState.interface';
import { Course } from '../utils/public_api';
import { coursesActions, selectError, selectIsLoading } from '../store/courses';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,
    private store: Store<AppState>) { 
      this.showCoursesLoader$ = this.store.select(selectIsLoading);
      this.coursesError$ = this.store.select(selectError);
    }

  courseID!: string | null;

  course: Course | undefined;
  name!: string;
  description!: string;
  date!: string;
  duration!: number;

  showCoursesLoader$: Observable<boolean>;
  coursesError$: Observable<string | null>;

  ngOnInit() {
    this.courseID = this.route.snapshot.paramMap.get('id');
    if (this.courseID) {
      this.course = this.route.snapshot.data['course'];
      if (this.course) {
        this.name = this.course.name;
        this.description = this.course.description;
        this.date = this.course.date;
        this.duration = this.course.length;
      }
    }
  }

  onCancelButtonClicked() {
    this.router.navigateByUrl('courses');
  }

  onSaveButtonClicked() {
    const newCourse: Course = {
      id: Number(this.courseID),
      name: this.name,
      description: this.description,
      date: this.date,
      length: this.duration,
      isTopRated: false,
      authors: []
    };
    if (this.courseID) {
      this.store.dispatch(coursesActions.updateCourse({id: Number(this.courseID), course: newCourse}));
    } else {
      this.store.dispatch(coursesActions.createCourse({newCourse: newCourse}));
    }
  }

  onCloseClicked() {
    this.store.dispatch(coursesActions.errorMessageClosed());
  }
}

