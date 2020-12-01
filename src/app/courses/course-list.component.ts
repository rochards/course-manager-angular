import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

/**
 * Export -> Vai deixar essa classe pública para que outros
 * arquivos possam fazer referência a ela.
 */
//@Component -> indica que essa classe vai ser elegível como component
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit { // preciso informar CourseListComponent em app.modules.ts
    
    _courses!: Course[] // criando um array do tipo Course
    _filteredCourses!: Course[]
    _filterBy!: string // o _ só indica que q quero que essa variável seja "privada"

    constructor (private courseService: CourseService) {}

    /**
     * O método será chamado assim q o component for criado.
     * Esse método é do Angular
     */
    ngOnInit(): void {
        this.retrieveAll()
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: course => { // retorna de sucesso vem aqui
                this._courses = course
                // importante a lógica abaixo para que a lista não comece vazia
                this._filteredCourses = this._courses
            },
            error: err => {
                console.log(err)
            }
        })
    }

    deleteById(id: number): void {
        this.courseService.deleteById(id).subscribe({
            next: () => {
                console.log('Excluído com sucesso!')
                this.retrieveAll()
            },
            error: err => console.log(err)
        })
    }

    set filter(value: string) {
        this._filterBy = value
        this._filteredCourses = this._courses.filter(course => {
            /**
             * Atenção a essa lógica: só retorna tudo pq quando vc não digita nada pq
             * nesse caso o valor de value é '', e o indexOf retorna 0 sempre
             */
            return course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
        })
    }

    // get filter(): string {
    //     return this._filterBy
    // }
}