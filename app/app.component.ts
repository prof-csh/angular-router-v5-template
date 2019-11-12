import { Component } from '@angular/core';
import { Router, RouterEvent, ActivationStart, ActivationEnd, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd } from '@angular/router';
import { LoginService } from './login.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['home']">Logo</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ng-controller="HeaderController as header">
          <ul class="nav navbar-nav">
            <li routerLinkActive="active">
              <a [routerLink]="['home']">Home</a>
            </li>
            <li routerLinkActive="active" *ngIf="loginService.authorised">
              <a [routerLink]="['users']">Users</a>
            </li>
            <li routerLinkActive="active">
              <a [routerLink]="['about']">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid slide">
      <router-outlet></router-outlet>
      <router-outlet name="bottom"></router-outlet>
    </div>
  `
})
export class AppComponent { 
  constructor(private loginService: LoginService, private router: Router) {
    // listen to ActivationStart/End events
    /*
    router.events
      .filter(e => e instanceof ActivationStart || e instanceof ActivationEnd)
        .subscribe(e => console.log(e.toString()));
    */
    
    // listen to a specific url
    /*
    router.events
      //.filter(e => e instanceof RouterEvent)
      //.filter(e => e.url == '/about')
      //.distinctUntilChanged((e1, e2) => e1.id == e2.id && e1.url == e2.url )
        .subscribe(e => {
          console.log(e.id, e.url);
    }); 
    */
    
    // listen to specific GuardsCheckStart/End and ResolveStart/End
    /*
    router.events
      .filter(e => e instanceof GuardsCheckStart || e instanceof GuardsCheckEnd || e instanceof ResolveStart || e instanceof ResolveEnd)
        .subscribe(e => console.log(e.toString()));
        */
    
  }
}