import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  anime: Anime | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _animeService: AnimeService
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this.anime = this._animeService.getOne(parseInt(id));
    // Si anime pas existant dans la db redirige vers la page 404
    if(this.anime === undefined) {
      this._router.navigate(['/404']);
    }
  }

}
