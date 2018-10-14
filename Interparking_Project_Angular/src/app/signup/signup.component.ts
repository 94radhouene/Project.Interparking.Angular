import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    // Initialize the form
    constructor(private formBuilder: FormBuilder) { }
    // Form validate
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            NomAdmin: ['', Validators.required],
            WorkInterparking: ['', [Validators.required]],
            Password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    }
}
