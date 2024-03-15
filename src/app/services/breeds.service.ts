import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { BreedResponse } from '../interfaces/breedsResponse';
import { Breeds } from '../interfaces/breeds.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Facts } from '../interfaces/facts.interface';
import { FactsResponse } from '../interfaces/factsResponse';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<BreedResponse>{
    return this.http.get<BreedResponse>(`${environment.apiUrl}/breeds`);
  }


  getRandomFacts(limit: number):Observable<FactsResponse> {
    return this.http.get<FactsResponse>(`${environment.apiUrl}/facts?limit=${limit}`)
  }


}
