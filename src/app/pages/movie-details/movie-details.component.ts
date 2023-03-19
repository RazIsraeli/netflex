import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  movieVideo: any;
  movieCast: any;

  constructor(
    private movieService: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let movieId = this.router.snapshot.paramMap.get('id')!;
    this.getMovie(movieId);
    this.getVideo(movieId);
    this.getCast(movieId);
  }

  getMovie(id: number | string) {
    this.movieService.getMovieDetails(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  getVideo(id: number | string) {
    this.movieService.getMovieVideo(id).subscribe((videos) => {
      videos.results.forEach((video: any) => {
        if (video.type === 'Trailer') {
          this.movieVideo = video.key;
        }
      });
    });
  }

  getCast(id: number | string) {
    this.movieService.getMovieCast(id).subscribe((castAndCrew) => {
      this.movieCast = castAndCrew.cast;
    });
  }
}
