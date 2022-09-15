import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

export type DataDto = {
  title: string;
  description: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private _animeList: Anime[] = [
    new Anime(1, 'One Piece', 'Je serais le roi des pirates', 'Oda'),
    new Anime(2, 'One Punch Man', 'Je suis le chauve à la cape rouge', 'One')
  ];

  private _currentId = 2;

  constructor() { }

  addAnime(title: string, description: string, author: string) {
    // Incrémentation de  l'id
    this._currentId++;
    // Création de mon nouvel objet
    const newAnime = new Anime(this._currentId, title, description, author);
    // Insertion du nouvelle objet dans la base de donnée (fake)
    this._animeList.push(newAnime);
  }

  addAnime2(data: DataDto) {
    this._currentId++;

    this._animeList.push({
      id: this._currentId,
      ...data
    });
  }

  // Récupérer mon tableau d'anime
  getAll() {
    return this._animeList;
  }

  // Récupére un anime
  getOne(id: number) {
    const anime = this._animeList.find((animeElement) => {
      return animeElement.id === id;
    })
    return anime;
  }

  // Update anime
  update(id: number, data:DataDto) {
    // Récupérer l'index de l'élément a modifié
    const animeIndex = this._animeList.findIndex((anime) => {
      return anime.id === id;
    });

    // Element existe ?
    if (animeIndex === -1) {
      console.log('Anime does not exist');
      return;
    }

    // Créer un anime avec les modifications
    const updatedAnime = new Anime(id, data.title, data.description, data.author);

    // Suppresion de l'élément, puis réinsertion
    this._animeList.splice(animeIndex, 1, updatedAnime);

    // this._animeList[animeIndex] = {...this._animeList[animeIndex], ...data};
    // this._animeList[animeIndex].title = data.title;
    // this._animeList[animeIndex].description = data.description;
    // this._animeList[animeIndex].author = data.author;
  }

  delete(id : number) {
    // Récupérer l'index de l'élément a supprimer
    const animeIndex = this._animeList.findIndex((anime) => {
      return anime.id === id;
    })

    if (animeIndex === -1) {
      console.log('Anime does not exist');
      return;
    }

    this._animeList.splice(animeIndex, 1);
  }
}
