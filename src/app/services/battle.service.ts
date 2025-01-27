import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  private backendUrl = 'https://tuo-backend-url.com';  // Sostituisci con l'URL del tuo backend

  constructor(private http: HttpClient) {}

  // Metodo per inviare i dati del turno al backend
  sendTurn(data: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/battaglia`, data);
  }
}
