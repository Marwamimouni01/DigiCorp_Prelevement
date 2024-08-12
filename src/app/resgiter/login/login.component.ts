import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  response:any
  msgAlert:any=''
  loader:any=false
  res:any
  constructor(private fb: FormBuilder,private router:Router, private loginService : LoginService,private http:HttpClient) {
    this.createForm();
  
   }

  ngOnInit(): void {
    localStorage.removeItem("tiersClient")
    localStorage.setItem("ret","");
    localStorage.clear()
    this.f?.['login'].setValue("");
    this.f?.['pwd'].setValue("");

  }

  login()
  {
    this.loader=true
    localStorage.setItem("cuser",this.f?.['login'].value);
    localStorage.setItem("istrue","true");

this.Authenticate();


  }
  createForm() {
    this.LoginForm = this.fb.group({
      login: ['', Validators.required],
      pwd: ['', Validators.required]

    })
  }
  get f() { return this.LoginForm.controls; }

  Authenticate(){
    this.router.navigate(['home']);
 
  }




  
  FermerAlert() {
    document.getElementById("alertPop")?.setAttribute("class", "modal fade  hide")

  }

}
