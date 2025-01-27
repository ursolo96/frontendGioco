import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-personaggio',
  template: `
    <div class="personaggio">
      <h3>{{ data.nome }}</h3>
      <p>Vita: {{ data.vita }}</p>
      <p>Attacco: {{ data.attacco }}</p>
      <p>Difesa: {{ data.difesa }}</p>
      <div class="mosse">
        <button *ngFor="let mossa of data.mosse" (click)="selectMove(mossa)">
          {{ mossa }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./personaggio.component.css'],
  standalone: true
})
export class PersonaggioComponent {
  @Input() data: any;
  @Output() moveSelected = new EventEmitter<string>();

  selectMove(mossa: string) {
    this.moveSelected.emit(mossa);
  }
}
