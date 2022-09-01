import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService,
    private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.token);

        // this.snackbar.open('Login succesful ', '', {
        //   duration: 2000,
        // });

        this.router.navigateByUrl('/dashboard')
        
       
      }, (error: any) => {
        console.log(error);
       
      }
      );


    }

  }
}
