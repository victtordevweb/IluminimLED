const scriptRODAPE = function(){
    $('#barraNewsletter .componente .texto-newsletter').html(`
        <div class="newtxt">Cadastre seu e-mail
    <span>e receba descontos e novidades</span></div>
    `);
    
        $(`
            <div class="contatos_rdp">
                <div class="conteiner">
                    <div class="hr_compra">
                        <span class="tt-ct-rdp">COMPRE POR TELEFONE</span>
                        <span class="subtt-hr-rdp">Atendemos de seg á sex, das 9h ás 18h</span>
                    </div>
                    
                    <div class="number_ilm sp"><a href="">(11) 4210-0494</a></div>
                    <div class="number_ilm rj"><a href="">(21) 2042-0247</a></div>
                    <div class="number_ilm rs"><a href="">(51) 3557-5070</a></div>
                    <div class="number_ilm rs-2"><a href="">0800 580 0332</a></div>
                    <div class="number_ilm all"><a href="#ModalRodape" data-toggle="modal" data-target="#ModalRodape">VEJA MAIS</a></div>
                    
                </div>
            </div>
        `).insertBefore('#rodape');

    $('.links-rodape-categorias ul').html(''+
     '<li class="refletores-mt"><a href="/refletores-de-led?sort=mais_vendidos">Refletores LED</a></li>'+
     '<li class="refletores-micro-led-mt"><a href="/refletor-microled?sort=mais_vendidos">Refletores Micro LED</a></li>'+
     '<li class="espetos-mt"><a href="/espeto-led?sort=mais_vendidos">Espetos LED</a></li>'+
     '<li class="luminarias-mt"><a href="/luminarias-led?sort=mais_vendidos">Luminárias LED</a></li>'+
     '<li class="lum-emergencia-mt"><a href="/luminaria-emergencia-led?sort=mais_vendidos">Luminária Emergência LED</a></li>'+
     '<li class="arandelas-mt"><a href="/arandela-led?sort=mais_vendidos">Arandelas LED</a></li>'+
     '<li class="lustre-mt"><a href="/lustre-led?sort=mais_vendidos">Lustre LED</a></li>'+
     '<li class="pendentes-mt"><a href="/pendente-led?sort=mais_vendidos">Pendentes LED</a></li>'+
     '<li class="fitas-mt"><a href="/fitas-de-led?sort=mais_vendidos">Fitas LED</a></li>'+
     '<li class="spots-mt"><a href="/spots?sort=mais_vendidos">Spot LED</a></li>'+
     '<li class="lampadas-mt"><a href="/lampada/led?sort=mais_vendidos">Lâmpadas LED</a></li>'+
     '<li class="camera-seg-mt"><a href="/camera-seguranca-led?sort=mais_vendidos">Camera Segurança LED</a></li>'+
     '<li class="acessorios-mt"><a href="/acessorios-para-leds?sort=mais_vendidos">Acessorios LED</a></li>'+
     '<li class="festa-led"><a href="/iluminacao-para-festa?sort=mais_vendidos">Festa LED</a></li>'+
     '<li class="automotivo-mt"><a href="/led-automotivo?sort=mais_vendidos">Automotivo LED</a></li>'+
     '<li class="kits-mt"><a href="/kits-especiais?sort=mais_vendidos">Kits LED</a></li>'+
     '<li class="lancamentos-led"><a href="/lancamentos-led?sort=mais_vendidos">Lançamentos LED</a></li>'+
     '<li class="ofertas-sem-mt"><a href="/ofertadasemana?sort=mais_vendidos">Oferta da Semana</a></li>'+
    '');
    
    $('#rodape .institucional .links-rodape-paginas,#rodape .institucional .sobre-loja-rodape').wrapAll('<div class="new_box_ilm span8"></div>');
    
    $('#rodape .institucional .links-rodape-paginas, #rodape .new_box_ilm.span8 > .sobre-loja-rodape').wrapAll('<div class="span12 wrapper-um"></div>');
    
    $('#rodape .new_box_ilm.span8 .links-rodape-paginas').removeClass('span4').addClass('span5');
    
    $('#rodape .new_box_ilm.span8 .links-rodape-paginas .titulo').html('Institucional');
    
    $('#rodape .new_box_ilm.span8 .span4.sobre-loja-rodape').removeClass('span4').addClass('span6');
    
    $('<div class="span12 wrapper-dois">'+
    '<div class="rodape-atendimento span5">'+
        '<span class="titulo">Atendimento</span>'+
        '<ul>'+
        '<li><a href="https://www.iluminim.com.br/pagina/central-de-atendimento.html">Central online</a></li>'+
        '<li><a href="https://www.iluminim.com.br/pagina/politica-de-troca.html">Trocas e devoluções</a></li>'+
    '<li><a href="/conta/pedido/listar">Meus pedidos</a></li>'+
    '<li><a href="https://www.iluminim.com.br/pagina/iluminim-e-confiavel.html">Iluminim é confiável?</a></li>'+
        '</ul>'+
    '</div>'+
    '<div class="rodape-atendimento span5">'+
        '<span class="titulo">Iluminim Empresas</span>'+
        '<ul>'+
        '<li><a href="https://www.iluminim.com.br/pagina/seja-nosso-revendedor-led.html">Venda para revendas</a></li>'+
        '<li><a href="https://www.iluminim.com.br/pagina/atendimento-empresarial.html">Venda para empresas</a></li>'+
        '<li><a href="https://www.iluminim.com.br/pagina/led-para-condominio.html">Venda para condomínios</a></li>'+
        '<li><a href="/pagina/cadastro-de-arquiteto.html">Venda para arquitetos</a></li>'+
    '<li><a href="https://www.iluminim.com.br/pagina/seja-nosso-fornecedor.html">Seja um fornecedor</a></li>'+
        '</ul>'+
    '</div>'+
    '</div>').insertAfter('#rodape .new_box_ilm > .wrapper-um');
    
    $('#rodape .institucional .links-rodape.links-rodape-paginas ul > li a:contains("Quem somos")').html('Sobre a Iluminim');
    $('#rodape .links-rodape-paginas ul li a:contains("Cupons de Desconto")').html("Cupons e descontos");
    $('#rodape .institucional .links-rodape.links-rodape-paginas ul > li a:contains("Fale Conosco")').html('Trabalhe conosco').parents('li').insertAfter('#rodape .institucional .links-rodape.links-rodape-paginas ul > li:last-child');
    
    $('#rodape .pagamento > .titulo').html('FORMAS DE PAGAMENTO');
    $('#rodape .selos > .titulo').html('RECONHECIMENTO E SEGURANÇA');
    $('#rodape .selos').removeClass('span4').addClass('span7');
    
    
    $('#rodape .selos > ul').addClass('banderias_seguranca').html(`
        <li class="site-sincero-selo"></li>
        <li class="abcomm"><a href="https://abcomm.org/certificado.php?url=iluminim.com.br" target="_blank"></a></li>
        <li class="ebit_selo_ilm"></li>
        <li class="site_protegido"></li>
        <li class="google_safe"><a href="http://www.google.com/safebrowsing/diagnostic?site=www.iluminim.com.br" title="Google Safe Browsing" target="_blank"></a></li>
    `);
    
    $('<div class="boleto_ilm"><i class="boleto-icon"></i></div>').insertAfter('#rodape .pagamento-selos .pagamento .bandeiras-pagamento');  
    
    
    
    $('<div class="mais-inf-rdp"><span>Mais informações</span></div>').insertAfter('#rodape .pagamento-selos');
    $('#rodape .institucional, #rodape .pagamento-selos').wrapAll('<div class="iluminim-inf-rdp"></div>');
    $('.mais-inf-rdp span').click(function(){
        $(this).toggleClass('active');
            $(this).parents('.mais-inf-rdp').siblings('.iluminim-inf-rdp').toggleClass('on');
        
            if ( $(this).html() == "Mais informações") {
                
            localStorage.setItem('rdpilm','ativado');
            console.log(localStorage.getItem('rdpilm'));
            $(this).html('Menos informações');
                
            } else {
                localStorage.setItem('rdpilm','desativado');
                console.log(localStorage.getItem('rdpilm'));
                $(this).html('Mais informações');
    
            }
    
    });
    
    if ( localStorage.getItem('rdpilm') == 'ativado') {
        
        $('.mais-inf-rdp span').addClass('active');
        $('.mais-inf-rdp span').parents('.mais-inf-rdp').siblings('.iluminim-inf-rdp').addClass('on');
        $('.mais-inf-rdp span').html('Menos informações');
    
    } else {
        $('.mais-inf-rdp span').removeClass('active');
        $('.mais-inf-rdp span').parents('.mais-inf-rdp').siblings('.iluminim-inf-rdp').removeClass('on');
        $('.mais-inf-rdp span').html('Mais informações');
    }	        
    
    $(`<div class="wrap_sytem_logo hide">
    <a href="https://play.google.com/store/apps/details?id=br.com.moblite.app.www.iluminim.com.br" class="logo_android">
        <span class="icon_apple"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 469.847 469.847" style="enable-background:new 0 0 469.847 469.847;" xml:space="preserve" width="23px" height="23px"><g><path style="fill:#2196F3;" d="M270.336,234.965L34.39,462.165c-11.049-7.551-17.609-20.111-17.493-33.493V41.258  C16.781,27.876,23.341,15.316,34.39,7.765L270.336,234.965z" data-original="#2196F3"/><path style="fill:#4CAF50;" d="M352.896,155.605l-82.56,79.36L34.39,7.765c0.889-0.689,1.815-1.33,2.773-1.92  c12.47-7.558,28.046-7.802,40.747-0.64L352.896,155.605z" data-original="#4CAF50"/><path style="fill:#FFC107;" d="M452.95,234.965c0.154,15.107-8.055,29.061-21.333,36.267l-78.72,43.093l-82.56-79.36l82.56-79.36  l78.72,43.093C444.895,205.904,453.104,219.858,452.95,234.965z" data-original="#FFC107"/><path style="fill:#F44336;" d="M352.896,314.325L77.91,464.725c-12.729,7.051-28.246,6.807-40.747-0.64  c-0.958-0.59-1.884-1.231-2.773-1.92l235.947-227.2L352.896,314.325z" data-original="#F44336"/></g> </svg><span>
        <span class="txtbaixe">Baixe na</span>
        <span class="txt_apps">Google Play</span>
    </a>
    
    <a href="javascript:void(0)" class="logo_app">
        <span class="icon_apple"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 305 305" style="enable-background:new 0 0 305 305;" xml:space="preserve" width="23px" height="23px" class=""><g><g id="XMLID_228_"><path id="XMLID_229_" d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305 c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305 c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941 c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078 c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152 c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813 c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097 c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008 C78.894,73.643,54.298,88.535,40.738,112.119z" data-original="#000000" class="active-path" fill="#000000"/><path id="XMLID_230_" d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379 c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257 c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z" data-original="#000000" class="active-path" fill="#000000"/></g></g> </svg><span>
        <span class="txtbaixe">Baixe na</span>
        <span class="txt_apps">App Store</span>
    </a></div>`).prependTo('.mais-inf-rdp+div>.conteiner');
        
}