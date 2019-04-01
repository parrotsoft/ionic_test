import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.parseInitialize();
  }

  private parseInitialize() {
    Parse.initialize(environment.parse.app_id, environment.parse.js_key);
    Parse.serverURL = environment.parse.serve_url;
  }

  login(username: string, password: string) {
    Parse.User.logIn(username, password).then((resp) => {
      return true;
    }).catch((error) => {
      return false;
    });
  }

}
