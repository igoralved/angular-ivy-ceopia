import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-filtra-acomodacoes',
  templateUrl: './filtra-acomodacoes.component.html',
  styleUrls: ['./filtra-acomodacoes.component.css'],
})
export class FiltraAcomodacoesComponent implements OnInit {
  acomodacoes = this.bank.getAll();

  checkoutForm = this.formBuilder.group({ local: '' });

  constructor(
    private bank: AcomodacaobankService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('The order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  search(local: string) {
    this.route.navigate(['/acomodacoes', local]);
  }
}
