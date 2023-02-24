import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model:User= new User();
  constructor(private accountService:AccountService){}
  ngOnInit(): void {

  }
  login(form:NgForm){
    this.accountService.login(this.model)
  }


  isLoggedIn(){
      return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }

}
