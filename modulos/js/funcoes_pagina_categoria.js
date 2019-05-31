class PaginaCategoria{
    static ajustesPaginaCategoria(){
        //move descrição da categoria
        $('.pagina-categoria .coluna.span3 .componente').prependTo('.pagina-categoria .sem-coluna .conteudo.span9');
    }

    static filtroPrecoPersonalizado(){  
        if( $('body.pagina-categoria').length > 0){
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

}