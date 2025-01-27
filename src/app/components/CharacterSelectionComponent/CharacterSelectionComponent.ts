import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent {
  characters:any = [];

  constructor(private http: HttpClient) {
    http.get("/api/personaggi").subscribe((response) => { // @ts-ignore
      this.characters=response})
  }

  selectedCharacters: any[] = [];

  selectCharacter(character: any) {
    if (this.isSelected(character)) {
      // Rimuove il personaggio se già selezionato
      this.selectedCharacters = this.selectedCharacters.filter(c => c.id !== character.id);
    } else if (this.selectedCharacters.length < 2) {
      // Aggiunge il personaggio se non già selezionato
      this.selectedCharacters.push(character.id);
    }
  }

  isSelected(character: any): boolean {
    // Controlla se il personaggio è stato selezionato
    return this.selectedCharacters.some(c => c === character.id);
  }

  @Output() personaggiSelezionati:EventEmitter<any> = new EventEmitter();

  confirmSelection() {
    this.personaggiSelezionati.emit(this.selectedCharacters);
    this.selectedCharacters = [];
  }
}
