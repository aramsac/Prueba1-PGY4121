import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { EjemploService } from '../services/ejemplo.service';

@Component({
  selector: 'app-cambio-credenciales',
  templateUrl: './cambio-credenciales.page.html',
  styleUrls: ['./cambio-credenciales.page.scss'],
})
export class CambioCredencialesPage implements OnInit {

  users:any;
  user:string="";
  nuevaPass:string="";
  
  constructor(

    // 10 
    private ejemploServicie :EjemploService,
  ) { 

  }


  ngOnInit() {
    this.ejemploServicie.$getObjectSource.subscribe(data =>{
      console.log(data);
      this.users = data;
      
      
    }).unsubscribe();
    
  }

//d = this.ejemploServicie.$getObjectSource.subscribe(data =>console.log(data))
  cambiarClave(){
    
    for (let index = 0; index < this.users.length; index++)
    {
      if(this.user==this.users[index]['user']){
      
        this.users[index]['pass']= this.nuevaPass;
        console.log(this.users[index])
      }else{
        console.log("user no existe")
      }      
    }
    
  }
}
