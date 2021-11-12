import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acomodacao } from './acomodacoes';

@Injectable()
export class AcomodacaobankService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Acomodacao[]> {
    return this.http.get<Acomodacao[]>('/assets/acomodacoes.json');
  }

  getByLocal(local: string): Observable<Acomodacao> {
    return this.http.get<Acomodacao>(
      'https://www.airbnb.com.br/' + local + '/json/'
    );
  }
}
