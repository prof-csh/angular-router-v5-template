import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRouting } from './about.routing';
import { About } from './about.component';
import { AboutResolver } from './about.resolver';

console.log('* AboutModule Loaded *')

@NgModule({
  imports: [
    CommonModule,
    AboutRouting,
  ],
  declarations: [
    About
  ],
  providers: [
    AboutResolver
  ]
})
export class AboutModule { }