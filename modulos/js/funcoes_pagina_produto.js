class PaginaProduto {

    static scriptsAjustes(){
        $(`<div class="avaliar-pg-prod">
            <div class="stars-block">
                <span>Avaliação dos Clientes:</span>	
            </div>
            <a href="#comentarios" class="veja-quem-recmendou">
                <span>Veja quem recomendou</span>	
            </a>
        </div>
        <div class="mais-info-prod"><a href="#espec-tec">+ Informações</a></div>`).insertAfter('.pagina-produto .produto .codigo-produto span:nth-child(1)');
        
        $('.pagina-produto .produto .principal .acoes-produto .comprar').prependTo('.principal .preco-produto.destaque-preco.com-promocao');
        
        $(`<div class="entrega-todo-pais-ilm"><span>Envio com desconto para todo país</span><span class="ds-block">Saiba os prazos de entrega e as formas de envio.</span></div>`).insertBefore('.pagina-produto .cep form#formCalcularCep');
        
        $('.pagina-produto .variacoes-produtos-ILM').insertAfter('.produto .codigo-produto');
        
        $('.pagina-produto .principal .desconto-a-vista strong').each(function(){
        var priceProd = $(this).text();
        $(this).html(`<span class="desc-boleto">
            <span class="b-txt">Aproveite!</span><span>Ganhe <span class="txt-color">10% de desconto</span> no boleto</span><span class="preco">${priceProd}</span>
        </span>`);
        });

        /* move botao add favoritos */
        $('.lista-redes a.lista-favoritos.adicionar-favorito').clone().appendTo('.pagina-produto .principal .nome-produto, .pagina-produto .acoes-flutuante.borda-principal');
    
        // botao trustvox pagina do produto
        $('<a class="botao-trust" href="#comentarios-container"> <span class="icon-central"></span>  Posso Ajudar? Clique e tire suas duvidas</a>').insertAfter('.pagina-produto .span6>.principal');  

        // botao trustvox pagina do produto flutuante
        $('<a class="botao-trust prod-flutuante" href="#comentarios-container"> <img src="https://cdn.awsli.com.br/257/257163/arquivos/icon-central-atendimento.png"/>  Posso Ajudar?<br /> Clique e tire suas duvidas</a>').appendTo('.pagina-produto .produto .acoes-flutuante');

        // comprando na ilm
        $(`<div class="comprando-iluminim">
            <span class="titulo-comprando-iluminim">COMPRANDO NA ILUMINIM</span>
            <span class="conteudo-comprando-iluminim span4 um"><b class="tit-conteudo">Entrega</b><span class="conteudo-down-ilm">Confie na entrega mais eficiente e rápida do Brasil. Nossos produtos são transportados de maneira segura e dentro dos mais rigorosos padrões de qualidade do e-commerce.</span></span>
            <span class="conteudo-comprando-iluminim span4"><b class="tit-conteudo">Forma de Pagamento</b><span class="conteudo-down-ilm">Sua compra pode ser realizada por cartão de crédito em até 12x sem juros, com parcelas mínimas de R$ 10, ou através de boleto bancário com 10% de desconto extra no valor total.</span></span>
            <span class="conteudo-comprando-iluminim span4"><b class="tit-conteudo">Segurança</b><span class="conteudo-down-ilm">Possuímos diversos parceiros como Google, Microsoft,Trustvox, Ebit, Mercado Pago e Site Blindado que possibilitam uma transação 100% segura e confiável.</span></b></span>
        </div>`).insertAfter('.pagina-produto .produto-compartilhar');
    }

    static barraFlutuante(){
        
        $('div#descricao p > img[src="https://cdn.awsli.com.br/257/257163/arquivos/caracteristicasTITULO.png"]').parent('p').attr('id','inf-tec-ilm');
        $('div#descricao iframe[height="440"]').parent().attr('id','anchor-video');
        

        $(`<div class="acoes-prod-topo">
            <ul class="wrap-elementos">
                <li><a href="#descricao">Descrição completa</a></li>
                <li><a href="#inf-tec-ilm">Informações técnicas</a></li>
                <li><a href="#comentarios">Avaliação dos clientes</a></li>
                <li><a data-hash="#ModalInfoPagamento" data-target="#ModalInfoPagamento" data-toggle="modal" class="forma-pagamento-top">Formas de pagamento</a></li>
                <li class="video_hash"><a href="#anchor-video">Video do produto</a></li>
                <li class="audio_hash"><a class="audio-hash-a">Ouça a dica</a></li>
            </ul>
        </div>`).appendTo('div#barraTopo');
            
        if ( $('div#descricao #anchor-video').length < 1 ){
            $('.acoes-prod-topo > ul > li.video_hash').remove();
        }

        if ( $('.veja-o-video-iluminim.pag_prod').length < 1 ){
            $('.acoes-prod-topo > ul > li.audio_hash').remove();
        }

        var anchorIlm = $('html, body');

        $('div#barraTopo .acoes-prod-topo ul.wrap-elementos a:not(.forma-pagamento-top):not(.audio-hash-a)').click(function() {
            anchorIlm.animate({
                scrollTop: $(this.hash).offset().top -120
            }, 500)
            return false;
        });

        $('.audio-hash-a').click(function(){
            $('#anchor-audio > div').trigger('click');
        });

    }


}