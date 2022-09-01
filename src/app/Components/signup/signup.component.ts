import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  submitted = false;


  constructor(private formBuilder: FormBuilder, private user: UserServiceService,
    private router: Router,) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
       role: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
       phone_no: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
       confirm_password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {

      let reqdata = {
         role: this.signupForm.value.role,
        first_name: this.signupForm.value.first_name,
        last_name: this.signupForm.value.last_name,
        phone_no: this.signupForm.value.phone_no,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
       confirm_password: this.signupForm.value.confirm_password,
      }
      this.user.registration(reqdata).subscribe((response: any) => {
        console.log(response);
         this.router.navigateByUrl("/login");
       

      }, (error: any) => {
        console.log(error);
      }
      );
    }
  }


}
