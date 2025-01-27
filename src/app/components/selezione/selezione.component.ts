import { Component } from '@angular/core';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  standalone: true,
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent {
  characters = [
    {
      "id": 1,
      "nome": "StefanoFinale",
      "attacco": 10,
      "difesa": 5,
      "evasione": 5,
      "velocita": 5,
      "critico": 4,
      "vita": 200,
      "immagine": "https://preview.redd.it/emperors-child-artist-wulfric-hilston-v0-rg471b8f9t9b1.jpg?auto=webp&s=2ba5f100cfde5b24e1c78c74c315b05329f7666b"
    },
    {
      "id": 2,
      "nome": "VIEGO",
      "attacco": 10,
      "difesa": 4,
      "evasione": 4,
      "velocita": 4,
      "critico": 2,
      "vita": 200,
      "immagine": "https://images.alphacoders.com/117/1177900.jpg"
    }
  ];

  selectedCharacters: any[] = [];
  hoveredCharacter: any = null;

  selectCharacter(character: any) {
    if (this.isSelected(character)) {
      this.selectedCharacters = this.selectedCharacters.filter(c => c.id !== character.id);
    } else if (this.selectedCharacters.length < 2) {
      this.selectedCharacters.push(character);
    }
  }

  isSelected(character: any): boolean {
    return this.selectedCharacters.some(c => c.id === character.id);
  }

  confirmSelection() {
    console.log('Selected Characters:', this.selectedCharacters);
    alert('Selezione confermata!');
  }
}
