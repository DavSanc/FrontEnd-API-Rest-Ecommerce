import { Component } from "@angular/core";


@Component( {
    selector: 'como-quiero',          //  app-saludo
    templateUrl: './saludo.component.html' ,
    styleUrls: [ "./saludo.component.css" ]
} )
export class Saludo { 
    saludo = 'Hola mundo desde Angular ';
 }              //SaludoComponent