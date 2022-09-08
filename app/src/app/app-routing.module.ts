import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  


  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    redirectTo:'inicio',
    pathMatch:'full',
  },


 
  {
    path:'login',
    redirectTo:'login',
    pathMatch:'full',
  },

  

  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path:'principal',
    redirectTo:'principal',
    pathMatch:'full',
  },

  {
    path: '',
    redirectTo: 'cambio-credenciales',
    pathMatch: 'full'
  },
  {
    path:'cambio-credenciales',
    redirectTo:'cambio-credenciales',
    pathMatch:'full',
  },



  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'cambio-credenciales',
    loadChildren: () => import('./cambio-credenciales/cambio-credenciales.module').then( m => m.CambioCredencialesPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
