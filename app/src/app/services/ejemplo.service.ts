import { Injectable } from '@angular/core';

// 1 .- BehaviorSubject --> permite la transmisión múltiple de valores a muchos observadores simultáneos
import { BehaviorSubject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

// 2 .- Crear variable privada 
// <{}> indica que sera un objeto --> ({})indica que sera un objeto vacio
private objectSource = new BehaviorSubject<{}>({})

private listSource = new BehaviorSubject<[]>([])

// 3 .- crear variable que nos dara acceso a objectSource
// asObservable() --> propósito de esto es evitar que se filtre el "lado del observador" del Sujeto fuera de una API.
$getObjectSource = this.objectSource.asObservable();
$getListSource = this.listSource.asObservable();



  constructor() { }

  //4 .- un metodo para poder enviarle valores a objectSource
  sendObjectSource(data:any){
    this.objectSource.next(data)
  }

  sendListSource(list:any){
    this.listSource.next(list)
  }

}
