import { Component } from '@angular/core';
import { HomsVarMetodos } from './homs.clase'

@Component({
  selector: 'app-homs',
  standalone: false,
  templateUrl: './homs.component.html',
  styleUrl: './homs.component.css'
})
export class HomsComponent {
  b1seleccionada:any = '';
  b2seleccionada:any = '';
  b3seleccionada:any = '';
  toleSeleccionada:any = '';

  color1Seleccionado:any=''
  color2Seleccionado:any=''
  color3Seleccionado:any=''
  colorTolerancia:any=''

  color1Nombre:any = '';
  color2Nombre:any = '';
  color3Nombre:any = '';
  toleranciaNombre:any = '';

  datosHoms!: HomsVarMetodos;
  calcularHoms():void {
    this.datosHoms = new HomsVarMetodos(this.b1seleccionada,this.b2seleccionada,this.b3seleccionada,this.toleSeleccionada);
    this.datosHoms.calcularValor();
    this.datosHoms.calcularMax();
    this.datosHoms.calcularMin();

    this.color1Nombre = this.datosHoms.calcularNomBanda1();
    this.color2Nombre = this.datosHoms.calcularNomBanda2();
    this.color3Nombre = this.datosHoms.calcularNomBanda3();
    this.toleranciaNombre = this.datosHoms.calcularNomTolerancia();

    this.color1Seleccionado = this.datosHoms.calcularColBanda1();
    this.color2Seleccionado = this.datosHoms.calcularColBanda2();
    this.color3Seleccionado = this.datosHoms.calcularColBanda3();
    this.colorTolerancia = this.datosHoms.calcularColTolerancia();
  }
}