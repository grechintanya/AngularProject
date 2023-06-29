import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService, CourseResolver } from '../services';
import { Course } from '../utils/public_api';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,
    private coursesService: CoursesService, private courseResolver: CourseResolver) { }

  courseID!: string | null;
  course: Course | undefined;

  name!: string;
  description!: string;
  date!: string;
  duration!: number;

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
      this.coursesService.updateCourse(Number(this.courseID), newCourse).subscribe(data => {
        if (data) this.router.navigateByUrl('courses');
      });
    } else {
      this.coursesService.createCourse(newCourse)
        .subscribe((data) => {
          if (data) this.router.navigateByUrl('courses');
        });
    }
  }
}

