export interface PedidoItem {
    idPedido: number;
    nrItemPedido: number;
    cdProduto: number;
    dsProduto: string;
    vlPedidoItem: number;
}

export interface ResponsePedidosItem {
    pedidosItens: PedidoItem[];
}