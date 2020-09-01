import { Cartao } from './cartao.model';
import { Endereco } from './endereco.model';

export interface Cliente {
  idCliente: number;
  nmCliente: string;
  nrCpf: string;
  dsEmail: string;
  dtNasc: string;
  dsGenero: string;
  nrTelefone1: string;
  nrTelefone2: string;
  pwCliente: string;
  enderecos: Array<Endereco>;
  cartoesCreditoDTO: Cartao;
}

export interface ClienteUpdate{
  cartoesCreditoDTO: [
    {
      idCartaoCredito: number,
      idCliente: number,
      nmNomeTitular: string,
      nrNumeroCartao: number
    }
  ],
  dsEmail: string,
  dsGenero: string,
  dtNasc: string,
  enderecos: [
    {
      dsBairro: string,
      dsCidade: string,
      dsEndereco: string,
      idEndereco: number,
      nmCompleto: string,
      nrCep: string,
      nrEndereco: string,
      sgEstado: string
    }
  ],
  idCliente: number,
  nmCliente: string,
  nrCpf: string,
  nrTelefone1: string,
  nrTelefone2: string,
  pwCliente: string
}

