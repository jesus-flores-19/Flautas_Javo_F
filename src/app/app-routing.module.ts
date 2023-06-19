import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { MenuComponent } from './Inicio/menu/menu.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "inicio", children: [
    {path: "", component: InicioComponent},
    {path: "menu", component: MenuComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
