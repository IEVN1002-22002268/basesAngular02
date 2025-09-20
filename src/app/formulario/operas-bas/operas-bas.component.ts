import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string="";
  num2:string="";
  res:string="";
  seleccionado:string="";
  sumar():void{
    this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  }
  restar():void{
    this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
  }
  multiplicar():void{
    this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
  }
  dividir():void{
    this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
  }
  operacionSeleccionada():void{
    switch(this.seleccionado){
      case "sumar":
        this.sumar();
        break;
      case "restar":
        this.restar();
        break;
      case "multiplicar":
        this.multiplicar();
        break;
      case "dividir":
        this.dividir();
        break;
    }
  }
}

