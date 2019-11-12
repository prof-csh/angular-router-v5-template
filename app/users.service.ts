import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';

interface User {
  id: number;
  username: string;
  roles: Array<string>;
  superuser?: boolean;  
}

interface UsersResponse {
  users: Array<User>;
}

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }
  
  get(){
    return this.http.get<UsersResponse>('https://gist.githubusercontent.com/gsans/a85f14f67836840d11cf96459d6c4216/raw/03ebe48e649a6491b5f94d861301035669e5621d/users.json')
      .delay(1000)
      .map(response => response.users)
      .retryWhen(errors => errors.delay(2000));
  }
}