import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-personaggio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaggio.component.html',
  styleUrls: ['./personaggio.component.css']
})
export class PersonaggioComponent {
  @Input() data: any;
  @Input() mosse: string[] = [];
  @Input() mossaSelezionata: string | null = null;
  @Output() moveSelected = new EventEmitter<string>();

  @Input()maxVita=0;
  onMoveClick(move: string) {
    this.moveSelected.emit(move);
  }

  takeDamage(damage: number) {
    this.data.vita -= damage;
    if (this.data.vita < 0) {
      this.data.vita = 0;
    }
  }

  getHealthBarColor(vita: number, maxVita: number): string {
    const percent = (vita / maxVita) * 100;
    return `linear-gradient(to right, green ${percent}%, red ${percent}%)`;
  }
}
