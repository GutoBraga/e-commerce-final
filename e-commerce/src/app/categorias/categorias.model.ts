export interface Produto {
    cd_produto: number;
    id_status_produto: number;
    id_categoria: number;
    id_tipo_produto: number;
    nm_fantasia: string;
    nm_fabricante: string;
    vl_unidade: number;
    ds_peso: number;
    id_imagem: string;
    ds_produto: string;
}

export interface Categoria {
    id_categoria: number;
    ds_categoria: string;
}