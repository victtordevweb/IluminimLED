function verificaPagina(){
    if($('body.pagina-categoria').length > 0 || $('body.pagina-busca').length > 0){
        $('body').addClass('categoria_ou_busca');
        return true;
    }else {
        return false;
    }
}
class PaginaCategoria{
    static ajustesPaginaCategoria(){
        if(!verificaPagina()) return false;
        //move descrição da categoria
        $('.pagina-categoria .coluna.span3 .componente').prependTo('.pagina-categoria .sem-coluna .conteudo.span9');
    }

    static filtroPrecoPersonalizado(){  
        if(!verificaPagina()) return false;
        $('<div class="preco_personalizado">'+
        '<div class="wrap_preco">'+
        '<span class="cifrao_preco"><b>de</b>R$</span><input type="number" placeholder="min" class="preco_cliente_min input_price"><span class="fim_block">,00</span>'+
        '<span class="cifrao_preco"><b>até</b>R$</span><input type="number" placeholder="max" class="preco_cliente_max input_price"><span class="fim_block">,00</span>'+
        '<button class="button_enter">ok</button>'+
        '</div>'+
        '</div>').insertAfter('body.pagina-categoria .lateral.outras.filtro-coluna.faceta-preco');

        $('.preco_personalizado .preco_cliente_max').keypress(function(e) {
            if(e.which == 13) {
                $('.button_enter').trigger('click');
            }
        });

        $('.button_enter').click(function(){
            if ( $(this).parent().find('.preco_cliente_min').val().length == 0 && $(this).parent().find('.preco_cliente_max').val().length == 0 ){ 

        alert('Preencha os campos corretamente!');

        } else if ( $(this).parent().find('input.input_price').val() == 0 && $(this).parent().find('input.input_price').val() == 0) {
            alert('Digite um valor válido.');
        }	else if ( parseInt($(this).parent().find('.preco_cliente_min').val()) >= parseInt($(this).parent().find('.preco_cliente_max').val()) ){
        alert('O valor mínimo não pode ser maior que o valor máximo.');
        }else {
        
            var getValorMin = $(this).parent().find('.preco_cliente_min').val();	
            var getValorMax = $(this).parent().find('.preco_cliente_max').val();
        
        localStorage.setItem('postSelectedValor',''+getValorMin+' '+getValorMax+'');
        localStorage.setItem('postValorCliente','?sort=mais_vendidos&fq=Preco%3A'+getValorMin+'.00%2F'+getValorMax+'.00');
        localStorage.setItem('postFilterAjuste','fq=Preco%3A'+getValorMin+'.00%2F'+getValorMax+'.00');
        $(location).attr('href',''+localStorage.getItem('postValorCliente')+'');	
            
        }

        });

        if(window.location.href.indexOf(''+localStorage.getItem('postFilterAjuste')+'') > 0) {
            $('body').addClass('filter_personalizado_active');
            $('<a class="filter_limpar" href="?sort=mais_vendidos">Limpar</a>').appendTo('.preco_personalizado .wrap_preco');
        } else {
            localStorage.removeItem('postSelectedValor');
        }

        if(localStorage.getItem('postSelectedValor')){
            var pMin = localStorage.getItem('postSelectedValor').split(' ')[0];
            var pMax = localStorage.getItem('postSelectedValor').split(' ')[1];
        }

        $('input.preco_cliente_min').val(`${pMin}`);
        $('input.preco_cliente_max').val(`${pMax}`);

        $('.filter_limpar').click(function(){
        localStorage.removeItem('postSelectedValor');
        });

    }

    static filtroDeOrdensEPaginacao(){
        var url = location.href;
        $('.ordenar-listagem.topo .dropdown-menu li:not(:first-child)').each(function(){
        var filtro_selecionado = $('>a', this).attr('href');
        if(url.indexOf(filtro_selecionado)==-1) {
        } else {
            $(this).addClass('filtro-ativo');
        }
        });

        /*/ PAGINACAO /*/
        $('.ordenar-listagem .pagination ul>li').each(function(){
            var nomeListagem = $('>a', this).html();
            if(nomeListagem.indexOf('...') > -1){
                $(this).removeClass('active');
                $('>a', this).attr('href', '?sort=mais_vendidos&pagina=4').html('4');
            }
        });

    }

    static palavrasMaisBuscadas(arrayCategorias){
        if(!verificaPagina()) return false;
        let catsLamp = arrayCategorias;
        
        catsLamp.forEach(id=>{

        if($(`body.pagina-categoria.categoria-${id}`).length > 0 ){
        
        $(`<div class="box-palavras-chaves">
            <div class="conteiner">
            <strong class="text-center"><span class="title-mais-buscado">Palavras mais Buscadas</span></strong>
            <div class="_wrap-bus-pl">
            <div class="palavras-buscadas">
            <ul class="list-unstyled">
            <li><a class="mais-buscados" href="/lampada-led-5w?sort=mais_vendidos">lampada led 5w</a></li>
            <li><a class="mais-buscados" href="/lampada-led-7w?sort=mais_vendidos">lampada led 7w</a></li>
            <li><a class="mais-buscados" href="/lampada-led-15w?sort=mais_vendidos">lampada led 15w</a></li>
            <li><a class="mais-buscados" href="/lampada-led-9w?sort=mais_vendidos">lampada led 9w</a></li>
            <li><a class="mais-buscados" href="/lampada-led-12w?sort=mais_vendidos">lampada led 12w </a></li>
            <li><a class="mais-buscados" href="/lampada-led-10w?sort=mais_vendidos">lampada led 10w </a></li>
            <li><a class="mais-buscados" href="/lampada-led-rgb">lampada rgb</a></li>
            </ul>


            <ul class="list-unstyled">
            <li><a class="mais-buscados" href="/kit-lampadas-de-led?sort=mais_vendidos">lampadas</a></li>
            <li><a class="mais-buscados" href="/lampada-led-tubular?sort=mais_vendidos">lampada led tubular</a></li>
            <li><a class="mais-buscados" href="/kit-lampadas-de-led?sort=mais_vendidos">lampadas led</a></li>
            <li><a class="mais-buscados" href="/lampada-led?sort=mais_vendidos">lampada de led</a></li>
            <li><a class="mais-buscados" href="/dicroica-led?sort=mais_vendidos">lampada dicroica</a></li>
            <li><a class="mais-buscados" href="/led-automotivo?sort=mais_vendidos">lampada automotiva</a></li>
            <li><a class="mais-buscados" href="/lampada-led-bolinha?sort=mais_vendidos">lampada bolinha 15w</a></li>

            </ul>

                
            <ul class="list-unstyled">
            <li><a class="mais-buscados" href="/lampada-bulbo-led-a60-12w-bivolt-branca-amarela-">Lampada bulbo 12w 4000k</a></li>
            <li><a class="mais-buscados" href="/lampada-led-bulbo?sort=mais_vendidos">lampada churrasqueira</a></li>
            <li><a class="mais-buscados" href="/lampada-led-rgb">lampada colorida</a></li>
            <li><a class="mais-buscados" href="/lampada-led-wi-fi?sort=mais_vendidos">lampada de led wireless</a></li>
            <li><a class="mais-buscados" href="/lampada-led-e27?sort=mais_vendidos">lampada e27</a></li>
            <li><a class="mais-buscados" href="/lampada-led-g9?sort=mais_vendidos">lampada g9</a></li>
            <li><a class="mais-buscados" href="/led-automotivo?sort=mais_vendidos">Lampada led automotiva</a></li>
            </ul>

                
            <ul class="list-unstyled">
            <li><a class="mais-buscados" href="/lampada-led-e14?sort=mais_vendidos">Lampada led e14</a></li>
            <li><a class="mais-buscados" href="/lampada-led-tubular?sort=mais_vendidos">lampada led t8</a></li>
            <li><a class="mais-buscados" href="/led-retro?sort=mais_vendidos">lampada retro</a></li>
            <li><a class="mais-buscados" href=" /led-retro?sort=mais_vendidos">lampada vintage</a></li>
            <li><a class="mais-buscados" href="/adaptador-soquete-led-e27-duplo">soquete duplo para lampada</a></li>
            <li><a class="mais-buscados" href="/abracadeira-de-aco-para-lampada-led-tubular-t8-18w-e-36w">abracadeira em aco lampada led</a></li>
            <li><a class="mais-buscados" href="/arandela-led?sort=mais_vendidos">arandela para lampada de bulbo</a></li>
            </ul>

            </div>
            </div>
            </div>
            </div>`).appendTo(`body.pagina-categoria.categoria-${id} #corpo .conteudo.span9`);

            }

            });
    }

    static comentariosTrustVox(){
        $(`<div class="avaliacoes-clientes hidden-xs">
            <div class="conteiner">
            <span class="titulo-depoimentos"><b>Veja o que dizem nossos clientes</b></span>
            <div class="caixa-depoimento">
            <div class="owl-carrousel">
                
            <div class="item-depoimento"> 
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Dione Pereira</span>
                <span class="cidade-cliente">Juazeiro do Norte - CE</span>
                <span class="depoimento-curto">Rapidez na entrega, ótimo preço e o serviço 0800...</span>
                <div class="depoimento-completo">Rapidez na entrega, ótimo preço e o serviço 0800 (primeira de luxo) atendido rapidamente. Com certeza vou fazer outras compras.</div>
                </div>
            </div> 
            
            <div class="item-depoimento"> 
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Wolfram Metzler</span>
                <span class="cidade-cliente">Campo Bom - RS</span>
                <span class="depoimento-curto">Ótimo produto, preço justo, foi entregue antes do prazo...</span>
                <div class="depoimento-completo">Ótimo produto, preço justo, foi entregue antes do prazo.</div>
                </div>
            </div> 
            
            <div class="item-depoimento"> 
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Bianca Pianelli</span>
                <span class="cidade-cliente">Salto - SP</span>
                <span class="depoimento-curto">O produto é muito bom e atendeu plenamente minha necessidade...</span>
                <div class="depoimento-completo">O produto é muito bom e atendeu plenamente minha necessidade.</div>
                </div>
            </div> 
            
            <div class="item-depoimento"> 
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Bruno da Silva</span>
                <span class="cidade-cliente">Canoas - RS</span>
                <span class="depoimento-curto">Produto fantástico e com funcionalidades incríveis. Super recomendo...</span>
                <div class="depoimento-completo">Produto fantástico e com funcionalidades incríveis. Super recomendo, entregue tudo certinho e dentro do prazo.</div>
                </div>
            </div> 
            
            <div class="item-depoimento"> 
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Roque Almeida</span>
                <span class="cidade-cliente">Ijuí -RS</span>
                <span class="depoimento-curto">Fique muito satisfeito com esse produto e com a seriedade...</span>
                <div class="depoimento-completo">Fique muito satisfeito com esse produto e com a seriedade do vendedor na entrega antes do prazo previsto.</div>
                </div>
            </div> 
            
            <div class="item-depoimento"> 
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Bartholomeu Duarte</span>
                <span class="cidade-cliente">Lauro de Freitas - BA</span>
                <span class="depoimento-curto">Escolhi comprar com vocês devido ao ótimo atendimento...</span>
                <div class="depoimento-completo">Escolhi comprar com vocês devido ao ótimo atendimento, qualidade do produto, pontualidade na entrega e preço, muito satisfeito!</div>
                </div>
            </div> 
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Odilon Fonseca</span>
                <span class="cidade-cliente">Joinville - SC</span>
                <span class="depoimento-curto">Produto de ótima qualidade, muito bem atendido, loja...</span>
                <div class="depoimento-completo">Produto de ótima qualidade, muito bem atendido, loja de confiança, parabéns!</div>
                </div>
            </div>
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Geraldo de Abreu</span>
                <span class="cidade-cliente">Belo Horizonte - MG</span>
                <span class="depoimento-curto">Excelente atendimento, entrega super rápida. Recomendo...</span>
                <div class="depoimento-completo">Excelente atendimento, entrega super rápida. Recomendo!</div>
                </div>
            </div>
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Marcia Zeviani</span>
                <span class="cidade-cliente">São Paulo - SP</span>
                <span class="depoimento-curto">Precisava de luminárias com qualidade e bom preço...</span>
                <div class="depoimento-completo">Precisava de luminárias com qualidade e bom preço, encontrei tudo na Iluminim que entregou o produto antes do prazo. Adorei a Loja e já a indiquei para amigos</div>
                </div>
            </div>
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Alexandre Augusto</span>
                <span class="cidade-cliente">Florianópolis - SC</span>
                <span class="depoimento-curto">Excelente produto. Excelente atendimento de venda e atenção...</span>
                <div class="depoimento-completo">Excelente produto. Excelente atendimento de venda e atenção ao cliente.</div>
                </div>
            </div>
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Chilon Magno</span>
                <span class="cidade-cliente">Novo Hamburgo – RS</span>
                <span class="depoimento-curto">Porque fui bem atendido, entrega rápida, ótimo produto...</span>
                <div class="depoimento-completo">Porque fui bem atendido, entrega rápida, ótimo produto.</div>
                </div>
            </div>
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Marcelo Belloli</span>
                <span class="cidade-cliente">Porto Alegre - RS</span>
                <span class="depoimento-curto">Preço e qualidade reunidos em um único produto, além...</span>
                <div class="depoimento-completo">Preço e qualidade reunidos em um único produto, além é claro, da garantia de três anos.</div>
                </div>
            </div>
            
                <div class="item-depoimento">
                <div class="imagem-cliente"></div>      
                <div class="conteudo-cliente">
                <span class="nome-cliente">Myrian Madeu</span>
                <span class="cidade-cliente">Louveira - SP</span>
                <span class="depoimento-curto">Atendeu a todas as minhas expectativas tanto no produto...</span>
                <div class="depoimento-completo">Atendeu a todas as minhas expectativas tanto no produto, qto no atendimento e entrega pela loja</div>
                </div>
            </div>
            
            </div>
            </div>
            <div class="autenticado-trustvox"><span>Avaliações reais, auditadas por </span><span class="logo-ra-trust"></span></div>
            </div>
            </div>`).appendTo('div#corpo .conteudo.span9');

            
            $('.avaliacoes-clientes .owl-carrousel').slick({
                dots: false,
                infinite: true,
                speed: 500,
                cssEase: 'linear',
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000
            });
                
            /* efeito hover */
            $('.item-depoimento').hover(function(){
                $('.depoimento-completo', this).addClass('flutuante');
                $('.depoimento-completo.flutuante', this).prependTo('.caixa-depoimento');
                $('.depoimento-completo.flutuante').slideDown('slow');
            }, function(){
                $('.depoimento-completo.flutuante').slideUp(100);
                $('.depoimento-completo.flutuante').appendTo(this);
                $('.depoimento-completo.flutuante').removeClass('flutuante');
            });
  
    }

    static newslatterCategoria(categoriaSeletor){
        if(!verificaPagina()) return false;

        if(categoriaSeletor.length > 0){
            $(`<div class="news_category">
            <h5 class="title-form-category">Cadastre-se aqui e receba as melhores ofertas da Iluminim.</h5>
            <form action="https://iluminim.us17.list-manage.com/subscribe/post?u=3419bb6e1d2aaf130ef4e86a5&amp;id=597ac9b9ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3419bb6e1d2aaf130ef4e86a5_597ac9b9ae" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Cadastrar" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                </div>
            </form><div class="link-form-category"><a href="https://www.iluminim.com.br/pagina/politica-de-compra.html">Política de Compra</a></div></div>`).insertAfter(categoriaSeletor);
        }
    }   


}