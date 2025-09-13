import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*propiedad de clase llamada titulo y se pueden
  invocar en el html con interpolacion de propiedades*/
  title = 'basesAngular02';

  duplicarNumero(numero:number):number{
    return numero * 2;
  }

  //mandar llamar objetos
  pelicula={
    titulo: 'Batman',
    anio: new Date(),
    precio: 2500,
  }
}
