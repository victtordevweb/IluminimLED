class PaginaCategoria{

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


}