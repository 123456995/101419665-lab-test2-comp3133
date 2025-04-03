import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-character-filter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  template: `
    <mat-form-field>
      <mat-label>Filter by House</mat-label>
      <mat-select (selectionChange)="onHouseSelected($event.value)">
        <mat-option value="">All Houses</mat-option>
        <mat-option value="Gryffindor">Gryffindor</mat-option>
        <mat-option value="Slytherin">Slytherin</mat-option>
        <mat-option value="Hufflepuff">Hufflepuff</mat-option>
        <mat-option value="Ravenclaw">Ravenclaw</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [`
    mat-form-field {
      width: 200px;
      margin: 20px 0;
    }
  `]
})
export class CharacterFilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  onHouseSelected(house: string) {
    this.houseSelected.emit(house);
  }
}