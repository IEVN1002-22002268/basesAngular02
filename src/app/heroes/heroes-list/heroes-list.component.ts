import { Component } from '@angular/core';
import {Heroes} from '../heroes'

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
  //styleUrl: './heroes-list.component.css'
})


export class HeroesListComponent {
  //formularios de template y formularios reactivos, de esos dos tipos hay en Angular
  //por el momento en este ejemmplo se usa uno de template:
listFilter:string='';

muestraImg:boolean=true;
  showImage(){
    this.muestraImg=!this.muestraImg
  }
//interfaz heroes
  heroes:Heroes[]=[
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "Kakaroto",
      race:"Saiyan",
      ki:90000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      descripcion: "Papá de Gohan",
      race:"Namekian",
      ki:2000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "Principe de los Saiyan",
      race:"Saiyan",
      ki:54000
    },
    {
      imagen: "https://dragonball-api.com/characters/bulma.webp",
      nombre: "Bulma",
      descripcion: "Esposa de Vegueta",
      race:"Human",
      ki:0
    },
  ]
}
