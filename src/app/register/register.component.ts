import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  stud_fname : string="";
  stud_lname : string="";
  stud_email :string ="";
  stud_pswd :string ="";

  constructor (private route :Router,private ds:DataService){}
  register(){
    if(!this.stud_fname && !this.stud_lname && !this.stud_email && !this.stud_pswd){
      alert("plese fill the form")
    }
    else{
      this.ds.ds_email=this.stud_email;
      this.ds.ds_name=this.stud_fname

      alert("Register success")
      this.route.navigateByUrl('login')
    }
  }

}
