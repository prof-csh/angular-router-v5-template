import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';
 
@Component({
  selector: 'user-details',
  template: `
    <h1>User Details</h1>
    <div class="loader loader--style1" title="Loading..." *ngIf="loading">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
      <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
      <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
        C22.32,8.481,24.301,9.057,26.013,10.047z">
        <animateTransform attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
    <div class="user-details" *ngFor="let user of users | async">
      <p>Id: {{user.id}}</p>
      <p>Username: {{user.username}}</p>
      <p>Roles: {{user.roles.join(', ')}}</p>
      <p>CONFIDENTIAL INFORMATION</p>
      <a [routerLink]="['/users']">Back</a>
    </div>
  `
})
export class User implements OnInit { 
  loading = true;
  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router){
  }
  
  ngOnInit() {
    // active url
    console.log(this.router.url);
    
    // hash fragment:
    //   router.routerState.snapshot.root.fragment : {string:any}
    //   router.routerState.root.fragment : Observable<{string:any}>
    this.router.routerState.root.fragment.subscribe(p => console.log(p));
    
    // queryParams:
    //   router.routerState.snapshot.root.queryParams : {string:any}
    //   router.routerState.root.queryParams : Observable<{string:any}>
    this.router.routerState.root.queryParams.subscribe(p => console.log(p));
    
    // data:
    //   route.snapshot.data : {string:any}
    //   route.data : Observable<{string:any}>
    this.route.data.subscribe(data => console.log(data));
    
    // params:
    //   route.snapshot.params : {string:any}
    //   route.params : Observable<{string:any}>
    this.route.params.subscribe(params => {
      let id = params.id;
      let flag = params.flag;
      // parameters that don't match are added to the url and accessible
      // Eg: ['user', 34, {flag: true}] becomes #/user/34;flag=true
      if (flag) console.log('flag: ' + flag); 
      this.users = this.service.get()
        .map(users => { 
          this.loading = false;
          return users.filter(u => { 
            return u.id == id;
          })
        });
    });  
  }
}