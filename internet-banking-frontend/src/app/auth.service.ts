import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class AuthService {

  private currentUser : User ;

  constructor() { }

  sudahLogin() : boolean {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if(this.currentUser){
          console.log("Username : "+this.currentUser.username);
          console.log("Token : "+this.currentUser.token);
      }
      return this.currentUser != null;
  }

  login(username : string, password : string) {
      this.currentUser = new User(username, password);
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  }

}
