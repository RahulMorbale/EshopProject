import { AuthenticationService } from './../../core/authentication/authentication.service';
import { HttpService } from './../../core/http/http.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../sevices/login.service';
import { passwordMisMatch } from 'src/app/shared/Validator/custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  user: any
  @Input() actionName: string = ''
  // @Output() signUpCompleted: EventEmitter<boolean> = new EventEmitter()
  @Output() signUpCompleted = new EventEmitter<boolean>()
  constructor(private fb: FormBuilder, private loginservice: LoginService, private http: HttpService, private authservice: AuthenticationService) { }
  ngOnInit(): void {
    this.createFormStructure()
    this.user = this.authservice.getUser()
    if (this.user != null){
      this.signUpForm.patchValue(this.user)
    }
  }
  createFormStructure() {
    this.signUpForm = this.fb.group({
      "firstName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')]],
      "lastName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')]],
      "mobileNumber": ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      "dateOfBirth": ['', []],
      "emailId": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      "password": ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      "confirmPassword": ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      "isFormAccept": [false, [Validators.required]],
      "address": this.fb.group({
        "line1": ['', []],
        "line2": ['', []],
        "city": ['', []],
        "state": ['', []],
        "zipCode": ['', []],
      })
    }, { validators: passwordMisMatch })
  }

  onFormSubmit() {
    if (this.signUpForm.valid) {
      //post call from login service in 'user' array inside db.json file using fake json 
      this.loginservice.registerUser(this.signUpForm.value).subscribe((res) => {
        console.log("response post data => ", res)
        this.signUpCompleted.emit(true)
      })
      //   this.http.postdata('users',this.signUpForm.value).subscribe((res)=>{
      //     console.log("response",res)
      //   })
    }
    console.log("data", this.signUpForm)
  }

  showpage = {
    "firstName": "",
    "lastName": "",
    "mobileNumber": null,
    "dateOfBirth": "",
    "emailId": "",
    "password": "",
    "confirmPassword": "",
    "address": {
      "line1": "",
      "line2": "",
      "city": "",
      "state": "",
      "zipCode": null,
    }
  }
  // In a reactive form, you can always access any form control through the get method on its parent group,
  //  but sometimes it's useful to define getters as shorthand for the template.
  get FirstName() {
    return this.signUpForm.get('firstName')
  }
  get LastName() {
    return this.signUpForm.get('lastName')
  }
  get Mobile() {
    return this.signUpForm.get('mobileNumber')
  }
  get DOB() {
    return this.signUpForm.get('dateOfBirth')
  }
  get email() {
    return this.signUpForm.get('emailId')
  }
  get password() {
    return this.signUpForm.get('password')
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')
  }
}
