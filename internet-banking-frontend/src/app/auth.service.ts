import { Injectable } from '@angular/core';

import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class AuthService {

  private serverUrl  = "api/oauth/token";
  private headers = new Headers(
      {'Content-Type': 'application/x-www-form-urlencoded'}
  );
  private currentUser : User ;

  constructor(private httpClient: Http) { }

  sudahLogin() : boolean {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if(this.currentUser){
          console.log("Username : "+this.currentUser.username);
          console.log("Token : "+this.currentUser.token);
      }
      return this.currentUser != null;
  }

  getCurrentUser(){
      if(this.sudahLogin()){
          return this.currentUser;
      }
      return null;
  }

  login(username : string, password : string) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('client_id', "internetbanking");
       params.set('grant_type', "password");
        params.set('username', username);
         params.set('password', password);
      this.headers.append("Authorization", "Basic aW50ZXJuZXRiYW5raW5nOjEyMzQ1Ng==");


      this.httpClient.post(this.serverUrl, null, {headers: this.headers, search: params})
      .toPromise()
      .then(hasil =>  {
          let token = hasil.json().access_token;
          console.log("Access Token : "+token);
          if(token){
              this.currentUser = new User(username, token);
              localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
          }
      })
      .catch(error => console.log("Error : "+error))
      ;
  }

}
