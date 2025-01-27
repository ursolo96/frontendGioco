import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonaggioComponent} from './components/personaggio/personaggio.component';
import {BattleLogComponent} from './components/battle-log/battle-log.component';
import {BattleService} from './services/battle.service';
import {HttpClient} from '@angular/common/http';

interface GameState {

  personaggio1: any;
  personaggio2: any;
  primoAdAttaccare: string;
  secondoAdAttaccare: string;
  vitaPrimoAdAttaccare: number;
  vitaSecondoAdAttaccare: number;
  dannoPrimoAdAttaccare: number;
  dannoSecondoAdAttaccare: number;
  evasoPrimoAdAttacare: boolean;
  evasoSecondoAdAttaccare: boolean;
  crittatoPrimoAdAttaccare: boolean;
  crittatoSecondoAdAttaccare: boolean;
  log: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonaggioComponent, BattleLogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Battle Game';
  gameState!: GameState;
  id1 = 1;
  id2 = 2;
  p1MaxVita = 0;
  vincitore = ""
  p2MaxVita = 0;
  finito = false;


  constructor(private http: HttpClient) {
  }

  // Array delle mosse disponibili
  mosse = ['attacco normale', 'attacco pesante', 'attacco perforante', 'difesa potenziata', 'evasione potenziata', 'cura'];

  // Mosse selezionate dai personaggi
  mossaP1: string | null = null;
  mossaP2: string | null = null;

  // Lista dei log della battaglia
  battleLogs: string[] = [];

  ngOnInit() {
    // I dati del tuo JSON
    this.http.get("/api/turni/" + this.id1 + "/" + this.id2).subscribe(
      result => {
        this.gameState = result as GameState;
        this.p1MaxVita = this.gameState.personaggio1.vita
        this.p2MaxVita = this.gameState.personaggio2.vita
        if (this.gameState.log) {
          this.battleLogs.push(this.gameState.log);
        }
      }
    )


  }

  // Metodo per gestire la selezione delle mosse
  onMoveSelected(move: string, personaggio: string) {
    if (personaggio === 'personaggio1') {
      this.mossaP1 = move;
    } else {
      this.mossaP2 = move;
    }
  }

  // Metodo per inviare le mosse al backend
  inviaMovimenti() {
    if (this.mossaP1 && this.mossaP2) {
      const datiDaInviare = {
        ...this.gameState
      };

      // Qui andrà implementata la chiamata al backend

      this.http.post(`api/turni/prossimo/${this.mossaP1}/${this.mossaP2}`, datiDaInviare).subscribe(
        result => {
          this.gameState = result as GameState;
          this.battleLogs.unshift(this.gameState.log);
          if (this.gameState.personaggio1.vita <= 0) {
this.vincitore=this.gameState.personaggio2.nome;
            this.finito = true;
          }
          if (this.gameState.personaggio2.vita <= 0) {
            this.vincitore=this.gameState.personaggio1.nome;
            this.finito = true;
          }
          this.mossaP1 = null;
          this.mossaP2 = null;

        }
      )


    }
  }
}
