import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
 
Injectable()
export class UserCanDeactivate implements CanDeactivate {
  canDeactivate() {
    return window.confirm('Do you want to continue?');
  }
}