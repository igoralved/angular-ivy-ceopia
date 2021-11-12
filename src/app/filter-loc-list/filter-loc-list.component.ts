import { Component, OnInit } from '@angular/core';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-filter-loc-list',
  templateUrl: './filter-loc-list.component.html',
  styleUrls: ['./filter-loc-list.component.css'],
})
export class FilterLocListComponent implements OnInit {
  acomodacoes = this.bank.getAll();

  constructor(private bank: AcomodacaobankService) {}

  ngOnInit() {}
}
