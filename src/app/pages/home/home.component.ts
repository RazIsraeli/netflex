import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannerResults: any = [];
  trendingMoviesResult: any = [];

  actionMovies: any = [];
  adventureMovies: any = [];
  animationMovies: any = [];
  comedyMovies: any = [];
  documentaryMovies: any = [];
  scienceFictionMovies: any = [];
  thrillerMovies: any = [];

  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.treningData();
    this.getAllMovieByGenre();
  }

  bannerData() {
    this.movieService.bannerApiData().subscribe((res) => {
      this.bannerResults = res.results;
    });
  }

  treningData() {
    this.movieService.trendingMoviesApiData().subscribe(({ results }) => {
      this.trendingMoviesResult = results;
    });
  }

  getAllMovieByGenre() {
    this.getActionMovies();
    this.getAdventureMovies();
    this.getAnimationMovies();
    this.getComedyMovies();
    this.getDocumentaryMovies();
    this.getScienceFictionMovies();
    this.getThrillerMovies();
  }

  getActionMovies() {
    this.movieService.getActionMovies().subscribe(({ results }) => {
      this.actionMovies = results;
    });
  }

  getAdventureMovies() {
    this.movieService.getAdventureMovies().subscribe(({ results }) => {
      this.adventureMovies = results;
    });
  }

  getAnimationMovies() {
    this.movieService.getAnimationMovies().subscribe(({ results }) => {
      this.animationMovies = results;
    });
  }

  getComedyMovies() {
    this.movieService.getComedyMovies().subscribe(({ results }) => {
      this.comedyMovies = results;
    });
  }

  getDocumentaryMovies() {
    this.movieService.getDocumentaryMovies().subscribe(({ results }) => {
      this.documentaryMovies = results;
    });
  }

  getScienceFictionMovies() {
    this.movieService.getScienceFictionMovies().subscribe(({ results }) => {
      this.scienceFictionMovies = results;
    });
  }

  getThrillerMovies() {
    this.movieService.getThrillerMovies().subscribe(({ results }) => {
      this.thrillerMovies = results;
    });
  }
}
