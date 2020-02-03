import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  searchMovie(term: string){
    if(term.length === 0){
      return;
    }
    console.log(term);
    this.router.navigate(['search', term]);
  }
}
