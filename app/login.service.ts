import { Injectable } from '@angular/core';
 
@Injectable()
export class LoginService {
  authorised = false;
  
  authorise(value) {
    this.authorised = value;
  }
}