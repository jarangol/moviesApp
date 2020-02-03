import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{
  
  search: string = "";

  constructor(private _ms: MoviesService, public actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe( params => {
      if(params['term']){
        this.search = params['term'];
        this.searchMovie();
      }
    });
  } 
            

  searchMovie(){
    if(this.search.length === 0){
      return;
    }

    this._ms.searchMovie(this.search).subscribe();
  }

}
