import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _login:AuthserviceService) { }

  ngOnInit() {
  }
onLogin(form:NgForm){
  console.log(form.value);
  
  this._login.login(form.value).subscribe(res =>{
    console.log(res);
    
    if(res.status ==1){
      this.router.navigate(['projects']);
    }
    if(res.status==0){
      alert(res.message);
    }
  });
}
}
