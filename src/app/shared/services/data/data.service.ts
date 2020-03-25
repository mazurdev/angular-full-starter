// core
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
// utils
import {environment} from '@environments/environment';
import {HomeInterface} from '@models/home.interface';

@Injectable()
export class DataService {

  private readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getHomeInfo(): Observable<HomeInterface[]> {
    return this.http.get<HomeInterface[]>(`${this.apiUrl}home.json`);
  }

}
