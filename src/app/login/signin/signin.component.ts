import { LoginService } from './../sevices/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder, private loginservice: LoginService, private toaster: ToastrService) { }
  @Output() signInCompleted = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm() {
    this.signInForm = this.fb.group({
      "email": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      "password": ['', [Validators.required]],
      "isFormAccept": ['', [Validators.required]]
    })
  }
  signIn() {
    if (this.signInForm.valid) {
      this.loginservice.authLogin(this.signInForm.value).subscribe(res=> {
        console.log(res)
        if (Array.isArray(res) && res.length > 0) {
          console.log("after if",res)
          let user = res[0]
          console.log("user data",user);
          
          user['token'] = "abcdef12345abcdef"
          localStorage.setItem("user",JSON.stringify(user) )
          // console.log(user)
          this.signInCompleted.emit(true)
          this.toaster.success("Log in Successfull")
          this.signInForm.reset()
        } else {
          this.toaster.error("User Doesn't exist please register")
        }
      }, error => {
      })
    } else {
      this.toaster.error("Please enter username and password")
    }
  }


  get email() {
    return this.signInForm.get('email')
  }
  get password() {
    return this.signInForm.get('password')
  }
}
