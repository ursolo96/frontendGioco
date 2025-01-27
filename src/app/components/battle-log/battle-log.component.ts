import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-battle-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './battle-log.component.html',
  styleUrls: ['./battle-log.component.css']
})
export class BattleLogComponent {
  @Input('logs') logs: string[] = [];
  @Input() isGameOver: boolean = false;
  @Input() winnerName: string = '';
  @Input() otherPlayerName: string = ''; // Aggiunto per evitare errore di compilazione


  constructor(private router: Router) {
  }


  goToCharacterSelection() {
    this.router.navigate(['/seleziona-personaggi']); // Assicurati di avere configurato il router
  }
}
