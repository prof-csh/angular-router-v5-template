import { Routes, RouterModule } from '@angular/router';
import { Users } from './users.component';
import { User } from './user.component';
import { UserCanDeactivate } from './user.canDeactivate';
import { AuthCanActivate } from './auth.canActivate';

const usersRoutes: Routes = [
  { path: 'users',
    children: [
      { path: '', component: Users },
      { path: ':id', component: User,
        canActivate: [AuthCanActivate],
        canDeactivate: [UserCanDeactivate],
        data: { key: 1 } // it has to be an object
      }
    ]
  }
];

export const UsersRouting = RouterModule.forChild(usersRoutes);