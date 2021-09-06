import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Films } from 'src/app/swapiInterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public films!: Films;
  search = 'abc';

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getFilms().subscribe((film) => {
      console.log(film);
      this.films = film;
      console.log(this.films[0].title);
    });
  }
}
