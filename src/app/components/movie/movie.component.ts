import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent{
  
  movie: any;
  backTo: string = "";
  search: string = "";

  constructor(private _ms: MoviesService, public actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe( params => {
      
      this.backTo = params['pag'];

      this._ms.getMovie(params['id'])
        .subscribe(movie => this.movie = movie);

    });
  }
}
