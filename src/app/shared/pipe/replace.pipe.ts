import { Pipe, PipeTransform } from '@angular/core';


/**
 * A anotação abaixo indica que essa classe é elegível para ser um
 * pipe
 */
@Pipe({
    name:'replace'
})
export class ReplacePipe implements PipeTransform {
    
    transform(value: string, char: string, valueToReplace: string): string {
        return value.replace(char, valueToReplace)
    }
}