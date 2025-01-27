// src/app/components/battle-arena/battle-arena.component.ts
import { Component } from '@angular/core';
import { BattleService } from '../../services/battle.service';
import {BattleLogComponent} from '../log/log/log.component';
import {PersonaggioComponent} from '../personaggio/personaggio/personaggio.component'; // Importa il servizio

@Component({
  selector: 'app-battle-arena',
  templateUrl: './battle-arena.component.html',
  styleUrls: ['./battle-arena.component.css'],
  imports: [
    BattleLogComponent,
    PersonaggioComponent
  ],
  standalone: true
})
export class BattleArenaComponent {
  personaggio1 = {
    nome: 'Guerriero',
    vita: 162,
    attacco: 10,
    difesa: 7,
    mosse: ['attacco normale', 'attacco pesante', 'attacco perforante', 'difesa potenziata', 'evasione potenziata', 'cura'],
  };

  personaggio2 = {
    nome: 'Assassino',
    vita: 192,
    attacco: 10,
    difesa: 2,
    mosse: ['attacco normale', 'attacco pesante', 'attacco perforante', 'difesa potenziata', 'evasione potenziata', 'cura'],
  };

  log: string[] = [];

  constructor(private battleService: BattleService) {}  // Inietta il servizio

  onMoveSelected(move: string, personaggio: string) {
    const turno = {
      personaggio1: this.personaggio1,
      personaggio2: this.personaggio2,
      move,
      mover: personaggio,
    };

    // Chiamata al servizio per inviare i dati del turno al backend
    this.battleService.sendTurn(turno).subscribe(
      (response) => {
        console.log('Turno inviato correttamente', response);
        // Aggiungi il log del turno alla lista dei log
        this.log.push(`Turno: ${response.log}`);
      },
      (error) => {
        console.error('Errore nell\'invio del turno', error);
      }
    );
  }
}
