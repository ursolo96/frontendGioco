import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() ricomincia: EventEmitter<any>= new EventEmitter();

  constructor(private router: Router) {
  }


  goToCharacterSelection() {

    this.ricomincia.emit();
  }
}
