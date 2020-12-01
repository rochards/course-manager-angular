import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/component/star/star.module';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ], 
    imports: [
        AppPipeModule, // módulo criado
        StarModule, //módulo criado
        FormsModule,
        CommonModule, //recurso básico para criação de pipes
        RouterModule.forChild([
            {
                path: 'courses',
                component: CourseListComponent
            },
            {
                path: 'courses/info/:id', // estou indicando para o Angular q vou passar id para o componente
                component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}