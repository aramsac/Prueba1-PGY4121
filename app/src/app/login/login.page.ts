import { Component, DoBootstrap, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CambioCredencialesPage } from '../cambio-credenciales/cambio-credenciales.page';
import { EjemploService } from '../services/ejemplo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // definir tipos de datos
  user : string ="";
  pass : string ="";

// 6 --> crear array
  private users: Array<any> = [
    { user: "admin", pass: "admin" },
    { user: "Apple", pass: "Red" },
    { user: "Guava", pass: "Green" },
    { user: "Strawberry", pass: "Red" }
  ];

  

  // inyeccion de dependencias 
  constructor(
    
    private router: Router,
    //private alertController: AlertController,


    // 7 importar servicio 
    private ejemploService:EjemploService
    
    
  ) 
  { }

  ngOnInit() {
  }

  // funcion para validar usuario
  inicioSeccion()
  {
    
    //recorrer array con usuario y password
    for (let index = 0; index < this.users.length; index++)
    {
      if(this.user==this.users[index]['user'] && this.pass==this.users[index]['pass']){
        this.router.navigate(['principal'])
      }else{
        console.log("user no existe")
      }      
    }
  
  }

  
  // 8 
  cambiarPass()
  {
    console.log("skdfjklsdjfksjflkdj")
    this.ejemploService.sendObjectSource(this.users);
    // navegar hacia 
    this.router.navigate(['cambio-credenciales'])
  }

}
