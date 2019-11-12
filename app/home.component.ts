import { Component } from '@angular/core';
import { LoginService } from './login.service';
 
@Component({
  selector: 'home',
  template: `
    <h1>Home</h1>
    <div class="onoffswitch">
        <input #switch type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" [checked]="loginService.authorised" (click)="change(switch.checked)">
        <label class="onoffswitch-label" for="myonoffswitch"></label>
    </div>
    <p>Logged: <span>{{loginService.authorised?'Yes':'No'}}</span></p>
    <div *ngIf="loginService.authorised">
      <a href="#/users/34">Today's best superheroe</a><br/>
      <pre>&lt;a href=&quot;#/users/34&quot;&gt;Today's best superheroe&lt;/a&gt;</pre>
      <a [routerLink]="['/users', 34, {flag: true}]" [queryParams]="{q: 1}">Today's best superheroe</a>
      <pre>&#x3C;a [routerLink]=&#x22;[&#x27;/users&#x27;, 34, &#123;flag: true&#125;]&#x22; [queryParams]=&#x22;&#123;q: 1&#125;&#x22;&#x3E;Today&#x27;s best superheroe&#x3C;/a&#x3E;</pre>
    </div>
  `
})
export class Home { 
  constructor(private loginService:LoginService) { }
  
  change(checked){
    this.loginService.authorise(checked);
  }
}