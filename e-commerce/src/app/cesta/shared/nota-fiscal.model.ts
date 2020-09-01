export interface NotaFiscal{
    idCliente: number;
    itensDTOPost: [
        {
            cdProduto: number;
        }
    ],
    nmNomeTitular: string;
    nrNumeroCartao: string;
}

export interface Valor {
    valor: number;
}

export interface ValorTotal{
    valorTotal: Valor[];
}