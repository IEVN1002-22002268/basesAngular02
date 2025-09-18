import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from './heroes'
//asi vamos a mandar a llamar el pipe
@Pipe({
  name: 'heroesFilter',
  standalone: false
})
export class HeroesFilterPipe implements PipeTransform {

  transform(value: Heroes[], args:string): Heroes[] {
    let filter:string=args?args.toLocaleLowerCase():'';
    
    return filter?value.filter((hero:Heroes)=>
      hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
    // despues del interrogacion args la palabra que yo escribo, conviertenla a minuscula (tambien la que va a comparar)
    //si son iguales, regresame ese valor, y solo visualiza eso
  }

}
