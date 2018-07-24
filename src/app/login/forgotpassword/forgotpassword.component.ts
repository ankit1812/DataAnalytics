import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../authservice.service';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private _forgot:AuthserviceService,private _router:Router) { }

  ngOnInit() {
  }

Forgot(data:NgForm){
console.log(data.value);
this._forgot.forgotPassword(data.value).subscribe((res)=>{
  console.log(res);
  if(res.status==1){
alert(res.message);
this._router.navigate(['/']);

  }
  
});
}
}
