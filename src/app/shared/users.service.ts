import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

const URL = 'https://wind-bow.glitch.me/twitch-api';
const STREAM = 'https://api.twitch.tv/kraken/streams';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getFreeCodeCamp() {
    return this.http.get(`${URL}/users/freecodecamp`)
      .pipe(map(res => res.json()));
  }

  getFreeCodeStream() {
    const id = 79776140;

    return this.http.get(`${STREAM}/kraken/streams/${id}`)
      .pipe(map(res => res.json()));
  }

  getCretetion() {
    return this.http.get(`${URL}/users/cretetion`)
      .pipe(map(res => res.json()));
  }

  getNoobs() {
    return this.http.get(`${URL}/users/noobs2ninjas`)
      .pipe(map(res => res.json()));
  }

  getCaleb() {
    return this.http.get(`${URL}/users/RobotCaleb`)
      .pipe(map(res => res.json()));
  }
}
