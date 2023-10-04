import Post from './Post';

export default class Movie implements Post {
  constructor(
    readonly title: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly duration: string,
  ) {
    this.title = title;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.duration = duration;
  }
}
