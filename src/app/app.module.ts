import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AcomodacoesListComponent } from './acomodacoes-list/acomodacoes-list.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { FiltraAcomodacoesComponent } from './filtra-acomodacoes/filtra-acomodacoes.component';
import { AcomodacaoDetailsComponent } from './acomodacao-details/acomodacao-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FiltraAcomodacoesComponent },
      { path: 'acomodacoes', component: AcomodacoesListComponent },
      {
        path: 'acomodacoes/:localizacao',
        component: AcomodacaoDetailsComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    AcomodacaoDetailsComponent,
    HelloComponent,
    AcomodacoesListComponent,
    FiltrarComponent,
    FiltraAcomodacoesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
