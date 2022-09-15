export class Anime {
  public id: number;
  public title: string;
  public description: string;
  public author: string;

  constructor(id: number, title: string, description: string, author: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }

  // constructor(
  //   public id: number,
  //   public title: string,
  //   public descritpion: string,
  //   public author: string
  // ) {}

}
