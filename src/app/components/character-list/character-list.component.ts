import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character.interface';
import { CharacterFilterComponent } from '../character-filter/character-filter.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, CharacterFilterComponent, CharacterDetailsComponent],
  template: `
    <div class="container">
      <app-character-filter (houseSelected)="filterByHouse($event)"></app-character-filter>
      
      <mat-grid-list cols="3" rowHeight="400px" gutterSize="16px">
        <mat-grid-tile *ngFor="let character of characters">
          <mat-card class="character-card">
            <img mat-card-image [src]="character.image || 'assets/placeholder.png'" [alt]="character.name">
            <mat-card-content>
              <h2>{{ character.name }}</h2>
              <p>House: {{ character.house || 'Unknown' }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button (click)="selectCharacter(character)">View Details</button>
            </mat-card-actions>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>

      <app-character-details 
        *ngIf="selectedCharacter"
        [character]="selectedCharacter"
        (close)="selectedCharacter = null">
      </app-character-details>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .character-card {
      width: 300px;
      margin: 16px;
    }
    .character-card img {
      height: 200px;
      object-fit: cover;
    }
  `]
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getAllCharacters().subscribe(
      characters => this.characters = characters
    );
  }

  filterByHouse(house: string) {
    if (house) {
      this.characterService.getCharactersByHouse(house).subscribe(
        characters => this.characters = characters
      );
    } else {
      this.loadCharacters();
    }
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }
}