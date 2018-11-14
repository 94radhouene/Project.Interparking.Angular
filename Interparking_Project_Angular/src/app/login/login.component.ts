import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  // variable
  loginForm: FormGroup;
  submitted = false;
  // Initialize admin
  admins:any[];
  admin={
      nomAdmin: '',
      password: '',
   }
  // Initialize the form
  constructor(private formBuilder: FormBuilder, 
              public dataService:LoginService, 
              private toastr: ToastrService,
              private router: Router) { }
  // Form validate
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          nomAdmin: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
      
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // submit forms
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      else{
          this.dataService.loginadmin(this.admin).subscribe(
              res => {
                  // Condition 0 : success
                  if(res.status == 0){
                     // this.router.navigate(['/dashboard']);
                        //this.authService.authLogin(this.model);
                    localStorage.setItem('isLoggedIn', "true");
                    localStorage.setItem('nomAdmin', this.admin.nomAdmin);
                    console.log('success');
                    console.log(localStorage.getItem('nomAdmin'));
                    this.router.navigate(['/dashboard']);
                    console.log(localStorage.getItem('nomAdmin'));
                  }
                  else{
                      this.toastr.error(res.message);
                  }
               
                ;
              }
          );
  }
  
}
}