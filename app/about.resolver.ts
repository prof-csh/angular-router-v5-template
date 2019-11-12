import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class AboutResolver implements Resolve {
  resolve() {
    console.log('Waiting to resolve...');
    return new Promise(resolve => setTimeout(() => resolve(4545), 2000));
  }
}