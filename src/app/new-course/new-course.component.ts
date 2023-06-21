import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService, CourseResolver } from '../services';
import { FormatDatePipe, Course } from '../utils/public_api';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,
    private coursesService: CoursesService, private formatDatePipe: FormatDatePipe,
    private courseResolver: CourseResolver) { }

  courseID!: string | null;
  course: Course | undefined;

  title!: string;
  description!: string;
  date!: string;
  duration!: number;

  ngOnInit() {
    this.courseID = this.route.snapshot.paramMap.get('id');
    if (this.courseID) {
      this.course = this.route.snapshot.data['course'];
      if (this.course) {
        this.title = this.course.title;
        this.description = this.course.description;
        this.date = this.formatDatePipe.transform(this.course.creationDate);
        this.duration = this.course.duration;
      }
    }
  }

  onCancelButtonClicked() {
    this.router.navigateByUrl('courses');
  }

  onSaveButtonClicked() {
    if (this.courseID) {
      const newCourse: Course = {
        id: this.courseID,
        title: this.title,
        description: this.description,
        creationDate: new Date(this.date),
        duration: this.duration,
        topRated: false
      };
      this.coursesService.updateCourse(this.courseID, newCourse);
      this.router.navigateByUrl('courses');
    }

  }
}
