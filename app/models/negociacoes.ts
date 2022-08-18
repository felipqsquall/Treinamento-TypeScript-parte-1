import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  //são a mesma coisa linhas 5 e 6
  //private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  }

  //são a mesma coisa linhas 13 e 14
  //lista(): ReadonlyArray<Negociacao>{
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

}
