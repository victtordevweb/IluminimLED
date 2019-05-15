

class TodasAsPaginas{
    static htmlMenuIluminim(){
        return `
        <li class="refletores-mt"><a href="/refletores-de-led?sort=mais_vendidos">Refletores LED</a></li>
        <li class="luminarias-mt"><a href="/luminarias-led?sort=mais_vendidos">Luminárias LED</a></li>
        <li class="spots-mt"><a href="/spots?sort=mais_vendidos">Spot LED</a></li>
        <li class="arandelas-mt"><a href="/arandela-led?sort=mais_vendidos">Arandelas LED</a></li>
        <li class="fitas-mt"><a href="/fitas-de-led?sort=mais_vendidos">Fitas LED</a></li>
        <li class="lampadas-mt"><a href="/lampada/led?sort=mais_vendidos">Lâmpadas LED</a></li>
        <li class="espetos-mt"><a href="/espeto-led?sort=mais_vendidos">Espetos LED</a></li>
        <li class="pendentes-mt"><a href="/pendente-led?sort=mais_vendidos">Pendentes LED</a></li>
        <li class="camera-seg-mt"><a href="/camera-seguranca-led?sort=mais_vendidos">Camera Segurança LED</a></li>
        <li class="led-solar-mt"><a href="/led-solar?sort=mais_vendidos">LED Solar</a></li>
        <li class="acessorios-mt"><a href="/acessorios-para-leds?sort=mais_vendidos">Acessórios LED</a></li>
        <li class="kits-mt"><a href="/kits-especiais?sort=mais_vendidos">Kits Especiais</a></li>
        <li class="lancamentos-mt"><a href="/lancamentos-led?sort=mais_vendidos">Lançamentos</a></li>
        <li class="ofertas-sem-mt"><a href="/ofertadasemana?sort=mais_vendidos">Oferta da Semana</a></li>
        `;
    }

    static menuIluminimCategoria(){
        $('.pagina-categoria .menu.lateral.outras .nivel-um').html(`${this.htmlMenuIluminim}`);
    }

    static scriptBarraFlutuante(){
        var $class = this
        function barraFixed(){ 
            /* Reorganiza Barra Flutuante */
            $('div#barraTopo > .conteiner > .row-fluid > .span3:first-child').removeClass('span3').addClass('span2 logo_iluminim');
            $('div#barraTopo > .conteiner > .row-fluid > .span3:nth-child(2)').removeClass('span3').addClass('span5 atalhos_flutuantes');
            $('div#barraTopo > .conteiner > .row-fluid > .span6').removeClass('span6').addClass('span5 busca_cart');
            $('div#barraTopo .logo_iluminim a').html('<img src="https://cdn.awsli.com.br/400x300/930/930730/logo/09cab63e0e.png" title="Iluminim LED">');
            $('div#barraTopo .atalhos_flutuantes').html($('.conteiner-principal> #cabecalho .central_atendimento_cb').clone())
            $(`
                <div class="menu_barra_topo">
                <div class="wrap_elements">
                <div class="menu-block">
                    <div class="wrap-txt">
                    <span>Menu de Categorias</span>
                    </div>
                </div>

            <ul class="dropdown-menu-barratopo" style="display:none;">
                ${$class.htmlMenuIluminim}
            </ul>

            </div>
            </div>`).appendTo('div#barraTopo .atalhos_flutuantes');

            $('#barraTopo .atalhos_flutuantes .menu-block').click(function(){
                $(this).toggleClass('active');
                $(this).siblings('ul').slideToggle(500);
            });



            /* Botao Hide/Show Barra Flutuante */
            $('<div class="close-barra-topo">x</div>').appendTo('div#barraTopo > .conteiner');
            $('<div class="conteiner show-bar-top"><div class="show-barra-topo"><i class="icon-search"></i></div></div>').appendTo('body');

            $('.close-barra-topo').click(function(){
                $('body').addClass('barra-off');
            });
            $('.show-barra-topo').click(function(){
            $('body').removeClass('barra-off');
            });

            $(window).scroll(function(){
            if ( $(window).scrollTop() < 260 ) {
                $('.show-bar-top').addClass('off-b');
            } else {
            $('.show-bar-top').removeClass('off-b');
                }

            });
        }

        function maisBuscadosBarraFlutuante(){
            if( $('body.pagina-inicial').length > 0 || $('body.pagina-categoria').length > 0 ) {
                let items = [
                    {
                        link: '/ofertadasemana?sort=mais_vendidos',
                        nome: 'Oferta da Semana'
                    },
                    {
                        link: '/plafon-led-18w?sort=mais_vendidos',
                        nome: 'Plafon 18w'
                    },
                    {
                        link: '/luminaria-emergencia-led?sort=mais_vendidos',
                        nome: 'Luminária de Emergência'
                    },
                    {
                        link: '/lampada-led-15w?sort=mais_vendidos',
                        nome: 'Lâmpada LED 15w'
                    },
                    {
                        link: '/lampada-led-12w?sort=mais_vendidos',
                        nome: 'Lâmpada LED 12w'
                    },
                    {
                        link: '/plafon-led-25w?sort=mais_vendidos',
                        nome: 'Plafon 25w'
                    },
                    {
                        link: '/spot-led-5w?sort=mais_vendidos',
                        nome: 'Pendente'
                    },
                    {
                        link: '/arandela-led?sort=mais_vendidos',
                        nome: 'Arandela'
                    }
                ]
            
            let itemsHtml = items.map(item=> {
                return `<li class="${item.link.split('/')[1].split('?')[0]}"> <a href="${item.link}">${item.nome}</a></li>`
            }).join('');
            
            $(`<div class="barra-destaques"><div class="conteiner">
            <ul>
                ${itemsHtml}
            </ul>
            </div></div>`).appendTo('div#barraTopo');


          var lastScrollTop = 0;
          $(window).scroll(function(event){
            var st = $(this).scrollTop();
              if (st > lastScrollTop){
                $('.barra-destaques').slideUp(400);
              } else {
                if(!$('.barra-destaques').length) {
                  $('.barra-destaques').hide();
                }
                $('.barra-destaques').slideDown(400);
              }
            lastScrollTop = st;
          });

        }
        }

        barraFixed();
        maisBuscadosBarraFlutuante();
    }

    static barraInicialGif(obj){
        let barraInicialGif_CSS_inline  = obj.style_html;
        let barraInicialGif_posicaoFuncao = obj.posicao.funcao;
        let barraInicialGif_posicaoSeletor = obj.posicao.seletor;
        let barraInicialGif_bannerLink = obj.banner.link;
        let barraInicialGif_bannerImg = obj.banner.img;
        $(`<div class="banner-oferta" style="${barraInicialGif_CSS_inline}">
            <a href="${barraInicialGif_bannerLink}" alt="LED Ofertas Exclusivas">
                <img src="${barraInicialGif_bannerImg}"> 
            </a>
        </div>`)[barraInicialGif_posicaoFuncao](`${barraInicialGif_posicaoSeletor}`);
    }

    static reorganizacaoBarraInicial(){

        $(`<ul class="list-unstyled news-topbar">
            <li class="revendas-b-inicial">
            <a href="https://www.iluminim.com.br/pagina/seja-nosso-revendedor-led.html" target="_blank">Revendas</a>
            <div class="drop_box revendas-drop">
                <div class="wraped">
                <span class="titdropbox">Ofertas exclusivas para revenda.</span>
                <span class="p_txt">Pagamento em até 120 dias.</span>
                <span class="p_txt_dois">Entre em contato!</span>
                </div>
            </div>
            </li>
            
            <li class="empresas-b-inicial">
            <a href="https://www.iluminim.com.br/pagina/atendimento-empresarial.html" target="_blank">Empresas</a>
            <div class="drop_box empresas-drop">
                <div class="wraped">
                <span class="titdropbox">Condições diferenciadas para empresas.</span>
                <span class="p_txt">Acesse e saiba mais!</span>
                </div>
            </div>
            </li>
            <li class="cond-b-inicial">
            <a href="https://www.iluminim.com.br/pagina/led-para-condominio.html" target="_blank">Condomínios</a>
            <div class="drop_box cond-drop">
                <div class="wraped">
                <span class="titdropbox">Projeto personalizado para condomínios.</span>
                <span class="p_txt">Entre em contato agora para ter o seu!</span>
                </div>
            </div>
            </li>
            
            <li class="arquiteto-b-inicial">
            <a href="/pagina/cadastro-de-arquiteto.html" target="_blank">Arquitetos</a>
            <div class="drop_box arquiteto-drop">
                <div class="wraped">
                <span class="titdropbox">Benefícios para arquitetos.</span>
                <span class="p_txt">Acesse e saiba mais!</span>
                </div>
            </div>
            </li>
                
            <li class="minhaconta-b-inicial">
            <a href="conta">Minha conta</a>
                <div class="box-login-desktop">
                <div class="content-login">
                    <div class="entrar">
                        <a href="https://www.iluminim.com.br/conta/login">Entrar</a>
                    </div>
                    <div class="divider-login">
                        <span>ou</span>
                    </div>
                    <div class="cadastro">
                        <a href="https://www.iluminim.com.br/conta/login">Cadastrar</a>
                    </div>
                    <div class="acoes-mob">
                        <span class="minha-conta">
                        <a href="https://www.iluminim.com.br/conta/index">Minha Conta</a>
                        </span>
                        <span class="meus-pedidos">
                        <a href="https://www.iluminim.com.br/conta/pedido/listar">Meus Pedidos</a>
                        </span>
                    </div>
                </div>
                </div>
            </li>
            
            <li class="listadesejo-b-inicial">
            <a href="desejos">Lista de Desejos</a>
            <div class="drop_box desejos-drop">
                <div class="wraped">
                <span class="titdropbox">Favorite os seus produtos preferidos </span><span>e acompanhe as ofertas :)</span>
                <span class="p_txt">Acesse agora a lista de desejos!</span>
                </div>
            </div>
            </li>
            
            <li class="meuspedidos-b-inicial">
            <a href="pedidos">Meus pedidos</a>
            </li>
            </ul>`).prependTo('.barra-inicial .canais-contato');
    }

    static scriptsCabecalho(){
        function incluiTextoNoDropdownLogado(){
            $('#cabecalho .btn-group.open>.dropdown-menu > li:last-child').ready(function(){
                if($('#cabecalho .btn-group.open>.dropdown-menu > li:last-child').length > 0){
                let name = $.trim($('#cabecalho a.botao.secundario.pequeno.dropdown-toggle').text()).split('Olá, ')[1].split(' ')[0];
                    $(this).find('#cabecalho .dropdown-menu > li:last-child a').before(`<span>Não é <span>${name}?</span></span>`);
                }
            });
        }

        function mascaraBuscas(){
            $('<div class="mask-src-desktop"></div>').prependTo('#cabecalho .busca.borda-alpha');
            $('<div class="mask-src-desktop"></div>').prependTo('#barraTopo .busca.borda-alpha');

            $('#cabecalho .busca.borda-alpha input#auto-complete,#barraTopo form input').click(function(){
                $('body').addClass('src-active');
            });
            $('.mask-src-desktop').click(function(){
                $('body').removeClass('src-active');
            });

            $(window).scroll(function(){
                if($('body').hasClass("src-active")){
                $('.busca input:visible').select();
                    if($(window).scrollTop() <= 100){
                        $('.busca input:visible').select();
                    }
                }
            });
            $('.busca input').bind('keyup', function(){
                $('.busca input').val($(this).val());
            });
        }

        function carrinhoVazioTxt(){
            if( $('.carrinho>a strong.qtd-carrinho').html() == '0') {
            $('body').addClass('carrinho-vazio-ilm');
            $(`<div class="carrinho-vazio-txt"><span>
                Seu carrinho está vazio
                </span></div>`).appendTo('.carrinho-vazio-ilm .carrinho');
            } else {
                $('body').removeClass('carrinho-vazio-ilm');
            }
        }
        
        
        incluiTextoNoDropdownLogado();
        mascaraBuscas();
        carrinhoVazioTxt();
    }

    static centralAtendimento(){
        $(`
            <div class="central_atendimento_cb">
            <div class="wrap_atendimento">
            <div class="ctrl-atdm-block">
                <div class="wrap-txt">
                <span>Central de</span>
                <span>Atendimento</span>
                </div>
            </div>
                <ul class="dropdown-atendimento">
                <div class="title-central-atdm">Entre em contato conosco</div>

                <div class="horario_funcionamento_iluminim">
                <div class="wrap_func">
                    <span style="display:block">Compre por telefone: de Segunda a Sexta das 9h às 18h</span>
                    <span class="p_func">Compre online: 24 horas conectado</span>
                </div>
                </div>
                
                <h4 class="telefone">TELEFONES</h4>
            
                <div class="__fone">
                <span class="numerotelefone">(11) 4210-0494</span>  
                <span class="cidadep">São Paulo</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(21) 2042-0247</span>
                <span class="cidadep">Rio de Janeiro</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(51) 3557-5070</span>
                    <span class="cidadep">Rio Grande do Sul</span>
                </div>
                
                <div class="__fone">
                    <span class="numerotelefone">(48) 4042-1882</span>
                <span class="cidadep">Santa Catarina</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(31) 4042-1750</span>
                <span class="cidadep">Minas Gerais</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(41) 4042-1248</span>
                    <span class="cidadep">Paraná</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(71) 4042-1384</span>
                    <span class="cidadep">Bahia</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(81) 4042-2214</span>
                    <span class="cidadep">Pernambuco</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(62) 3142-2314</span>
                    <span class="cidadep">Goiás</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">(61) 4042-6234</span>
                    <span class="cidadep">Distrito Federal</span>
                </div>
                
                <div class="__fone">
                <span class="numerotelefone">0800 580-0332</span>
                <span class="cidadep">Todas as Regiões</span>
                </div>
                
                <div class="__email">
                <span class="emailt">E-MAIL</span>
                <span class="emailp">vendas@iluminim.com.br</span>
                </div>
                
                <div class="__modal">
                <span class="duvidas">Dúvidas?</span>
                <span class="faleconoscop"><a href="#modalContato" data-toggle="modal" data-target="#modalContato">Fale conosco</a></span>
                </div>

            </ul>
            </div>
            </div>
            `).appendTo('#cabecalho .inferior');
    }

    static menuSuperior(obj, carrousel){
         const categoria_TodosOsDepartamentos = function(){
            $(`
                <div class="todos_departamentos __personalizado">
                <div class="wrap_categorias">
                        <div class="nav-column">
                        <a href="/refletores-de-led?sort=mais_vendidos"><h3>Refletores LED</h3></a>
                            <ul>
                            <li><a href="/refletor-led?sort=mais_vendidos">Refletor LED Branco</a></li>
                            <li><a href="/refletor-led-rgb">Refletor LED Colorido</a></li>
                            <li><a href="https://www.iluminim.com.br/refletor-led-verde">Refletor LED Verde</a></li>
                            <li><a href="/refletor-microled?sort=mais_vendidos">Refletor Micro LED</a></li>
                            <li><a href="/refletor-microled?sort=mais_vendidos">Refletor Micro LED Slim</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor Micro LED Ultra Thin</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor Micro LED Ultra</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor Micro LED Multifocal</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor Micro LED Solar</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor Micro LED Performance</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor Micro LED Prismático</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor LED Sensor</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Refletor LED Recarregável</a></li>
                            <li><a href="/refletor-led-smd-ultra-thin">Todos Modelos</a></li>
                            </ul>
                                    
                        <a href="/fitas-de-led?sort=mais_vendidos"><h3>Fitas LED</h3></a>
                            <ul>
                            <li><a href="/fita-led-rgb">Fitas LED Coloridas</a></li>
                            <li><a href="/fita-led-branca">Fitas LED Branco</a></li>
                            <li><a href="/kit-fita-led">Kits Fitas LED</a></li>
                            <li><a href="/mangueiras-led">Mangueiras LED</a></li>
                            <li><a href="/fitas-de-led">Todos Modelos</a></li>
                            </ul>
                        </div>

                        <div class="nav-column">
                        <a href="/luminarias-led?sort=mais_vendidos"><h3>Luminárias LED</h3></a>
                            <ul>
                                <li><a href="/plafon-led-sobrepor?sort=mais_vendidos">Plafon LED Sobrepor</a></li>
                                <li><a href="/plafon-led-embutir?sort=mais_vendidos">Plafon LED Embutir</a></li>
                                <li><a href="/luminarias-publicas-led">Luminárias Públicas LED</a></li>
                                <li><a href="/luminaria-emergencia-led">Luminárias Emergência LED</a></li>
                                <li><a href="/pendente-led?sort=mais_vendidos" class="tag-novo">Pendentes LED</a></li>
                                <li><a href="/arandela-led">Arandelas LED</a></li>
                                <li><a href="/arandela-led">Lustre LED</a></li>
                                <li><a href="/arandela-led">Abajur LED</a></li>
                                <li><a href="/luminarias-led">Todos Modelos</a></li>
                            </ul>
                                    
                        <a href="/spots?sort=mais_vendidos"><h3>Spots Dicróica LED</h3></a>
                            <ul>
                            <li><a href="/spot-led-quadrado ">Spot LED Quadrado</a></li>
                            <li><a href="/spot-led-redondo">Spot LED Redondo</a></li>
                            <li><a href="/spot-led-trilho-eletrificado">Spot LED Trilho</a></li>
                            <li><a href="/balizador-led">Balizadores LED</a></li>
                            <li><a href="/spots?sort=mais_vendidos">Todos Modelos</a></li>	
                            </ul>
                        
                        <a href=""><h3>Espetos LED</h3></a>
                            <ul>
                            <li><a href="">Todos Modelos</a></li>
                            </ul>
                        </div>   

                        <div class="nav-column">
                        <a href="/lampada-led?sort=mais_vendidos"><h3>Lâmpadas LED</h3></a>
                            <ul>
                            <li><a href="/lampada-led-milho">Lampada LED Milho</a></li>
                            <li><a href="/lampada-led-bulbo">Lampada LED Bulbo </a></li>
                            <li><a href="/lampada-led-tubular">Lampada LED Tubular</a></li>
                            <li><a href="/vela-led">Lampada LED Vela</a></li>
                            <li><a href="/par-led">Lampada LED PAR</a></li>
                            <li><a href="/halopin-led">Lampada LED Halopin</a></li>
                            <li><a href="/dicroica-led">Lampada LED Dicroica</a></li>
                            <li><a href="/led-retro">Lampada LED Vintage</a></li>
                            <li><a href="/lampada-led-alta-potencia">Lampada LED Alta Potência</a></li>
                            <li><a href="/lampada-led-espiral">Lâmpada LED Espiral</a></li>
                            <li><a href="/lampada-led-12w-rgb-com-caixa-de-som-bluetooth-e-controle-remoto">Lâmpada LED RGB</a></li>
                            <li><a href="/lampada-led-bolinha">Lampada LED Bolinha</a></li>
                            <li><a href="/lampada-led-wi-fi">Lampada LED Wi-fi</a></li> 
                            <li><a href="/lampada-led-wi-fi">Lampada LED Globo</a></li> 
                            <li><a href="/lampada-led-wi-fi">Lampada LED AR</a></li> 
                            <li><a href="/lampada-led-wi-fi">Lampada LED T40</a></li> 
                            <li><a href="/lampada-led-wi-fi">Lampada LED Automotiva</a></li>
                            </ul>         
                        </div>
                
                
                        <div class="nav-column">
                        <a href="/acessorios-para-leds?sort=mais_vendidos"><h3>Acessórios de Reposição</h3></a>
                            <ul>
                                <li><a href="">Fonte Chaveada</a></li>
                                <li><a href="">Fonte Convencional</a></li>
                                <li><a href="">Chips LED</a></li>
                                <li><a href="">Drivers LED</a></li>
                                <li><a href="">Soquetes LED</a></li>
                                <li><a href="">Conectores LED</a></li>
                                <li><a href="">Emendas LED</a></li>
                                <li><a href="">Todos modelos</a></li>
                            </ul>
                        
                        <a href="/kits-especiais?sort=mais_vendido"><h3>Câmeras Segurança LED</h3></a>
                            <ul>
                                <li><a href="#">Câmeras LED Bullet</a></li>
                                <li><a href="#">Câmeras LED Dome</a></li>
                                <li><a href="#">Câmeras LED Wi-Fi</a></li>
                                <li><a href="#">DVR Stand Alone</a></li>
                                <li><a href="#">Todos Modelos</a></li>
                            </ul>
                        
                        <a href="/compre-por-ambiente?sort=mais_vendidos"><h3>Festa LED</h3></a>
                        <ul>
                            <li><a href="#">Todos os Modelos</a></li>
                        </ul>
                        </div>
                    
                    <div class="nav-column">
                        <a href="/refletores-de-led?sort=mais_vendidos"><h3>Kits LED</h3></a>
                            <ul>
                            <li><a href="#">Kit Refletores Holofotes LED</a></li>
                            <li><a href="#">Kit Luminárias Plafons LED</a></li>
                            <li><a href="#">Kit Emergência LED</a></li>
                            <li><a href="#">Kit Spots Dicróica LED</a></li>
                            <li><a href="#">Kit Balizadores LED</a></li>
                            <li><a href="#">Kit Lampadas LED</a></li>
                            <li><a href="#">Kit Espetos LED</a></li>
                            <li><a href="#">Kit Fitas LED</a></li>
                            <li><a href="#">Todos Kits</a></li>
                            </ul>
                                    
                        <a href="/fitas-de-led?sort=mais_vendidos"><h3>Compre por Ambiente</h3></a>
                            <ul>
                            <li><a href="/led-para-sala-de-estar">LED para Sala de Estar</a></li>
                            <li><a href="/led-para-escritorio">LED para Escritório</a></li>
                            <li><a href="/led-para-banheiros">LED para Banheiro</a></li>
                            <li><a href="/led-para-cozinha">LED para Cozinha</a></li>
                            <li><a href="/led-para-dormitorios">LED para Quarto</a></li>
                            </ul>
                    </div>
                </div>

                <div class="bannerdepartamentos">
                    <img src="https://cdn.awsli.com.br/930/930730/arquivos/bannercat.png">
                </div>
                
                </div>
                `).appendTo(obj.TodosOsDepartamentos.seletor);
        }();

        const categoria_RefletoresLED = function(){
                let objCat = obj.RefletoresLED;
                $(`<div id="menu-led-superior-home" class="__personalizado __carrousel">
                        <div class="ver-tudo-categoria"><a href="#" class="pull-right link-cat-menu">Ver tudo em <b></b></a></div>

                        <ul class="wrapper-itens">
                    
                        <li><a href="/refletor-microled?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-micro-led-new.png" alt="categoria refletor micro led"/></a></li>
                    
                        <li><a href="/refletor-micro-led-slim?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-03-10.png" alt="categoria refletor micro led slim"/></a></li>
                    
                        <li><a href="/refletor-micro-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-slim-rgb-26-10.png" alt="categoria refletor micro slim rgb"/></a></li>
                    
                        <li><a href="/refletor-micro-led-slim-verde?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-slim-rgb-verde-26-10.png" alt="categoria refletor micro slim rgb verde"/></a></li>
                        
                        <li><a href="/refletor-led-smd-ultra-thin?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-micro-led-ultra-thin.png" alt="categoria refletor micro led ultra thin"/></a></li>
                        
                        <li><a href="/refletor-microled-ultra?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-micro-led-ultra.png" alt="categoria refletor micro led ultra"/></a></li>
                        
                        <li><a href="/refletor-micro-led-multifocal?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-micro-led-multifocal.png" alt="categoria refletor led multifocal"/></a></li>
                        
                        <li><a href="/refletor-led-solar?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-micro-led-solar.png" alt="categoria refletor micro led solar"/></a></li>
                        
                        <li><a href="/refletor-led-alta-performance?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-refletor-micro-led-performance-29-10-18.png" alt="categoria refletor micro led performance"/></a></li>
                        
                        <li><a href="/refletor-led-prismatico-pro?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-refletor-micro-led-prismatico-29-10-18.png" alt="categoria refletor micro led prismatico"/></a></li>
                    
                        <li><a href="/refletor-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-super-led.png" alt="categoria refletor super led"/></a></li>
                            
                        <li><a href="/refletor-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-item-refletor-super-led-rgb.png" alt="categoria refletor super led rgb"/></a></li>
                            
                        <li><a href="/refletor-led-verde?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-super-led-verde.png" alt="categoria refletor super led verde"/></a></li>
                        
                        <li><a href="/refletor-led-sensor?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-super-led-sensor.png" alt="categoria refletor super led sensor"/></a></li>
                        
                        <li><a href="/refletor-led-recarregavel?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-led-recarregavel.png" alt="categoria refletor led recarregavel"/></a></li>
                        
                        <li><a href="/espeto-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-espeto-led.png" alt="categoria espeto led"/></a></li>
                        
                        </ul>
                        
                        <div class="banner_menu">
                            <a href="${objCat.bannerMenu.link}"><img src="${objCat.bannerMenu.img}">
                        </a>
                        </div>
                    </div>`).insertBefore(objCat.seletor);
        
        }();

        const categoria_LuminariasLED = function(){
            let objCat = obj.LuminariasLED;
            $(`<div id="menu-led-superior-home" class="__personalizado __carrousel">
            <div class="ver-tudo-categoria"><a href="#" class="pull-right link-cat-menu">Ver tudo em <b></b></a></div>

            <ul class="wrapper-itens">
        
            <li><a href="/plafon-led-embutir?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-embutir.png" alt="categoria plafon led embutir"/></a></li>

            <li><a href="/plafon-led-sobrepor?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-sobrepor.png" alt="categoria plafon led sobrepor"/></a></li>

            <li><a href="/arandela-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-arandela-led.png" alt="categoria arandela led"/></a></li>

            <li><a href="/luminaria-emergencia-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07luminariaemergia-led.png" alt="categoria luminária emergência led"/></a></li>

            <li><a href="/luminarias-posto-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-lumi-posto-led.png" alt="categoria luminária posto led"/></a></li>

            <li><a href="/luminarias-publicas-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-lumi-publica-led.png" alt="categoria luminária pública led"/></a></li>

            <li><a href="/luminaria-led-industrial-highbay?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-lumi-hightbay.png" alt="categoria luminária hightbay"/></a></li>

            <li><a href="/luminaria-tartargura-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-superior-sub-carrossel-luminaria-tartaruga-led.png" alt="categoria tartaruga led"/></a></li>

            <li><a href="/luminaria-solar-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-lumi-solar-led.png" alt="categoria luminária solar led"/></a></li>

            <li><a href="/pendente-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-pendente-led.png" alt="categoria pendente led"/></a></li>

            <li><a href="/lustre-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-lustre-led.png" alt="categoria lustre led"/></a></li>
            
            </ul>
            
            <div class="banner_menu">
                <a href="${objCat.bannerMenu.link}"><img src="${objCat.bannerMenu.img}">
            </a>
            </div>
        </div>`).insertBefore(objCat.seletor);

        }();

        const categoria_SpotsLED = function(){
            let objCat = obj.SpotsLED;
            $(`<div id="menu-led-superior-home" class="__personalizado __carrousel">
            <div class="ver-tudo-categoria"><a href="#" class="pull-right link-cat-menu">Ver tudo em <b></b></a></div>

            <ul class="wrapper-itens">

                <li><a href="/spot-led-redondo?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDRedondo-03-08.png" alt="categoria spot dicroica led redondo"/></a></li>

                <li><a href="/spot-led-quadrado?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDQuadrado-03-08-corrig.png" alt="categoria Sport dicroica led quadrado"/></a></li>
            
                <li><a href="/kits-spots-led-dicroica?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/kits-led-spots-03-08.png" alt="categoria kits led spots"/></a></li>
            
                <li><a href="/mini-spot-led-redondo?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/mini-spot-led-redondo-03-08.png" alt="categoria mini spot led redondo"/></a></li>
            
                <li><a href="/mini-spot-led-quadrado?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/mini-spot-led-quadrado-03-08.png" alt="categoria mini spot led quadrado"/></a></li>
            
                <li><a href="/spot-led-trilho-eletrificado?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/spot-led-trilho-categoria-26-11-18.png" alt="categoria spot led trilho"/></a></li>
            
                <li><a href="/spot-led-cristal?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-spot-led-cristal-new.png" alt="categoria sport led cristal"/></a></li>
            
                <li><a href="/balizador-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/spot-balizador-led-sub-categoria-menu-superior-23-10-001.png" alt="categoria spot balizador led"/></a></li>
                        
            </ul>
            
            <div class="banner_menu">
                <a href="${objCat.bannerMenu.link}"><img src="${objCat.bannerMenu.img}">
            </a>
            </div>
        </div>`).insertBefore(objCat.seletor);

        }();

        const categoria_LampadasLED = function(){
            let objCat = obj.LampadasLED;
            $(`<div id="menu-led-superior-home" class="__personalizado __carrousel">
            <div class="ver-tudo-categoria"><a href="#" class="pull-right link-cat-menu">Ver tudo em <b></b></a></div>

            <ul class="wrapper-itens">

                <li><a href="/lampada-led-bulbo?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-bulbo-ms.png" alt="categoria lampada led bulbo"/></a></li>

                <li><a href="/lampada-led-tubular?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-tubular-ms-01.png" alt="categoria lampada led tubular"/></a></li>
            
                <li><a href="/led-retro?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-vintage-ms.png" alt="categoria lampada led vintage"/></a></li>
            
                <li><a href="/lampada-led-milho?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-milho-ms.png" alt="categoria lampada led milho"/></a></li>
            
                <li><a href="/lampada-led-espiral?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-espiral-ms.png" alt="categoria lampada led espiral"/></a></li>
            
                <li><a href="/lampada-led-alta-potencia?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-alta-potencia-ms.png" alt="categoria lampada led alta potencia"/></a></li>
            
                <li><a href="/halopin-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-halopin-ms.png" alt="categoria lampada led halopin"/></a></li>
            
                <li><a href="/vela-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-vela-ms.png" alt="categoria lampada led vela"/></a></li>
            
                <li><a href="/lampada-led-t40?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-T40-ms.png" alt="categoria  lampada led T40"/></a></li>
            
                <li><a href="/lampada-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-rgb-ms.png" alt="categoria lampada led rgb"/></a></li>
            
                <li><a href="/par-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-par-ms.png" alt="categoria lampada led par"/></a></li>
            
                <li><a href="/lampada-led-ar?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-ar-ms.png" alt="categoria lampada led ar"/></a></li>
            
                <li><a href="/dicroica-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-dicroica-ms.png" alt="categoria lampada led dicroica"/></a></li>
            
                <li><a href="/lampada-led-globo-balloon?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-globo-ms.png" alt="categoria lampada led globo"/></a></li>
            
                <li><a href="/lampada-led-bolinha?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-bolinha-ms.png" alt="categoria lampada led bolinha"/></a></li>
            
                <li><a href="/lampada-led-wi-fi?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-wifi-ms.png" alt="categoria lampada led wifi"/></a></li>
            
                <li><a href="/lampada-led-prato?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-lampada-led-prato-ms.png" alt="categoria lampada led prato"/></a></li>
            
                <li><a href="/led-automotivo?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-automotiva-sub-menu-superior.png" alt="categoria lampada led automotiva"/></a></li>
            
                <li><a href="/kit-lampadas-de-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/4-12-sub-carrossel-kits-lampadas-led.png" alt="categoria kits lampadas led"/></a></li>
            
            </ul>
            
            <div class="banner_menu">
                <a href="${objCat.bannerMenu.link}"><img src="${objCat.bannerMenu.img}">
            </a>
            </div>
        </div>`).insertBefore(objCat.seletor);

        }();

        const categoria_FitasLED = function(){
            let objCat = obj.FitasLED;
            $(`<div id="menu-led-superior-home" class="__personalizado __carrousel">
            <div class="ver-tudo-categoria"><a href="#" class="pull-right link-cat-menu">Ver tudo em <b></b></a></div>

            <ul class="wrapper-itens">
                <li><a href="/fita-led-branca?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-frio.png" alt="categoria fita led branco frio"/></a></li>

                <li><a href="/fita-led-branco-morno?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-morno.png" alt="categoria fita led branco morno"/></a></li>
            
                <li><a href="/fita-led-branco-quente?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-quente.png" alt="categoria fita led branco quente"/></a></li>
            
                <li><a href="/fita-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/corrigfita-led-rgb-colorida-sub-25-07-18.png" alt="categoria fita led rgb colorida sub" /></a></li>
            
                <li><a href="/kit-fita-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-kits.png" alt="categoria fita led kits"/></a></li>
            
                <li><a href="/fita-led-verde?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-verde.png" alt="categoria fita led verde"/></a></li>
            
                <li><a href="/fita-led-vermelha?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-vermelha.png" alt="categoria fita led vermelha" /></a></li>
            
                <li><a href="/fita-led-azul?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-azul.png" alt="categoria fita led azul"/></a></li>
            
                <li><a href="/fita-led-rosa?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-fita-led-rosa-29-08.png" alt="categoria fita led rosa"/></a></li>
            
                <li><a href="/fita-led-ultravioleta?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-menu-fita-led-ultra-violeta-29-08.png" alt="categoria fita led ulta violeta"/></a></li>
            
                <li><a href="/fita-led-12v?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-12v.png" alt="categoria fita led 12v"/></a></li>
            
                <li><a href="/mangueiras-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-led-25-07-mangueira.png" alt="categoria led mangueira"/></a></li>
            
            </ul>
            
            <div class="banner_menu">
                <a href="${objCat.bannerMenu.link}"><img src="${objCat.bannerMenu.img}">
            </a>
            </div>
        </div>`).insertBefore(objCat.seletor);

        }();


        const categoria_AcessoriosLED = function(){
            let objCat = obj.AcessoriosLED;
            $(`<div id="menu-led-superior-home" class="__personalizado __carrousel">
                <div class="ver-tudo-categoria"><a href="#" class="pull-right link-cat-menu">Ver tudo em <b></b></a></div>

                <ul class="wrapper-itens">
                    <li><a href="/fonte-chaveada-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/fonte-chaveada-led-carr-sub-menu-1-min-two.png" alt="categoria fonte chaveada led"/></a></li>
                    
                    <li><a href="/fonte-convencional?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/fonte-convencional-led-carr-sub-menu-2-min-two.png" alt="categoria fonte convencional led"/></a></li>
                    
                    <li><a href="/chip-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/chip-led-carr-sub-menu-3-min-two.png" alt="categoria chip led"/></a></li>
                    
                    <li><a href="/controles?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/controle-led-carr-sub-menu-4-min-two.png" alt="categoria controle led"/></a></li>
                    
                    <li><a href="/drivers?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/driver-led-carr-sub-menu-5-min-two.png" alt="categoria driver led"/></a></li>
                    
                    <li><a href="/emenda-para-fita-de-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/emenda-led-carr-sub-menu-6-min-two.png" alt="categoria emenda led"/></a></li>	
                    
                    <li><a href="/soquete-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/soquete-led-carr-sub-menu-7-min-two.png" alt="categoria soquete led"/></a></li>
                    
                    <li><a href="/conectores-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/conector-led-carr-sub-menu-8-min-two.png" alt="categoria conector led"/></a></li>
                    
                    <li><a href="/amplificadores-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/amplificador-led-carr-sub-menu-9-min-two.png" alt="categoria amplificador led"/></a></li>
                    
                    <li><a href="/interruptores-tomadas-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/interruptor-tomada-led-carr-sub-menu-10-min-two.png" alt="categoria interruptor tomada led"/></a></li>
                    
                    <li><a href="/dimmer-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/dimmer-led-carr-sub-menu-min-two.png" alt="categoria dimmer led"/></a></li>
                    
                    <li><a href="/cabo-de-energia?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/frios-e-cabos-sub-categoria-menu-superior-min-two.png" alt="categoria frios e cabos"/></a></li>      
                </ul>
            
            <div class="banner_menu">
                <a href="${objCat.bannerMenu.link}"><img src="${objCat.bannerMenu.img}">
            </a>
            </div>
        </div>`).insertBefore(objCat.seletor);

        }();

        const categoria_OfertaDaSemana = function(){
            let objCat = obj.OfertaDaSemana;
                    $(`<div id="menu-led-superior-home" class="oferta_semana __personalizado __carrousel">

                    <div class="carrousel-prods-ledfriday-menu">
                    <div class="box-cronometro-lf">
                        <span class="titulo-oferta">Oferta da semana</span>
                        <div class="plg-cronometro-menu">
                            <span></span>
                        </div>
                    </div>
                    <div class="carrousel-prods">
                    <div class="produto_iluminim">
                    <a class="link_prod" href="/kit-20-luminaria-plafon-25w-led-embutir-branco-frio">
                    <div class="desconto_prod">-38%</div>
                    <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/PS-Q25WBF-KIT20-15-01-ajust.png"/></div>
                    
                    <div class="info_prod_iluminim">
                    <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Kit 20 Luminária Plafon 25w LED Embutir Branco Frio</div>
                        
                        <div class="stars-iluminim-bf"></div>
                    
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 1.199,99</span> <span class="preco_prod">R$ 739,90</span></div>
                    <div class="parcelas_prod"><span>até <b>12</b> de <b>R$ 61,65</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 665,91</b> <span class="no_boleto">no boleto</span></span></div>
                    </div>
                    
                    </a>
                    </div>
                    
                    <div class="produto_iluminim">
                    <a class="link_prod" href="/refletor-micro-led-slim-200w-branco-frio">
                    <div class="desconto_prod">-71%</div>
                    <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/RSPM-200WBF_15-01.png"/></div>
                    <div class="info_prod_iluminim">
                        <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Refletor Holofote MicroLED Slim 200W Branco Frio</div>
                        <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 659,90</span><span class="preco_prod">R$ 189,90</span></div>
                    <div class="parcelas_prod"><span>até <b>12x</b> de <b>R$ 15,75</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 170,10</b> <span class="no_boleto">no boleto</span></span></div>
                    </div>
                    </a>
                    </div>
                    
                    
                    <div class="produto_iluminim">
                    <a class="link_prod" href="/luminaria-plafon-60x60-48w-led-embutir-branco-frio-borda-branca">
                        <div class="desconto_prod">-59%</div>
                    <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/PS-Q48WBF-60X60-15-01.png"/></div>
                    
                    <div class="info_prod_iluminim">
                        <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Luminária Plafon 60x60 48W LED Embutir Branco Frio Borda Branca</div>
                        <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 399,00</span> <span class="preco_prod">R$ 159,90</span></div>
                    <div class="parcelas_prod"><span>até <b>12x</b> de <b>R$ 13,32</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 143,91</b> <span class="no_boleto">no boleto</span></span></div>
                    </div>
                    
                    </a>
                    </div>
                    
                    <div class="produto_iluminim">
                    <a class="link_prod" href="/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado">
                        <div class="desconto_prod">-64%</div>
                    <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/PG-Q25WBF-15-01.png"/></div>
                    
                    <div class="info_prod_iluminim">
                        <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Luminária Plafon 25w LED Sobrepor Branco Frio</div>
                        <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 124,90</span> <span class="preco_prod">R$ 44,90</span></div>
                    <div class="parcelas_prod"><span>até <b>4x</b> de <b>R$ 11,22</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 40,41</b> <span class="no_boleto">no boleto</span></span></div>
                    </div>
                    
                    </a>
                    </div>
                    
                    
                    </div>
                    </div>

                </div>`).insertBefore(objCat.seletor);
                
                $(objCat.cronometro.seletor).yuukCountDown({
                    starttime: objCat.cronometro.dataInicio,
                    endtime: objCat.cronometro.dataFim
                });

                objCat.carrousel();
                
        }();


        carrousel();

        const ajustMenu = function(){
            function quebraTexto(_this, first, last){
                $(_this).html(`<span class="__first">${first}</span><span class="__last">${last}</span>`);
            }
            $('.menu.superior .nivel-um > li > a >.titulo').each(function(){
                let txt = $(this).text()
                if ( txt.split(' ').length > 2 ) {
                    quebraTexto(this, txt.split(' ',2).join(' '), txt.split(' ',3)[2]);
                }else {
                    quebraTexto(this, txt.split(' ')[0], txt.split(' ')[1]);
                }
            });

            $('.menu.superior .ver-tudo-categoria').each(function(){
                let a = $(this).parents('.__personalizado.__carrousel').siblings('a');
                let aHref = a.attr('href')
                let aTitle = a.attr('title');
                $(this).children('a').attr('href',aHref).children('b').text(aTitle);
            });
        }();

    }

    static scriptsListagem(obj){
        const visualizacaoRapida = function(){
        if(obj.visualizacaoRapida.ativo == true){


            let arrayFotos = obj.visualizacaoRapida.ids;
            
            for(var i = 0; i < arrayFotos.length; i++){ 
                $(`<div class="btn_show_miniaturas">Visualização rápida</div>
                    <div class="mod_miniaturas">
                    <div class="wrap_modal">
                        <div class="content_miniaturas"><div class="div_load"><img src="https://uploaddeimagens.com.br/images/001/786/965/original/anm-iluminim-loading-18.gif"></div></div></div>'+
                </div>`).appendTo(`.listagem-item.prod-id-${arrayFotos[i]}`);

            $(`.listagem-item.prod-id-${arrayFotos[i]} .btn_show_miniaturas`).click(function(){

            if( $(this).parents('.listagem-item').find('.div_load').length < 1){
                $(this).parents('.listagem-item').find('.mod_miniaturas').addClass('show');
            }else {

                var nomeProd = $(this).parents('.listagem-item').find('a.nome-produto.cor-secundaria').text();

                $(this).siblings('.mod_miniaturas').addClass('show');

                var linkTeste = $(this).parents('.listagem-item').find('.produto-sobrepor').attr('href');

                $(this).parents('.listagem-item').find('.wrap_modal').prepend(`<div class="line_topo">
                <a class="name_prod"></a><span class="close_modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span></div>`);
                
                $(this).parents('.listagem-item').find('.name_prod').html(''+nomeProd+'').attr('href',''+linkTeste+'');
                var ee = $(this).parents('.listagem-item').find('.content_miniaturas');
                    ee.load(''+linkTeste+' .span12.produto > .row-fluid:first-child', function(){

                        $('.content_miniaturas .row-fluid .produto-compartilhar,.content_miniaturas .row-fluid span.cor-secundaria.pull-right,.content_miniaturas .row-fluid .cep, .content_miniaturas .row-fluid .breadcrumbs.borda-alpha,.content_miniaturas .row-fluid .parcelas-produto.borda-alpha.padrao').remove();
                    $('div#carouselImagem > ul > li:first-child').addClass('active');
                    $(this).parents('.listagem-item').find('.content_miniaturas .acoes-produto').append('<div class="wrapcrono"><span class="title_crono">Ofertas Expiram em:</span><ul class="clearfix" id="js_Modal"></ul></div>');
                            $('div#carouselImagem > ul > li').click(function(){
                                    $('div#carouselImagem > ul > li').removeClass('active');
                                    $(this).addClass('active');	
                                var srcGrande = $(this).find('a').attr('data-imagem-grande');
                            $(this).parents('.listagem-item').find('img#imagemProduto').attr('src',''+srcGrande+'');
                            });
                            var skuMove = $(this).parents('.listagem-item').find('.content_miniaturas .codigo-produto [itemprop="sku"]').text();
                            var pAntigo = $.trim($(this).parents('.listagem-item').find('.content_miniaturas s.preco-venda.titulo').text().replace('R$ ','').replace(',','.'));
                            var pNovo = $.trim($(this).parents('.listagem-item').find('.content_miniaturas strong.preco-promocional.cor-principal.titulo').text().replace('R$ ','').replace(',','.'));
                            var newEconomize = pAntigo - pNovo;
                            $(this).parents('.listagem-item').find('.content_miniaturas span.desconto-a-vista').before(`<div class="economize_modal">Economize: R$ ${newEconomize.toFixed(2)}</div>`);
                            $(this).parents('.listagem-item').find('.content_miniaturas h1.nome-produto.titulo.cor-secundaria').after(`<div class="new_sku">Referência: ${skuMove}</div>`);
                            var formating = $(this).parents('.listagem-item').find('.content_miniaturas .economize_modal').text().replace('.',',');
                        $(this).parents('.listagem-item').find('.content_miniaturas .economize_modal').text(`${formating}`);
                            $('.close_modal').click(function(){
                                $('.mod_miniaturas').removeClass('show');
                                $('.listagem-item div#carouselImagem > ul > li').removeClass('active');
                                $('.listagem-item div#carouselImagem > ul > li:first-child').addClass('active');
                            });
                            if( $(this).parents('.listagem-item').find('div#carouselImagem > ul > li').length > 5){
                                $(this).parents('.listagem-item').find('div#carouselImagem').addClass('no_if_iluminim');
                            $(this).parents('.listagem-item').find('div#carouselImagem > ul').slick({
                                dots: true,infinite: true,speed: 200,cssEase: 'linear',
                                slidesToShow: 5,slidesToScroll: 1,autoplay: false,autoplaySpeed: 5000
                            }); 
                            }
                            $('div#carouselImagem .owl-item li a').click(function(){
                                $('div#carouselImagem .owl-item li a').removeClass('active');
                                $(this).addClass('active');
                            });
                        $(this).parents('.listagem-item').find('.content_miniaturas #js_Modal').yuukCountDown({
                            starttime: '2016/11/12 00:00:00',
                            endtime: '2019/12/30 00:00:00',
                            notStartCallBack: function(time){
                            
                            },
                            startCallBack: function(time){
                            },
                            endCallBack: function(time){
                            $('#js_Modal').html('<span class="off-acabou">00 : 00 : 00</span>');
                            }
                        });
                    
                    });
            }
            });
            }
        }
        }();

        const descontoProdutos = function(){
            $('.listagem-item').each(function(){
                let elemento = $('.bandeira-promocao', this).text();						
                let porcDescontoTag = elemento.replace('% Desconto', '');
                let textDesconto = elemento.replace(' Desconto', '');					
                let htmlPorcTag = $('.bandeira-promocao', this);
                 htmlPorcTag.html(`-${textDesconto}`);
                if(porcDescontoTag <= 35){
                    $(htmlPorcTag).addClass("frio");
                }else if(porcDescontoTag <= 75) {
                    $(htmlPorcTag).addClass("morno");
                }else {
                    $(htmlPorcTag).addClass("quente");
                }
            });
        }();       
              
        const verTodosListagem = function(){
            $('a.titulo-categoria').each(function(){
                let link = $(this).attr('href');
                $(this).find('strong').after(`
                        <div class="ver_todos_categoria">
                            <a href="${link}">Ver todos</a>
                        </div>
                    `)
            });
        }();

         const tagLancamento = function(){
            if( obj.tagLancamento.ativo == true){
                let prodLancamento = obj.tagLancamento.ids
                prodLancamento.forEach(i=>{
                    $('#listagemProdutos>ul .listagem-item.prod-id-'+i).each(function(){
                            $('<span class="lancamento-ilm">Lançamento</span>').appendTo(this);
                    });
                });
                $('#listagemProdutos .listagem-item .lancamento-ilm, .pagina-busca .listagem-item .lancamento-ilm').parents('.listagem-item').addClass('class-lancamento-ajuste');
            }
        }();
        
         const tagCampeaoVendas = function(){
            if( obj.tagCampeaoVendas.ativo == true){
                let prodCampeao = obj.tagCampeaoVendas.skus
                prodCampeao.forEach((item, index)=>{
                    $(`.pagina-inicial #listagemProdutos>ul .listagem-item .produto-sku.hide:contains("${item}")`).each(function(inx, elm){
                        if( $(this).text().indexOf(`${item}`) > -1){
                                if($(this).find('.campeao-vendas-ilm').length <= 0){
                            var thisParents = $(this).parents('.listagem-item');
                            $('<span class="campeao-vendas-ilm"></span>').appendTo(thisParents);
                                }
                            thisParents.addClass('campeao-vendas');
                        }
                    });
                });
            }
        }();
        
         const VideoeDica = function(){
            function iframeAdd(link){
                $(`<div class="content-video-ilm">
                    <iframe width="464" height="261" src="https://www.youtube.com/embed/${link}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div><div class="ir-produto"><a href="">Ir para o produto</a></div>`).appendTo('.video-wrapper-content-ilm');
            }

        if(obj.VideoeDica.ativo == true){
                $(`<div class="video-mask-ilm">
                    <div class="video-wrapper-content-ilm">
                        <div class="acoes-video-ilm"><span class="btn-close">X</span></div>
                    </div>
                </div>`).appendTo('body');

                // ouça dica por sku para afetar o princial e os kits
                var skuProdLength = obj.VideoeDica.dica.skuslinks
                    
                skuProdLength.forEach(element=>{
                    let sku = element.split(' ')[0];
                    let link = element.split(' ')[1];
                    
                    $(`.listagem-item .produto-sku.hide:contains("${sku}")`).parents('.listagem-item').find('a.nome-produto.cor-secundaria').after(`
                        <div class="veja-o-video-iluminim">
                            <div class="botao video-iluminim"><span>Ouça a dica</span></div>
                        </div>
                    `);
                    $(`.listagem-item .produto-sku.hide:contains("${sku}")`).parents('.listagem-item').find('.botao.video-iluminim').unbind().click(function(){
                        iframeAdd(link);
                    });
                    
                });
                
                // ouça dica listagem por id para afetar apenas 1 elemento (proprio id)
                var lengthIds = obj.VideoeDica.dica.idslinks
              
                lengthIds.forEach(element=>{
                    let id   = element.split(' ')[0];
                    let link = element.split(' ')[1];
                    $('<div class="veja-o-video-iluminim">'+
                    '<div class="botao video-iluminim"><span>Ouça a dica</span></div>'+
                    '</div>').insertAfter(`.listagem-item.prod-id-${id} a.nome-produto.cor-secundaria`);
                    
                    $(`.listagem-item.prod-id-${id} .botao.video-iluminim`).unbind().click(function(){
                        iframeAdd(link);
                    });
                });
            
                
                /// video listagem por id para afetar apenas 1 elemento (proprio id)
                var lengthIdsVideo = obj.VideoeDica.video.idslinks
            
                lengthIdsVideo.forEach((element, index)=>{
                    let id   = element.split(' ')[0];
                    let link = element.split(' ')[1];
                    $(`<div class="veja-o-video-iluminim">
                    <div class="botao video-iluminim"><span>Veja o Vídeo</span></div>
                  </div>`).insertAfter(`.listagem-item.prod-id-${id} a.nome-produto.cor-secundaria`);
                    
                    $(`.listagem-item.prod-id-${id} .botao.video-iluminim`).unbind().click(function(){
                        $(`<div class="content-video-ilm">
                            <iframe width="464" height="345" src="https://www.youtube.com/embed/${link}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div><div class="ir-produto"><a href="">Ir para o produto</a></div>`).appendTo('.video-wrapper-content-ilm');
                    });
                });
            
            
            $('.listagem-item .veja-o-video-iluminim').parents('.listagem-item').addClass('produto_video');
            $('.listagem-item.produto_video .botao.video-iluminim').click(function(){
              $('body').addClass('video-iluminim');
                var ilmprod = $(this).parents('.info-produto').children('.nome-produto').attr('href');
                $('.ir-produto >a').attr('href',' '+ ilmprod +' ');
            });
            
            
            $('.video-wrapper-content-ilm span.btn-close').click(function(){
              $('body').removeClass('video-iluminim');
              $('.content-video-ilm,.ir-produto').remove();
            });
        }
        }();

        const addFavoritos = function(){
            $('<a class="add-fav" href="#"></a>').prependTo(".listagem-item");
              $(".listagem-item").each(function() {
                  var $jQname$AddFav = $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code");
                  $(this).find(".add-fav").attr("href", "/conta/favorito/" + $jQname$AddFav + "/adicionar")
              });
        }();        
    }

    static reorganizacaoDoRdp(){

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
        $('#rodape .links-rodape.links-rodape-categorias').removeClass('span5').addClass('span4');
        $('#rodape .links-rodape-categorias ul').html(`
            <li class="refletores-mt"><a href="/refletores-de-led?sort=mais_vendidos">Refletores LED</a></li>
            <li class="refletores-micro-led-mt"><a href="/refletor-microled?sort=mais_vendidos">Refletores Micro LED</a></li>
            <li class="espetos-mt"><a href="/espeto-led?sort=mais_vendidos">Espetos LED</a></li>
            <li class="luminarias-mt"><a href="/luminarias-led?sort=mais_vendidos">Luminárias LED</a></li>
            <li class="lum-emergencia-mt"><a href="/luminaria-emergencia-led?sort=mais_vendidos">Luminária Emergência LED</a></li>
            <li class="arandelas-mt"><a href="/arandela-led?sort=mais_vendidos">Arandelas LED</a></li>
            <li class="lustre-mt"><a href="/lustre-led?sort=mais_vendidos">Lustre LED</a></li>
            <li class="pendentes-mt"><a href="/pendente-led?sort=mais_vendidos">Pendentes LED</a></li>
            <li class="fitas-mt"><a href="/fitas-de-led?sort=mais_vendidos">Fitas LED</a></li>
            <li class="spots-mt"><a href="/spots?sort=mais_vendidos">Spot LED</a></li>
            <li class="lampadas-mt"><a href="/lampada/led?sort=mais_vendidos">Lâmpadas LED</a></li>
            <li class="camera-seg-mt"><a href="/camera-seguranca-led?sort=mais_vendidos">Camera Segurança LED</a></li>
            <li class="acessorios-mt"><a href="/acessorios-para-leds?sort=mais_vendidos">Acessorios LED</a></li>
            <li class="festa-led"><a href="/iluminacao-para-festa?sort=mais_vendidos">Festa LED</a></li>
            <li class="automotivo-mt"><a href="/led-automotivo?sort=mais_vendidos">Automotivo LED</a></li>
            <li class="kits-mt"><a href="/kits-especiais?sort=mais_vendidos">Kits LED</a></li>
            <li class="lancamentos-led"><a href="/lancamentos-led?sort=mais_vendidos">Lançamentos LED</a></li>
            <li class="ofertas-sem-mt"><a href="/ofertadasemana?sort=mais_vendidos">Oferta da Semana</a></li>
        `);
        
        $('#rodape .institucional .links-rodape-paginas,#rodape .institucional .sobre-loja-rodape').wrapAll('<div class="new_box_ilm span8"></div>');
        
        $('#rodape .institucional .links-rodape-paginas, #rodape .new_box_ilm.span8 > .sobre-loja-rodape').wrapAll('<div class="span12 wrapper-um"></div>');
        
        $('#rodape .new_box_ilm.span8 .links-rodape-paginas').removeClass('span3').addClass('span5');
        
        $('#rodape .new_box_ilm.span8 .links-rodape-paginas .titulo').html('Institucional');
        
        $('#rodape .new_box_ilm.span8 .span4.sobre-loja-rodape').removeClass('span4').addClass('span6');
        
        $(`<div class="span12 wrapper-dois">
            <div class="rodape-atendimento span5">
                <span class="titulo">Atendimento</span>
                <ul>
                <li><a href="https://www.iluminim.com.br/pagina/central-de-atendimento.html">Central online</a></li>
                <li><a href="https://www.iluminim.com.br/pagina/politica-de-troca.html">Trocas e devoluções</a></li>
            <li><a href="/conta/pedido/listar">Meus pedidos</a></li>
            <li><a href="https://www.iluminim.com.br/pagina/iluminim-e-confiavel.html">Iluminim é confiável?</a></li>
                </ul>
            </div>
            <div class="rodape-atendimento span5">
                <span class="titulo">Iluminim Empresas</span>
                <ul>
                <li><a href="https://www.iluminim.com.br/pagina/seja-nosso-revendedor-led.html">Venda para revendas</a></li>
                <li><a href="https://www.iluminim.com.br/pagina/atendimento-empresarial.html">Venda para empresas</a></li>
                <li><a href="https://www.iluminim.com.br/pagina/led-para-condominio.html">Venda para condomínios</a></li>
                <li><a href="/pagina/cadastro-de-arquiteto.html">Venda para arquitetos</a></li>
            <li><a href="https://www.iluminim.com.br/pagina/seja-nosso-fornecedor.html">Seja um fornecedor</a></li>
                </ul>
            </div>
            </div>`).insertAfter('#rodape .new_box_ilm > .wrapper-um');
        
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


        function actionStorage(_this ,status, text){
            localStorage.setItem('rdpilm',status);
            console.log(localStorage.getItem('rdpilm'));
            $(_this).html(text);
        }
        function toggleAction(func, text){
            $('.mais-inf-rdp span')[func]('active');
            $('.mais-inf-rdp span').parents('.mais-inf-rdp').siblings('.iluminim-inf-rdp')[func]('on');
            $('.mais-inf-rdp span').html(text);
        }

        $('.mais-inf-rdp span').click(function(){
            $(this).toggleClass('active');
                $(this).parents('.mais-inf-rdp').siblings('.iluminim-inf-rdp').toggleClass('on');
            
                if ( $(this).html() == "Mais informações") {
                    actionStorage(this, 'ativado', 'Menos informações');            
                } else {
                    actionStorage(this, 'desativado', 'Mais informações');
                }
        });

        if ( localStorage.getItem('rdpilm') == 'ativado') {
            toggleAction('addClass', 'Menos informações');
        } else {
            toggleAction('removeClass', 'Mais informações');
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
}
