import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

StudentName:string="Anu"
StudentAge:any='18'
StudentEmail:any='anu@gmail.com'
StudentCourse:string="Computer"
StudentStatus:String="Active"

StudentUrl:string="https://gifdb.com/images/high/teacher-asking-question-mark-clipart-ldxn7axzw9sj41fp.gif"

s_email:string="";
s_name:string="";

viewTrainerStatus:boolean = false;

paymentStatus:string="Unpaid"

constructor(private ds:DataService){
  this.s_email = this.ds.ds_email;
  this.s_name = this.ds.ds_name;
}


trainers_Details :any=[
  {id:12,name:"Sabir",course:"Big data",duration:"8 months"},
  {id:13,name:"Rugma",course:"Testing",duration:"6 months"},
  {id:14,name:"Soniya",course:"MEARN",duration:"6 months"},
  {id:15,name:"Sajay",course:"Python",duration:"6 months"},
  {id:16,name:"Prajeesha",course:"Data Science",duration:"8 months"},

]

AddStudent=()=>{
  alert("student added successfully");
}
getStudentname=(event:any)=>{
  console.log(event.target.value);
}
UserName(username:any){
  console.log(username.value);
  alert(`${username.value} added`)
  
}

btnclick(){
this.viewTrainerStatus=!this.viewTrainerStatus;
}

}
