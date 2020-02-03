import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  inTheater: any;
  populars : any;
  kidsPopulars: any;

  constructor(public _ms: MoviesService) { 
    this._ms.getInTheatres()
      .subscribe( (data: any) => {
        this.inTheater = data.results;
      });

      this._ms.getPopulars()
      .subscribe( (data: any) => {
        this.populars = data.results;
      });

      this._ms.getKidsPopulars()
      .subscribe((data: any) => {
        this.kidsPopulars = data.results;
      });
  }

  ngOnInit() {
  }

}
