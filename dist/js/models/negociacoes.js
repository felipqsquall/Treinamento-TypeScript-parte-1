export class Negociacoes {
    constructor() {
        //são a mesma coisa linhas 5 e 6
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //são a mesma coisa linhas 13 e 14
    //lista(): ReadonlyArray<Negociacao>{
    lista() {
        return this.negociacoes;
    }
}
