import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Home } from './home.component';
import { About } from './about.component';
import { Banner } from './banner.component';
import { NotFound } from './notfound.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', loadChildren: './about.module.ts#AboutModule' }, 
  { path: 'banner', component: Banner, outlet: 'bottom' },
  { path: '**', component: NotFound }, //always last
];

export const AppRouting = RouterModule.forRoot(appRoutes, { 
  useHash: true,
  preloadingStrategy: PreloadAllModules
});