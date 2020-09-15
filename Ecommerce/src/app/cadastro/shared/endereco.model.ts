export interface Endereco {

    idEndereco: number;
    dsEndereco: string;
    nrEndereco: string;
    nrCep: string;
    dsBairro: string;
    dsCidade: string;
    sgEstado: string;
    nmCompleto: string;

}

export interface ResponseEnderecos {
    enderecos: Endereco[];
}

export interface ClienteEnd {
    idCliente: number;
    enderecos: Endereco;
}