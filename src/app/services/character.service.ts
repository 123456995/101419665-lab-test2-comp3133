import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters`);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters/house/${house}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
}