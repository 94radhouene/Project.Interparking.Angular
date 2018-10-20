import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAdminService } from './services/register-admin.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    // variable
    registerForm: FormGroup;
    submitted = false;
    // Initialize admin
    admins:any[];
    admin={
        nomAdmin: '',
        workInterparking: '',
        password: '',
        isSuper: 1
     }
    // Initialize the form
    constructor(private formBuilder: FormBuilder, 
                public dataService:RegisterAdminService, 
                private toastr: ToastrService,
                private router: Router) { }
    // Form validate
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nomAdmin: ['', Validators.required],
            workInterparking: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
            
        });
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    // submit forms
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else{
            this.dataService.addAdmin(this.admin).subscribe(
                res => {
                    // Condition 0 : success
                    if(res.status == 0){
                        this.toastr.success('Hello!', 'In Interparking!');
                        this.router.navigate(['/login']);
                        
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