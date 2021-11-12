export enum TipoAcomodacao{
  CASA, APARTAMENTO, QUARTO,
}
export interface Acomodacao {


  id: number;
  tipo: String;
  capacidade: number;
  localizacao: String;
  permiteanimais: boolean;
  temestacionamento: boolean;


}

export const acomodacoes = [

{id: 1, tipo:"CASA", capacidade: 13, localizacao: "New york", permiteanimais: true, temestacionamento: true,}


]