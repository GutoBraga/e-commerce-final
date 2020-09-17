export interface Nf{
    idCliente: number;
    idEndereco: number;
    idFormaPagamento: number;
    itensDTOPost: [
        {
            cdProduto: number;
        }
    ],
    nmNomeTitular: string;
    nrNumeroCartao: number;
}