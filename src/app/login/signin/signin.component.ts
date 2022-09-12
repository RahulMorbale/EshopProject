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
      // "email": ['', [Validators.required]],
      "email": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      "password": ['', [Validators.required]],
      "isFormAccept": ['', [Validators.required]]
    })
  }
  signIn() {
    console.log(this.signInForm.value)
    // let value=this.signInForm.value
    if (this.signInForm.valid) {
      this.loginservice.authLogin(this.signInForm.value).subscribe((res: any) => {
        console.log(res)
        if (Array.isArray(res) && res.length > 0) {
          console.log("after if",res)
          let user = res[0]
          console.log("user data signIn", user);
          // user['token'] = "abcdef12345abcdef"
          localStorage.setItem("user", JSON.stringify(user))
          console.log(" after localstorage set", user)
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


    
      // if(this.signInForm.valid){
      //  this.loginservice.authLogin(this.signInForm.value).subscribe(el => {
      //    if(Array.isArray(el) && el.length > 0){
      //      let user = el[0];
      //      console.log(" user data sign in  ",el)
      //     //  user['token'] = "gjhgjjggjghg1233445512";
      //      localStorage.setItem("user",JSON.stringify(user));
      //      this.signInCompleted.emit(true);
      //      this.toaster.success("log in successful")
      //    }else {
      //      this.toaster.error("User doesn't exist please go ahead and register");
      //    }
      //  })
      // }
     

  }

  get email() {
    return this.signInForm.get('email')
  }
  get password() {
    return this.signInForm.get('password')
  }
}
