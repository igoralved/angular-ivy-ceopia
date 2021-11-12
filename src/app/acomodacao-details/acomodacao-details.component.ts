import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { Acomodacao, acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-acomodacao-details',
  templateUrl: './acomodacao-details.component.html',
  styleUrls: ['./acomodacao-details.component.css'],
})
export class AcomodacaoDetailsComponent implements OnInit {
  acomodacao: Acomodacao | undefined;

  acomodacoes = this.bank.getAll();

  constructor(
    private route: ActivatedRoute,
    private bank: AcomodacaobankService
  ) {}

  ngOnInit() {
    // First get the cep id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const al = String(routeParams.get('localizacao'));

    // Find the cep that correspond with the 'campo' provided in route.

    this.bank.getByLocal(al).subscribe((a) => (this.acomodacao = a));
  }
}
