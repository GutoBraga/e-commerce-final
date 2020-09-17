import { Cliente } from './cliente.model';
export interface responseCliente{
  status: number;
  mensagem: string;
  retorno: Cliente;
  dtTimestampErro: string;
}
