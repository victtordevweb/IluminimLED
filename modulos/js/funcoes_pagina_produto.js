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
    }
    

}