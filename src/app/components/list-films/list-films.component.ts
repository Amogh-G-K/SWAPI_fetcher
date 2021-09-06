import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SwapiService } from 'src/app/services/swapi.service';
import { Films } from 'src/app/swapiInterface';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit {
  @Input() flm!: Films;
  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {}
}
