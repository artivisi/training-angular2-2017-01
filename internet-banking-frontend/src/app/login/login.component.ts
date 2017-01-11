import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username : string;
  private password : string;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  login(){
      console.log("Username : "+this.username);
      console.log("Password : "+this.password);
      this.authService.login(this.username, this.password);
  }

}
