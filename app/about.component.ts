import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  template: `
    <h1>About</h1>
    <p>Magic Number: {{magicNumber}}</p>
  `
})
export class About {
  magicNumber: number;
  
  constructor(private route: ActivatedRoute){
    console.log('Called constructor');
    // resolved data available from:
    //   route.snapshot.data: any
    //   route.data: Observable<any>
    this.magicNumber = route.snapshot.data.magicNumber; 
  }
}