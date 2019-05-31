class PaginaCarrinho {

    static selos(){
        $('.acao-editar .selo-ssl').html(`
        <ul class="selos-carrinho">
            <li class="site-protegido"><a href="javascript:void(0)"></a></li>
            <li class="site-sincero"><a href="javascript:void(0)"></a></li>
            <li class="site-blindado"><a href="https://s3-sa-east-1.amazonaws.com/cdn.siteblindado.com/lp_aw/verifica-pt-br.html?url=www.iluminim.com.br"></a></li>
            <li class="site-ebit"><a href="javascript:void(0)"></a></li>
        </ul>`);
    }

}