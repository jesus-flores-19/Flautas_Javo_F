import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    InicioComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
