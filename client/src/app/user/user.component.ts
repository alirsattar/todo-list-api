import { Component, OnInit } from '@angular/core';
import { User2Service } from '../services/user2.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService: User2Service) {}

  formInput:any = {};

  theReturnedUser:any = {};

  loginInput:any = {};

  errorMessage:any = {};

  // theError:any = {};

  tryToSignUp(){
    // console.log(this.formInput);
    this.authService.signup(this.formInput)
      .subscribe((res)=>{this.successCallback(res)},(error)=>{this.errorCallback(error)})
  }
  tryToLogIn(){
    // console.log(this.loginInput);
    this.authService.login(this.loginInput)
      .subscribe((res)=>{ this.successCallback(res) },(error)=> this.errorCallback(error))
  }
  tryToLogOut(){
    this.authService.logout()
      .subscribe((res)=>{this.theReturnedUser = {};}, (error)=>{this.errorMessage = error})
  }
  checkLogin(){
    this.authService.isLoggedIn()
      .subscribe((res)=>{this.errorMessage = res}, (error)=>{this.errorMessage = null})
  }
  successCallback(userObj){
    this.theReturnedUser = userObj;
    this.errorMessage = null;
  }
  errorCallback(errorObj){
    this.theReturnedUser = errorObj;
    this.errorMessage = {};
  }
  ngOnInit() {
    this.checkLogin();
  }

}
