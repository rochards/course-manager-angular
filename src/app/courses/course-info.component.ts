import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    courseId!: number
    course!: Course

    // ActivatedRoute me dá infos da rota que está ativa.
    constructor(
        private activatedRoute: ActivatedRoute,
        private courseService: CourseService
    ) {}
    
    ngOnInit(): void {
        this.retrieveById()
    }

    retrieveById(): void {
        this.courseId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '-1')
        this.courseService.retrieveById(this.courseId).subscribe({
            next: course => {
                this.course = course
            },
            error: err => {
                console.log(err)
            }
        })
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success!', course),
            error: err => console.log(err)
        })
    }

}