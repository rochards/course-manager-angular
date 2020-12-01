import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

/**
 * Injectable -> Tornando minha classe elegível para injeção de dependência.
 * root -> disponibilizando na root da minha aplicação, ou seja, quando o 
 * Angular carregar o módulo raiz (AppModule), ele tbm vai carregar essa classe
 * de serviço.
 */
@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private baseUrl = 'http://localhost:3100/api/courses'
    
    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.baseUrl);
    }

    retrieveById(id: number): Observable<Course> {
        const url = `${this.baseUrl}/${id}`
        return this.httpClient.get<Course>(url)
    }

    save(course: Course): Observable<Course> {
        if (course.id) {
            const url = `${this.baseUrl}/${course.id}`
            return this.httpClient.put<Course>(url, course)
        } else {
            return this.httpClient.post<Course>(this.baseUrl, course)
        }
    }

    deleteById(id: number): Observable<any> {
        const url = `${this.baseUrl}/${id}`
        return this.httpClient.delete<any>(url)
    }
}