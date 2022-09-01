import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actionType = 'SignIn'
  isLoggedIn: boolean = false
  user: any
  @ViewChild('btnclose') closeButton: any
  constructor(private authsvc: AuthenticationService) { }

  ngOnInit(): void {
    this.getUserDetails()
  }
  handleAction() {       //New user button click then signup page displayed (new user=> btn click method)
    this.actionType = 'SignUp'
  }
  signinform() {    // when login btn click that time signin page displayed (login =>btn click method)
    this.actionType = 'SignIn'
  }
  signUpHandler(event: boolean) {  // signup selector call this method(bind with @Output property/ eventemitter object) if user fill the signup form and submit the form then redirect to login page
    if (event) {
      this.actionType = 'SignIn'
    }
  }
  signInHandler(event: boolean) {  // signin selector call this method(bind with @Output property/ eventemitter object) if the user valid and signin then signin page will close and redirect to main page or welcome page
    if (event) {
      this.closeButton.nativeElement.click()
      this.getUserDetails()
    }
  }

  getUserDetails() {
    let responseObj = this.authsvc.getUser()
    if (responseObj != null)
      this.isLoggedIn = true
    this.user = responseObj
    //     console.log("user data:=>",this.user)
  }
  logout(){
    localStorage.removeItem('user')
    this.isLoggedIn=false
    // location.reload() // url reload 
  }
}
