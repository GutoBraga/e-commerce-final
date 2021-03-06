package br.com.rdevs.ecommerce.documentoFiscal.controller;

import br.com.rdevs.ecommerce.cadastro.model.dto.CartaoCreditoDTO;
import br.com.rdevs.ecommerce.cadastro.model.entity.TbCartaoCredito;
import br.com.rdevs.ecommerce.cadastro.repository.CadastroRepository;
import br.com.rdevs.ecommerce.cadastro.service.ClienteService;
import br.com.rdevs.ecommerce.cadastro.service.bo.CartaoCreditoBO;
import br.com.rdevs.ecommerce.documentoFiscal.model.dto.DocumentoFiscalDTO;
import br.com.rdevs.ecommerce.documentoFiscal.model.dto.PostDocumentoFiscalDTO;
import br.com.rdevs.ecommerce.documentoFiscal.service.DocumentoFiscalService;
import br.com.rdevs.ecommerce.pagamentopedido.repository.PagamentoPedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.Base64;

@RestController
public class DocumentoFiscalController {
    @Autowired
    DocumentoFiscalService documentoFiscalService;

    @Autowired
    ClienteService clienteService;

    @Autowired
    CartaoCreditoBO cartaoCreditoBO;

    @Autowired
    CadastroRepository cadastroRepository;

    @Autowired
    PagamentoPedidoRepository pagamentoPedidoRepository;

    @GetMapping("/documentoFiscalId/{idDocumentoFiscal}")
    public ResponseEntity buscarPorIDnota(@PathVariable("idDocumentoFiscal") BigInteger idDocumentoFiscal){
        return ResponseEntity.ok().body(documentoFiscalService.listaDocumentosPorID(idDocumentoFiscal));
    }

    @GetMapping("/documentoFiscal/{idCliete}")
    public ResponseEntity buscarNotas(@PathVariable("idCliete") BigInteger idCliete){
        return ResponseEntity.ok().body(documentoFiscalService.listarPorIdCliente(idCliete));
    }

    @PostMapping("/adicionaNota")
    public ResponseEntity inserirNotaF(@RequestBody PostDocumentoFiscalDTO nfDto){

        if (nfDto.getSalvarCartao()){
            CartaoCreditoDTO cartaoCreditoDTO = new CartaoCreditoDTO();

            cartaoCreditoDTO.setNrNumeroCartao(nfDto.getNrNumeroCartao());
            cartaoCreditoDTO.setNmNomeTitular(nfDto.getNmNomeTitular());
            cartaoCreditoDTO.setIdCliente(nfDto.getIdCliente());

            clienteService.adicionaCartaoCredito(cartaoCreditoDTO,nfDto.getIdCliente());
            DocumentoFiscalDTO documentoFiscalDTO =documentoFiscalService.inserirItem(nfDto);
            documentoFiscalService.enviarNota(documentoFiscalDTO);
            return ResponseEntity.ok().body(documentoFiscalDTO);
        }else {
            DocumentoFiscalDTO documentoFiscalDTO =documentoFiscalService.inserirItem(nfDto);
            documentoFiscalService.enviarNota(documentoFiscalDTO);
            return ResponseEntity.ok().body(documentoFiscalDTO);
        }
    }



    @PostMapping("/enviaEmail/{idDocumentoFiscal}")
    public ResponseEntity enviaEmail(@PathVariable("idDocumentoFiscal") BigInteger idDocumentoFiscal){
        return ResponseEntity.ok().body(documentoFiscalService.listaDocumentosPorID(idDocumentoFiscal));
    }

    @GetMapping("/testeEmail/{idDocumentoFiscal}")
    public ResponseEntity testeEmail(@PathVariable("idDocumentoFiscal") BigInteger idDocumentoFiscal){
      return ResponseEntity.ok().body(pagamentoPedidoRepository.findByDocumentoFiscalIdDocumentoFiscal(idDocumentoFiscal));
    }




}
