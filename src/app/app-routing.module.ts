import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [  
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:term', component: SearchComponent},
  {path: 'movie/:id/:pag', component: MovieComponent},
  {path: 'movie/:id/:pag/:term', component: MovieComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
