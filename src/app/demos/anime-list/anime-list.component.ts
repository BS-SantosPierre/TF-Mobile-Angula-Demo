import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = this._animeService.getAll();

  constructor(private _animeService: AnimeService) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this._animeService.delete(id);
  }

}
