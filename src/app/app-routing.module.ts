import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },               //home   home page  http://localhost:4200/
  { path: 'login', component: LoginComponent },         //home page  http://localhost:4200/login
  { path: 'register', component: RegisterComponent }, 
  

  { //Define ruta de modulo usando Lazyload (Carga Perezosa)
    
    path: 'dashboard',
    loadChildren: () => import( './protected/protected.module' )
                              .then( module => module.ProtectedModule )
  },  //http://localhost:4200/register
  { path: '**', redirectTo: ''  }                       //http://localhost:4200/register
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }