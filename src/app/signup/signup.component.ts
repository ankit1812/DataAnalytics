import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user
  constructor(private _service:AuthserviceService) { }

  ngOnInit() {

  }
signup(formdata:NgForm){
  console.log(formdata.value);
  
 let form={
   "username":formdata.value.username,
   "email":formdata.value.email,
   "password":formdata.value.password,
   "mobile":formdata.value.phone
 }
 this._service.signup(form).subscribe(res =>{
      if(res.message){
     alert('Register Confirmed');
   }
   
 });
 

}
}
