import { RouterModule, Routes } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { ProgrammingComponent } from './programming/programming.component';
import { PlayerComponent } from './player/player.component';

const ROUTES:Routes = [
  {
    path: '',
    redirectTo: 'live',
    pathMatch: 'full'
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'programming',
    component: ProgrammingComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  }
];

export const ROUTING = RouterModule.forRoot(ROUTES);