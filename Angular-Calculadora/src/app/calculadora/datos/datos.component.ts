import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  private Primernumero: number = 0;
  private Segundonumero: number = 0;
  private operador: string = '';
  private resultado: number = 0;
  private operadores: string[] = ['+', '-', 'x', '÷'];
  resp: string = '';

//valor puestos
  agregar(valor: string): void {
    if (this.operadores.includes(valor)) {
      this.operador = valor;
      this.Primernumero = Number(this.resp.substring(1));
      this.resp = this.resp + valor;
    } 
    else if (valor === '=') {
      console.log(this.resp.split(this.operador)[1].substring(1));
      this.Segundonumero = Number(this.resp.split(this.operador)[1].substring(1));
      this.calcular();
    } 
    else if (valor === 'c') {
      this.borrar_todo();
    }
    else if (this.resp === '') {
      this.resp = "$" + valor;
    }
    else if (this.resp[this.resp.length-1] === this.operador) {
      this.resp = this.resp + "$" + valor;
    }
    else {
      this.resp = this.resp + valor;
    }
  }
//datos a calcular 

  calcular(): void {
    switch (this.operador) {
      case '+':
        this.resultado = (this.Primernumero + this.Segundonumero);
        break;
      case '-':
        this.resultado = (this.Primernumero - this.Segundonumero);
        break;
      case 'x':
        this.resultado = (this.Primernumero * this.Segundonumero);
        break;
      case '÷':
        this.resultado = (this.Primernumero / this.Segundonumero);
        break;
    }

    this.resp = "$" + this.resultado.toString();
    (this.Primernumero, this.Segundonumero, this.operador, this.resultado);
  
  //botones de eliminacion de datos  
  }
  borrar_todo(): void {
    this.resp = '';
  }
  borrar_datos():void{
      this.resp = String(this.resp.slice(0,this.resp.length-1));
  }
}
