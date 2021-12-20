import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CharacterDetails } from '../starwars/character-details/character-details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  // API URL fetched from environment file
  baseUrl:string = environment.apiUrl
  // Injecting HTTP Client via Dependency Injection
  constructor(private http:HttpClient) {
  }
  // Get details of a person by ID and retun observable to type CharacterDetails 
  getDetails(id:number):Observable<CharacterDetails>{
    return this.http.get<CharacterDetails>(this.baseUrl+'/starwars/people/'+id).pipe(
      map((data: CharacterDetails) => {
        return data;
      }))
  }
}
