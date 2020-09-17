export interface CartaoCliente {

    idCliente: number;
    cartoesCreditoDTO: Cartao[];
}

export interface Cartao {
    idCartaoCredito: number;
    nrNumeroCartao: string;
    nmNomeTitular: string;
    idCliente: number;
}

export interface ResponseCartao {
    cartoes: Cartao[];
}