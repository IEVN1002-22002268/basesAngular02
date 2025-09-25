import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre:string=""
  cantPersonas:string=""
  CantBoletas:string=""
  tieneTar:string=""
  total:number=0
  res:number=0
  precio:number=12
  descuento:number=0
  error:string=""
  totalBoletas:number=0
  DesTarj:number=0
  totalTarj:number=0
  resCantBoletas:string=""
  restotal:string=""
  resnombre:string=""
  maxBoletas:number = 0
  

  calcularCompra(){
    this.maxBoletas = parseInt(this.cantPersonas) * 7;
    this.totalBoletas = parseInt(this.CantBoletas);

    if(this.totalBoletas <= this.maxBoletas){
      if(this.totalBoletas > (parseInt(this.cantPersonas) * 5)){
        this.total = this.totalBoletas * this.precio;
        this.descuento = this.total * 0.15;
        this.res = this.total - this.descuento;
      }
      else if(this.totalBoletas >= (parseInt(this.cantPersonas)) * 3){
        this.total = this.totalBoletas * this.precio;
        this.descuento = this.total * 0.10;
        this.res = this.total - this.descuento;
      }
      else{
        this.res = this.totalBoletas * this.precio;
      }
    }
    else if(this.totalBoletas > this.maxBoletas){
      this.error = "Solo se pueden comprar 7 boletas por persona";
      this.totalTarj = 0;
      return;
    }
    else{
      this.error = "Llene todos los campos";
      this.totalTarj = 0;
      return;
    }

    switch (this.tieneTar) {
      case "si":
        this.DesTarj = this.res * 0.10;
        this.totalTarj = this.res - this.DesTarj;
        break;
      case "no":
        this.totalTarj = this.res;
        break;
    }

    this.resnombre = "Nombre: " + this.nombre;
    this.resCantBoletas = "Cantidad de boletas compradas: " + this.totalBoletas;
    this.restotal = "Precio a pagar: " + this.totalTarj.toFixed(2);
}
  salir(){
    this.error="Adios"
  }
}
