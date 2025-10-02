export class HomsVarMetodos{
    color1select:string
    color2select:string
    color3select:string
    colorTole:string

    valorTotal:number
    valorMax:number
    valorMin:number
    porcTole:number

    constructor(col1:string, col2:string, col3:string, tol:string) {
        this.color1select = col1;
        this.color2select = col2;
        this.color3select = col3;
        this.colorTole = tol;

        this.valorTotal = 0;
        this.valorMax = 0;
        this.valorMin = 0;
        this.porcTole = 0;
    }

   calcularValor():number {
        let sumaColorStrg = this.color1select + this.color2select;
        this.valorTotal = parseInt(sumaColorStrg) * parseInt(this.color3select);
        return this.valorTotal;
    }

    calcularMax():number {
        let porcTole  = this.valorTotal * (parseInt(this.colorTole) / 100);
        this.valorMax = this.valorTotal + porcTole;
        return this.valorMax;
    }
    calcularMin():number {
        let porcTole  = this.valorTotal * (parseInt(this.colorTole) / 100);
        this.valorMin = this.valorTotal - porcTole;
        return this.valorMin;
    }
    calcularNomBanda1():string{
        if(this.color1select == '0'){
            return 'Negro';
        }
        else if(this.color1select == '1'){
            return 'Café';
        }
        else if(this.color1select == '2'){
            return 'Rojo';
        }
        else if(this.color1select == '3'){
            return 'Naranja';
        }
        else if(this.color1select == '4'){
            return 'Amarillo';
        }
        else if(this.color1select == '5'){
            return 'Verde';
        }
        else if(this.color1select == '6'){
            return 'Azul';
        }
        else if(this.color1select == '7'){
            return 'Morado';
        }
        else if(this.color1select == '8'){
            return 'Gris Oscuro';
        }
        else if(this.color1select == '9'){
            return 'Gris';
        }
        else{
            return ''
        }
    }
    calcularNomBanda2():string{
        if(this.color2select == '0'){
            return 'Negro';
        }
        else if(this.color2select == '1'){
            return 'Café';
        }
        else if(this.color2select == '2'){
            return 'Rojo';
        }
        else if(this.color2select == '3'){
            return 'Naranja';
        }
        else if(this.color2select == '4'){
            return 'Amarillo';
        }
        else if(this.color2select == '5'){
            return 'Verde';
        }
        else if(this.color2select == '6'){
            return 'Azul';
        }
        else if(this.color2select == '7'){
            return 'Morado';
        }
        else if(this.color2select == '8'){
            return 'Gris Oscuro';
        }
        else if(this.color2select == '9'){
            return 'Gris';
        }
        else{
            return ''
        }
    }
    calcularNomBanda3():string{
        if(this.color3select == '1'){
            return 'Negro';
        }
        else if(this.color3select == '10'){
            return 'Café';
        }
        else if(this.color3select == '100'){
            return 'Rojo';
        }
        else if(this.color3select == '1000'){
            return 'Naranja';
        }
        else if(this.color3select == '10000'){
            return 'Amarillo';
        }
        else if(this.color3select == '100000'){
            return 'Verde';
        }
        else if(this.color3select == '1000000'){
            return 'Azul';
        }
        else if(this.color3select == '10000000'){
            return 'Morado';
        }
        else if(this.color3select == '100000000'){
            return 'Gris Oscuro';
        }
        else if(this.color3select == '1000000000'){
            return 'Gris';
        }
        else{
            return ''
        }
    }
    calcularNomTolerancia():string{
        return this.colorTole === '5' ? 'Dorado' : 
        (this.colorTole === '10' ? 'Plata' : '');
    }

    calcularColBanda1():string{
        if(this.color1select == '0'){
            return '#1b1b1bff';
        }
        else if(this.color1select == '1'){
            return '#95613cff';
        }
        else if(this.color1select == '2'){
            return '#ff7171ff';
        }
        else if(this.color1select == '3'){
            return '#ffa34dff';
        }
        else if(this.color1select == '4'){
            return '#f1f106ff';
        }
        else if(this.color1select == '5'){
            return '#6fff9fff';
        }
        else if(this.color1select == '6'){
            return '#6969ffff';
        }
        else if(this.color1select == '7'){
            return '#ad2fd3ff';
        }
        else if(this.color1select == '8'){
            return '#808080';
        }
        else if(this.color1select == '9'){
            return '#d7d7d7ff';
        }
        else{
            return ''
        }
    }
    calcularColBanda2():string{
        if(this.color2select == '0'){
            return '#1b1b1bff';
        }
        else if(this.color2select == '1'){
            return '#95613cff';
        }
        else if(this.color2select == '2'){
            return '#ff7171ff';
        }
        else if(this.color2select == '3'){
            return '#ffa34dff';
        }
        else if(this.color2select == '4'){
            return '#f1f106ff';
        }
        else if(this.color2select == '5'){
            return '#6fff9fff';
        }
        else if(this.color2select == '6'){
            return '#6969ffff';
        }
        else if(this.color2select == '7'){
            return '#ad2fd3ff';
        }
        else if(this.color2select == '8'){
            return '#808080';
        }
        else if(this.color2select == '9'){
            return '#d7d7d7ff';
        }
        else{
            return ''
        }
    }
    calcularColBanda3():string{
        if(this.color3select == '1'){
            return '#1b1b1bff';
        }
        else if(this.color3select == '10'){
            return '#95613cff';
        }
        else if(this.color3select == '100'){
            return '#ff7171ff';
        }
        else if(this.color3select == '1000'){
            return '#ffa34dff';
        }
        else if(this.color3select == '10000'){
            return '#f1f106ff';
        }
        else if(this.color3select == '100000'){
            return '#6fff9fff';
        }
        else if(this.color3select == '1000000'){
            return '#6969ffff';
        }
        else if(this.color3select == '10000000'){
            return '#ad2fd3ff';
        }
        else if(this.color3select == '100000000'){
            return '#808080';
        }
        else if(this.color3select == '1000000000'){
            return '#d7d7d7ff';
        }
        else{
            return ''
        }
    }
    calcularColTolerancia():string{
        return this.colorTole === '5' ? '#c5ad65ff' : 
        (this.colorTole === '10' ? '#c0c0c0ff' : '');
    }
}