import { Component, OnInit } from '@angular/core';
import { acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-acomodacoes-list',
  templateUrl: './acomodacoes-list.component.html',
  styleUrls: ['./acomodacoes-list.component.css'],
})
export class AcomodacoesListComponent {
  acomodacoes = acomodacoes;

  

}
