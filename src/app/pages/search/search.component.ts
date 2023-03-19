import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    movieName: new FormControl(''),
  });

  searchResults: any = [];

  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit(): void {}

  submitForm() {
    this.movieService.getSearchMovie(this.searchForm.value).subscribe((res) => {
      this.searchResults = res.results;
    });
  }
}
