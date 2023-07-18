import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: [ 
      '',     //Valor predeterminado del campo
     [        //Validaciones
       Validators.required,
       Validators.email
     ]
    ],
    password:[
      '',
      [   //Validaciones
        Validators.required,
        Validators.minLength( 8 )
      ]
    ]
  });

/*Inyeccion de dependencias*/ 
  constructor( private fb: FormBuilder ) {}

  /**Login */
  login(){
    console.group ( 'loginForm' );
    console.info( this.loginForm.value );
    console.info( this.loginForm.valid );
    
    console.groupEnd();  
  }
}
