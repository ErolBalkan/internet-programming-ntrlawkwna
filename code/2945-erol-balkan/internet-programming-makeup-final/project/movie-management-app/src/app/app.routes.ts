import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CastCreateComponent } from './cast-create/cast-create.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'create', component: MovieCreateComponent },
  { path: 'actor/:id', component: ActorDetailsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cast-create', component: CastCreateComponent },
];
