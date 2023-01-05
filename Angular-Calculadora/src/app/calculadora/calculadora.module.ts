import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './datos/datos.component';



@NgModule({
  declarations: [
    DatosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DatosComponent]
})
export class CalculadoraModule { }
