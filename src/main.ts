import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CharacterListComponent } from './app/components/character-list/character-list.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Harry Potter Characters</h1>
      <app-character-list></app-character-list>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }
  `],
  imports: [CharacterListComponent],
  standalone: true
})
export class App {
  name = 'Harry Potter Character Viewer';
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideAnimations()
  ]
});