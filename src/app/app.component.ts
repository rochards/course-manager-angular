import { Component } from '@angular/core';

@Component({
  /**
   * app-root -> tag que será gerada e poderá ser usada em qualquer lugar.
   * Ela está lá no index.html
   */
  selector: 'app-root',
  templateUrl: './app.component.html', // vai ser o html do meu componente
  styleUrls: ['./app.component.css'] // vai ser o css do meu componente
})
export class AppComponent {
  title = 'course-manager'; // está lá no app.component.html
  name: string = 'Rocha';// está lá no app.component.html
}
