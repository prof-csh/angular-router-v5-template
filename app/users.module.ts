import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }  from '@angular/http';
import { UsersRouting } from './users.routing';

import { Users } from './users.component';
import { User } from './user.component';

import { UsersService } from './users.service';
import { UserCanDeactivate } from './user.canDeactivate';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    UsersRouting,
  ],
  declarations: [
    Users,
    User
  ],
  providers: [
    UsersService,
    UserCanDeactivate
  ]
})
export class UsersModule { }