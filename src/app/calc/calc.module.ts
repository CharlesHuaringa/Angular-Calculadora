import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCalculatorComponent } from './content-calculator/content-calculator.component';
import { ContentOperationComponent } from './content-operation/content-operation.component';
import { ContentCabeceraComponent } from './content-cabecera/content-cabecera.component';
import { ContentFechaComponent } from './content-fecha/content-fecha.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContentCalculatorComponent,
    ContentOperationComponent,
    ContentCabeceraComponent,
    ContentFechaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContentCalculatorComponent,
    ContentOperationComponent,
    ContentCabeceraComponent,
    ContentFechaComponent
  ]
})
export class CalcModule { }
