import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    
  private apikey: string = "";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  movies: any[] = [];

  constructor(private jsonp: HttpClientJsonpModule,
              private http: HttpClient) { }
      
      getInTheatres(){
        let actualDate = new Date();
        let finalDate = new Date();
        finalDate.setDate( finalDate.getDate() + 7);

        let actualDateStr = `${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDate()}`;
        let finalDateStr = `${finalDate.getFullYear()}-${finalDate.getMonth() + 1}-${finalDate.getDate()}`;
        
        let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${actualDateStr}&primary_release_date.lte=${finalDateStr}&sort_by=popularity.desc&api_key=${ this.apikey }`

        return this.http.jsonp(url,'callback')
      }

      getPopulars(){
        
        let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }`;
        return this.http.jsonp(url,'callback')
      }

      getKidsPopulars(){
        let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }`;
        return this.http.jsonp(url,'callback')
      }
    
      searchMovie( text:string ){
    
        let url = `${ this.urlMoviedb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apikey}`;
    
        return this.http.jsonp(url,'callback')
          .pipe( map( (resp:any) => {
             this.movies = resp.results;
             
             return resp;
          }));
      }

      getMovie(id: string){
        let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }`;
        return this.http.jsonp(url,'callback');
      }
}
