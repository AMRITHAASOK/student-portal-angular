import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

stud_email :string ="";
stud_pswd :string ="";

//dependency injection - access specifier var_name : class_name 
constructor(private route:Router){}

login(){
  if(this.stud_email && this.stud_pswd){
    alert("login successful")
    //navigated to dashboard
    this.route.navigateByUrl('dashboard')
  }
  else{
    alert("Please fill the form")
  }

}

}
