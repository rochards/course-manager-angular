import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    /**
     * Nessa parte de export, eu digo ao Angular oq eu quero que esse módulo deixe
     * disponível para ser importado por outros módulos
     */
    exports: [
        StarComponent
    ]
})
export class StarModule {

}