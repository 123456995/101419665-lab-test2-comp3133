import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="dialog-overlay" *ngIf="character">
      <div class="dialog-content">
        <h2>{{ character.name }}</h2>
        <div class="character-info">
          <img [src]="character.image || 'assets/placeholder.png'" [alt]="character.name">
          <div class="details">
            <p><strong>Species:</strong> {{ character.species }}</p>
            <p><strong>House:</strong> {{ character.house || 'Unknown' }}</p>
            <p><strong>Wizard:</strong> {{ character.wizard ? 'Yes' : 'No' }}</p>
            <p><strong>Ancestry:</strong> {{ character.ancestry || 'Unknown' }}</p>
            <p><strong>Actor:</strong> {{ character.actor }}</p>
            
            <div class="wand-info">
              <h3>Wand</h3>
              <p><strong>Wood:</strong> {{ character.wand?.wood || 'Unknown' }}</p>
              <p><strong>Core:</strong> {{ character.wand?.core || 'Unknown' }}</p>
              <p><strong>Length:</strong> {{ character.wand?.length || 'Unknown' }}</p>
            </div>
          </div>
        </div>
        <button mat-raised-button color="primary" (click)="onClose()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .dialog-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
    }
    .character-info {
      display: flex;
      gap: 20px;
      margin: 20px 0;
    }
    .character-info img {
      width: 300px;
      height: auto;
      object-fit: cover;
      border-radius: 4px;
    }
    .details {
      flex: 1;
    }
    .wand-info {
      margin-top: 20px;
    }
  `]
})
export class CharacterDetailsComponent {
  @Input() character: Character | null = null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}