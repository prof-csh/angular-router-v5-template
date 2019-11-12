import { Routes, RouterModule } from '@angular/router';
import { About } from './about.component';
import { AboutResolver } from './about.resolver';

const aboutRoutes: Routes = [
  { path: '', component: About, resolve: { magicNumber: AboutResolver } },
];

export const AboutRouting = RouterModule.forChild(aboutRoutes);