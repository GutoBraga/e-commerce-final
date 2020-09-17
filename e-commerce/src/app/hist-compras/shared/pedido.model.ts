import { PedidoItem } from './pedido-item.model';

export interface Pedido {
    idPedido: number;
    dtCompra: string;
    vlFrete: number;
    vlTotalPedido: number;
    qtItensPedido: number;
    idCliente: number;
    cdStatusPedido: number;
    items: Array<PedidoItem>;
}

export interface ResponsePedidos {
    pedidos: Pedido[];
}