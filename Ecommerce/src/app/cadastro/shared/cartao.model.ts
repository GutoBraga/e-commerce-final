export interface Cartao {
    idCartaoCredito: number;
    nrNumeroCartao: string;
    nmNomeTitular: string;
    idCliente: number;
}

export interface ResponseCartao {
    cartoes: Cartao[];
}