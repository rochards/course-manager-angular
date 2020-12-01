import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; // adicionei para poder utilizar o formulário no app.component.html
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/components/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule, // adicionei para poder utilizar o formulário no app.component.html
    HttpClientModule,
    CourseModule, /**========== */
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses', // redirecionando para uma nova rota
        pathMatch: 'full' // pq vou redirecionar para uma nova rota
      },
      {
        path: '**', // isso serve para quando o Angular nao encontrar determinada rota
        component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
