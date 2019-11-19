class HomeIluminim {

  static bannerTarjaAdaptacao(){
    $(`<div class="tarja-cods">
    <div class="tarja-frete"><a href="#"></a>
    <div class="drop_box_tarja" style="display:none;"><span>Para pedidos acima de R$299,00 o frete expresso é por nossa conta!</span></div>
    </div>

    <div class="tarja-entrega"><a href="/pagina/politica-de-entrega.html"></a>
    <div class="drop_box_tarja" style="display:none;"><span>Após a confirmação do pagamento o envio do pedido é feito em até 24 horas, caso contrário os custos de frete são por nossa conta!</span></div>
    </div>

    <div class="tarja-semjuros"><a href="#"></a>
    <div class="drop_box_tarja" style="display:none;"><span>As compras podem ser parceladas em até 12x sem juros e para pagamento via boleto é concedido um desconto de 10%.</span></div>
    </div>

    <div class="tarja-anosmercado"><a href="/pagina/quem-somos.html"></a>
    <div class="drop_box_tarja" style="display:none;"><span>Garantia e qualidade de quem atua há 8 anos no ramo e possuí mais de 400.000 clientes satisfeitos!</span></div>
    </div>

    <div class="tarja-melhorpreco"><a href="/pagina/menor-preco-led.html"></a>
    <div class="drop_box_tarja" style="display:none;"><span>Encontrou preço mais baixo em algum outro site ou recebeu proposta comercial melhor de outro fornecedor? Entre em contato conosco que faremos o possível para cobrir.</span></div>
    </div>

    </div>`).prependTo('.banner.tarja');
  }

  static linhaLoginERegister(obj){
    // tarja login e cadastro pagina inicial
    $(`<div class="login-listagem text-center" style="${obj.style_html}">
        <span class="texto-listagem">Faça login e veja ofertas incríveis escolhidas só para você</span>
        <a class="btn-entrar" href="/conta/login">Entre</a>
        <a class="btn-cadastrar" href="/conta/login">Cadastre-se</a>
        </div>`)[obj.posicao.funcao](`${obj.posicao.seletor}`);
  };


  static bannerEmpresarial(obj){

        let banner_empresarial_CSS_inline      = obj.style_html;
        let banner_empresarial_posicaoFuncao   = obj.posicao.funcao;
        let banner_empresarial_posicaoSeletor  = obj.posicao.seletor;
    
        $(`
          <div class="banners-animate-carrousel hidden-phone" style="${banner_empresarial_CSS_inline}">
              <div class="banner-empresarial-animated b_animated_ilm hidden-phone">
                  <div class="wrap">
                    <div class="wrap_txt">
                        <h3>Soluções <b>Empresariais</b></h3>
                    </div>
                    <div class="wrap_icones">
                        <div class="icone-wrap mao">
                          <div class="icn-ilm"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-mao-11-03-.png"></div>
                          <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Preço exclusivo para empresa,</span> <span class="p_txt">entre em contato para orçamento!</span> </div>
                          </div>
                        </div>
                        <div class="icone-wrap luz">
                          <div class="icn-ilm"><img src="https://cdn.awsli.com.br/257/257163/arquivos/iicone-luz-11-03-.png"></div>
                          <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">A Iluminim é a melhor solução</span> <span class="p_txt">em tecnologia LED do mercado!</span> </div>
                          </div>
                        </div>
                        <div class="icone-wrap papel">
                          <div class="icn-ilm"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-caneta-papel-11-03-.png"></div>
                          <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Atendimento e projetos personalizados!</span> <span class="p_txt">Confie na líder!</span> </div>
                          </div>
                        </div>
                    </div>
                    <div class="wrap_btn"><a href="/pagina/atendimento-empresarial.html" class="btn">Clique e Confira</a></div>
                  </div>
              </div>
              <div class="banner-revendedor-animated b_animated_ilm hidden-phone">
                  <div class="wrap">
                    <div class="wrap_txt">
                        <h3>Revendedor <b>Iluminim</b></h3>
                    </div>
                    <div class="wrap_icones">
                        <div class="icone-wrap dollar">
                          <div class="icn-ilm"> <img src="https://cdn.awsli.com.br/257/257163/arquivos/22-03-dollar-parte-1.png"><img src="https://cdn.awsli.com.br/257/257163/arquivos/22-03-dollar-parte-2.png"></div>
                          <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Preço exclusivo para revendedores Iluminim!</span></div>
                          </div>
                        </div>
                        <div class="icone-wrap phone">
                          <div class="icn-ilm"> <img src="https://cdn.awsli.com.br/257/257163/arquivos/22-03-phone-parte-1.png"><img src="https://cdn.awsli.com.br/257/257163/arquivos/22-03-phone-parte-2.png"></div>
                          <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Atendimento e orçamento personalizados!</span></div>
                          </div>
                        </div>
                        <div class="icone-wrap caminhao">
                          <div class="icn-ilm"><img src="https://cdn.awsli.com.br/257/257163/arquivos/22-03-caminhao.png"></div>
                          <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Entrega expressa para todo o Brasil!</span></div>
                          </div>
                        </div>
                    </div>
                    <div class="wrap_btn"><a href="/pagina/seja-nosso-revendedor-led.html" class="btn">Clique e Confira</a></div>
                  </div>
              </div>
        </div>
        `)[banner_empresarial_posicaoFuncao](`${banner_empresarial_posicaoSeletor}`);
        
        function helpClass(element, func){
              $(element)[func]('active');
        }
        $('.b_animated_ilm .wrap_icones .icone-wrap').on('mouseover', function(){
            helpClass($(this),'addClass');
          
        }).mouseleave(function(){
            helpClass($(this),'removeClass');
        });
        
        $('.banners-animate-carrousel.hidden-phone').slick({
          dots: true,infinite: true,speed: 500,cssEase: 'linear',
          slidesToShow: 1,slidesToScroll: 1,autoplay: false,autoplaySpeed: 5000
        });
  }



  static bannersDescontos(obj){
    let bannersDescontos_CSS_inline      = obj.style_html;
    let bannersDescontos_posicaoFuncao   = obj.posicao.funcao;
    let bannersDescontos_posicaoSeletor  = obj.posicao.seletor;

    $(`<div class="banners-categoria-home hidden-phone" style="${bannersDescontos_CSS_inline}">
    <div class="row-fluid">
        <div class="span4 first">
            <a href="/refletores-de-led?sort=mais_vendidos">
                <div class="texto-topo">
                <div class="txtprod">Refletores Super LED<span>Alta potência</span></div>
                <div class="com-ate">com até</div>
                <div class="porcentagem-ilm">64%</div>
                <div class="desconto">de desconto</div>
                </div>
            </a>
        </div>
        <div class="span4 first">
            <a href="/plafon-led-sobrepor?sort=mais_vendidos">
                <div class="texto-topo">
                <div class="txtprod">Plafon LED<span>Garantia total</span></div>
                <div class="com-ate">com até</div>
                <div class="porcentagem-ilm">64%</div>
                <div class="desconto">de desconto</div>
                </div>
            </a>
        </div>
        <div class="span4 first">
            <a href="/fitas-de-led?sort=mais_vendidos">
                <div class="texto-topo">
                <div class="txtprod">Fita LED<span>A prova d'gua</span></div>
                <div class="com-ate">com até</div>
                <div class="porcentagem-ilm">54%</div>
                <div class="desconto">de desconto</div>
                </div>
            </a>
        </div>
        </div>
        <div class="row-fluid">
        <div class="span4 first">
            <a href="/fonte-chaveada-led?sort=mais_vendidos">
                <div class="texto-topo">
                <div class="txtprod">Fonte Chaveada<span>Automática Bivolt</span></div>
                <div class="com-ate">com até</div>
                <div class="porcentagem-ilm">44%</div>
                <div class="desconto">de desconto</div>
                </div>
            </a>
        </div>
        <div class="span4 first">
            <a href="/lampada-led-rgb?sort=mais_vendidos">
                <div class="texto-topo">
                <div class="txtprod">Lâmpadas LED RGB<span>Estilo e cor</span></div>
                <div class="com-ate">com até</div>
                <div class="porcentagem-ilm">84%</div>
                <div class="desconto">de desconto</div>
                </div>
            </a>
        </div>
        <div class="span4 first">
            <a href="/balizador-led?sort=mais_vendidos">
                <div class="texto-topo">
                <div class="txtprod">Balizadores LED<span>Impermeáveis </span></div>
                <div class="com-ate">com até</div>
                <div class="porcentagem-ilm">44%</div>
                <div class="desconto">de desconto</div>
                </div>
            </a>
        </div>
    </div>
    </div>`)[bannersDescontos_posicaoFuncao](`${bannersDescontos_posicaoSeletor}`);
  }



  static bannersCamerasEPendentes(obj){  
    let bannersCamerasEPendentes_CSS_inline      = obj.style_html;
    let bannersCamerasEPendentes_posicaoFuncao   = obj.posicao.funcao;
    let bannersCamerasEPendentes_posicaoSeletor  = obj.posicao.seletor;
    let bannersCamerasEPendentes_banner1Link     = obj.banners.banner1.link;
    let bannersCamerasEPendentes_banner1Img      = obj.banners.banner1.img;
    let bannersCamerasEPendentes_banner2Link     = obj.banners.banner2.link;
    let bannersCamerasEPendentes_banner2Img      = obj.banners.banner2.img;
      $(`<div class="banners-iniciais-extras hidden-phone" style="${bannersCamerasEPendentes_CSS_inline}">
    <div class="span6 b-um"><a href="${bannersCamerasEPendentes_banner1Link}"><img src="${bannersCamerasEPendentes_banner1Img}"/></a></div>
    <div class="span6 b-dois"><a href="${bannersCamerasEPendentes_banner2Link}"><img src="${bannersCamerasEPendentes_banner2Img}"/></a></div>
    </div>`)[bannersCamerasEPendentes_posicaoFuncao](`${bannersCamerasEPendentes_posicaoSeletor}`);
  }


  static comprePorDepartamentos(obj, carrousel){
    let comprePorDepartamentos_CSS_inline      = obj.style_html;
    let comprePorDepartamentos_posicaoFuncao   = obj.posicao.funcao;
    let comprePorDepartamentos_posicaoSeletor  = obj.posicao.seletor;

    if(comprePorDepartamentos_posicaoSeletor){
      $(`<div class="compreDepartamentos slider hidden-phone" style="${comprePorDepartamentos_CSS_inline}">
      <div id="slider-um">
          <div class="coluna-01">
              <div class="grandchild">
                  <a href="/refletor-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Super-Led-dpt.png" alt="Refletores Super LED"></a>
              </div>
              <div class="grandchild">
                  <a href="/refletor-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Super-Led-RGB-dpt.png" alt="Refletores Super LED RGB"></a>
              </div>
              <div class="grandchild">
                  <a href="/refletor-led-verde?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Super-Led-Verde-dpt.png" alt="Refletores Super LED Verde"></a>
              </div>
              <div class="grandchild">
                  <a href="/refletor-led-sensor?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Super-Led-Sensor-dpt.png" alt="Refletores Super LED Sensor"></a>
              </div>
              <div class="grandchild">
                  <a href="/refletor-microled?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Micro-Led-dpt.png" alt="Refletores MicroLED"></a>
              </div>
              <div class="grandchild">
                  <a href="/refletor-led-smd-ultra-thin?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Ultra-Led-Thin-dpt.png" alt="Refletores LED Ultra Thin"></a>
              </div>
              <div class="grandchild">
                  <a href="/refletor-micro-led-multifocal?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Micro-Led-Multifocal-dpt.png" alt="Refletores MicroLED Multifocal"></a>
              </div>
          </div>
          <br class="clearboth">
          <div class="coluna-02">
                  <div class="grandchild">
                      <a href="/refletor-led-alta-performance?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Performance-Led-dpt.png" alt="Refletores Performance LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/refletor-led-recarregavel?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Super-Led-Recarregavel-dpt-25-07-18.png" alt="Refletores Super LED Recarregável"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/refletor-led-solar?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Refletores-Led-Solar-dpt-25-07-18.png" alt="Refletores LED Solar"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/espeto-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Espetos-Led-dpt.png" alt="Espetos LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/balizador-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Balizadores-Led-dpt.png" alt="Balizadores LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/plafon-led-embutir?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Plafons-Led-Embutir-dpt.png" alt="Plafons LED Embutir"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/plafon-led-sobrepor?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Plafons-Led-Sobrepor-dpt-25-07-18.png" alt="Plafons LED Sobrepor"></a>
                  </div>
          </div>
      </div>
      <div id="slider-dois">
              <div class="coluna-01">
                  <div class="grandchild">
                      <a href="/pendente-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Pendentes-Led-dpt.png" alt="Pendentes LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/spot-led-quadrado?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Spots-Led-Quadrado-dpt.png" alt="Spots LED Quadrado"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/spot-led-redondo?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Spots-Led-Redondo-dpt.png" alt="Spots LED Redondo"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/spot-led-trilho-eletrificado?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Spots-Led-Trilho-Eletrificado-dpt-25-07-18.png" alt="Spots LED Trilho Eletrificado"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/fita-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Fitas-Led-RGB-dpt.png" alt="Fitas LED RGB"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/fita-led-branca?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Fitas-Led-Branca-dpt.png" alt="Fitas LED Branca"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/fita-led-12v?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Fitas-Led-12W-dpt.png" alt="Fitas LED 12W"></a>
                  </div>
              </div>
              <br class="clearboth">
              <div class="coluna-02">
                      <div class="grandchild">
                          <a href="/mangueiras-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Mangueiras-Led-dpt.png" alt="Mangueiras LED"></a>
                      </div>
                      <div class="grandchild">
                          <a href="/fonte-chaveada?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Fontes-Led-dpt.png" alt="Fontes LED"></a>
                      </div>
                      <div class="grandchild">
                          <a href="/acessorios-para-leds?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Acessorios-Led-dpt.png" alt="Acessórios LED"></a>
                      </div>
                      <div class="grandchild">
                          <a href="/arandela-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Arandelas-Led-dpt.png" alt="Arandelas LED"></a>
                      </div>
                      <div class="grandchild">
                          <a href="/lampada-led-bulbo?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Bulbo-dpt.png" alt="Lâmpadas LED Bulbo"></a>
                      </div>
                      <div class="grandchild">
                          <a href="/lampada-led-tubular?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Tubular-dpt.png" alt="Lâmpadas LED Tubular"></a>
                      </div>
                      <div class="grandchild">
                          <a href="/lampada-led-alta-potencia?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Alta-Potencia-dpt-25-07-18.png" alt="Lâmpadas LED Alta Potência"></a>
                      </div>
              </div>
      </div> 
  <div id="slider-dois">
          <div class="coluna-01">
              <div class="grandchild">
                  <a href="/lampada-led-milho?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Milho-dpt.png" alt="Lâmpadas LED Milho"></a>
              </div>
              <div class="grandchild">
                  <a href="/lampada-led-espiral?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Espiral-dpt.png" alt="Lâmpadas LED Espiral"></a>
              </div>
              <div class="grandchild">
                  <a href="/par-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Par-dpt.png" alt="Lâmpadas LED PAR"></a>
              </div>
              <div class="grandchild">
                  <a href="/lampada-led-globo-balloon?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Globo-dpt.png" alt="Lâmpadas LED Globo"></a>
              </div>
              <div class="grandchild">
                  <a href="/dicroica-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Dicroica-dpt.png" alt="Lâmpadas LED Dicróica"></a>
              </div>
              <div class="grandchild">
                  <a href="/halopin-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Halopin-dpt-25-07-18.png" alt="Lâmpadas LED Halopin"></a>
              </div>
              <div class="grandchild">
                  <a href="/led-retro?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Vintage-dpt-25-07-18-new.png" alt="Lâmpadas LED Vintage"></a>
              </div>
          </div>
          <br class="clearboth">
          <div class="coluna-02">
                  <div class="grandchild">
                      <a href="/vela-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Vela-dpt-25-07-18.png" alt="Lâmpadas LED Vela"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/lampada-led-rgb?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-RGB-dpt.png" alt="Lâmpadas LED RGB"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/luminaria-emergencia-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-Led-Emergencia-dpt.png" alt="Lâmpadas LED Emergência"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/luminarias-publicas-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Luminarias-Publica-Led-dpt.png" alt="Luminárias Pública LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/luminarias-posto-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Luminarias-Posto-Led-dpt.png" alt="Luminárias Posto LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="/camera-seguranca-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Cameras-Seguranca-Led-dpt.png" alt="Câmeras Segurança LED"></a>
                  </div>
                  <div class="grandchild">
                      <a href="#"><img src="https://cdn.awsli.com.br/257/257163/arquivos/Todos-os-Departamentos-dpt.png" alt="Todos os Departamentos"></a>
                  </div>
          </div>
  </div> 
  </div> `)[comprePorDepartamentos_posicaoFuncao](`${comprePorDepartamentos_posicaoSeletor}`);
    
    if(carrousel){
      carrousel();
    }

    }
  }



  static colecoesIluminim(obj,carrousel){
      let colecoes_iluminim_CSS_inline     = obj.style_html;
      let colecoes_iluminim_posicaoFuncao  = obj.posicao.funcao;
      let colecoes_iluminim_posicaoSeletor = obj.posicao.seletor;

    if(colecoes_iluminim_posicaoSeletor){
    $(`<div class="iluminim-colecoes hidden-phone" style="${colecoes_iluminim_CSS_inline}">
    <div class="bread-iluminim-colecoes">
      <div class="content-breads">
        <span class="text-principal">Coleções Iluminim: 
          <span class="acao-elemento-colecoes"></span>
          <ul class="elementos-colecoes">
            <li>
              <span>LED para Jardim</span>
              <div class="wrapper-box-colecoes">

              <div class="mask-fundo-duvidas colecao" data-id="LED-para-Jardim">
                  <div class="conteudo-ilm">

                      <div class="titulo-duvidas">LED para Jardim<div class="fechar-modal">X</div></div>
                      <div class="textos-duvidas">Para valorizar o seu projeto paisagístico é muito importante escolher o modelo ideal de LED para jardim. Pensando nisso, separamos ao lado algumas dicas de produtos que são muito utilizados nessa área. Aproveite e <a href="https://blog.iluminim.com.br/entenda-quais-sao-os-melhores-modelos-de-led-para-o-seu-jardim/">entenda</a> quais são as melhores opções de LED para jardim! </div>

                  </div>
              </div>

                <div class="ilm-colecoes">
                  <div class="box-principal-colecoes">
                    <div class="saiba-mais-colecoes jardim">Saiba mais</div>
                    <a href="/led-para-jardim">
                      <div>
                        <img src="https://cdn.awsli.com.br/257/257163/arquivos/jardimluz03-09.jpg">
                      </div>
                      <div class="textoscolecao">
                        <span>Descubra</span>
                        <span>LED para Jardim</span>
                      </div>
                    </a>
                  </div>
                  <div class="list-colecoes-ilm">
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/refletor-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-super-led.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/refletor-microled?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-micro-led.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/refletor-led-rgb?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-item-refletor-super-led-rgb.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/refletor-led-verde?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-super-led-verde.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/refletor-led-smd-ultra-thin?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-micro-led-ultra-thin.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/refletor-led-solar?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refle-micro-led-solar.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/refletor-micro-led-slim?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-dpt.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/refletor-micro-led-rgb?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-slim-dpt-ok.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/refletor-led-sensor?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-refletor-super-led-sensor.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/espeto-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/owl-superior-espeto-led.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/balizador-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/spot-balizador-led-03-08.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/arandela-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-arandela-led.png">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>LED para Quarto</span>
              <div class="wrapper-box-colecoes">

            <div class="mask-fundo-duvidas colecao" data-id="LED-para-Quarto">
                <div class="conteudo-ilm">

                    <div class="titulo-duvidas">LED para Quarto<div class="fechar-modal">X</div></div>
                    <div class="textos-duvidas">A iluminação para quarto de casal pode mudar completamente a sensação de conforto e bem-estar no ambiente. Pensando nisso, selecionamos algumas sugestões de produtos LED para esse espaço. Aproveite e <a href="https://blog.iluminim.com.br/iluminacao-para-quarto-de-casal-confira-4-dicas-e-deixe-o-ambiente-mais-intimo/">confira</a> 4 dicas de iluminação para quarto de casal.</div>

                </div>
            </div>

                <div class="ilm-colecoes">
                  <div class="box-principal-colecoes">
                    <div class="saiba-mais-colecoes quarto">Saiba mais</div>
                    <a href="/led-para-dormitorios">
                      <div>
                        <img src="https://cdn.awsli.com.br/257/257163/arquivos/fita_led_bq_quarto-03-09.jpg">
                      </div>
                      <div class="textoscolecao">
                        <span>Descubra</span>
                        <span>LED para Quarto</span>
                      </div>
                    </a>
                  </div>
                  <div class="list-colecoes-ilm">
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/plafon-led-sobrepor?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-sobrepor.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/plafon-led-embutir?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-embutir.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/spot-led-redondo?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDRedondo-03-08.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/spot-led-quadrado?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDQuadrado-03-08-corrig.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/mini-spot-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/mini-spot-led-principal-05-09.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/lampada-led-bulbo?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-lampada-led-buldo-carrousel-16-07.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/fita-led-branco-morno?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-morno.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-branco-quente?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-quente.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/fita-led-branca?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-frio.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-rgb?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/corrigfita-led-rgb-colorida-sub-25-07-18.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/pendente-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-pendente-led.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/lustre-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-lustre-led.png">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>LED para Cozinha</span>
              <div class="wrapper-box-colecoes">

              <div class="mask-fundo-duvidas colecao" data-id="LED-para-Cozinha">
                  <div class="conteudo-ilm">

                      <div class="titulo-duvidas">LED para Cozinha<div class="fechar-modal">X</div></div>
                      <div class="textos-duvidas">A iluminação adequada na cozinha favorece a preparação dos pratos de forma segura e precisa aos olhos. As refeições podem ser ainda mais prazerosas sob a iluminação aconchegante de uma cozinha. Encontre ao lado algumas dicas de produtos LED para aplicação nesse espaço. <a href="https://blog.iluminim.com.br/confira-5-dicas-de-iluminacao-para-cozinha/">Confira</a> 5 dicas de iluminação para cozinha!</div>

                  </div>
              </div>

                <div class="ilm-colecoes">
                  <div class="box-principal-colecoes">
                    <div class="saiba-mais-colecoes cozinha">Saiba mais</div>
                    <a href="/led-para-cozinha">
                      <div>
                        <img src="https://cdn.awsli.com.br/257/257163/arquivos/cozinha_branco_frio-03-09.jpg">
                      </div>
                      <div class="textoscolecao">
                        <span>Descubra</span>
                        <span>LED para Cozinha</span>
                      </div>
                    </a>
                  </div>
                  <div class="list-colecoes-ilm">
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/plafon-led-sobrepor?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-sobrepor.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/plafon-led-embutir?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-embutir.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/spot-led-redondo?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDRedondo-03-08.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/spot-led-quadrado?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDQuadrado-03-08-corrig.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/mini-spot-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/mini-spot-led-principal-05-09.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-branca?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-frio.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/lampada-led-tubular?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-lampada-led-tubular-carrousel-16-07.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/lampada-led-bulbo?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-lampada-led-buldo-carrousel-16-07.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/lampada-led-milho?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-lampada-led-milho-carrousel-16-07.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/pendente-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-pendente-led.png">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>LED para Sala de Estar</span>
              <div class="wrapper-box-colecoes">

                <div class="mask-fundo-duvidas colecao" data-id="LED-para-Sala-de-Estar">
                  <div class="conteudo-ilm">

                    <div class="titulo-duvidas">LED para Sala de Estar<div class="fechar-modal">X</div></div>
                    <div class="textos-duvidas">Uma iluminação bem-feita na sala de estar pode gerar conforto, por meio de um clima agradável e convidativo. Para ajudá-lo no seu projeto separamos ao lado os itens mais vendidos para esse ambiente. Aproveite e <a href="https://blog.iluminim.com.br/7-dicas-para-deixar-a-iluminacao-da-sua-sala-de-estar-incrivel/">confira</a> 7 sugestões para deixar a iluminação da sua sala de estar incrível!</div>

                  </div>
                </div>

                <div class="ilm-colecoes">
                  <div class="box-principal-colecoes">
                    <div class="saiba-mais-colecoes estar">Saiba mais</div>
                    <a href="/led-para-sala-de-estar">
                      <div>
                        <img src="https://cdn.awsli.com.br/257/257163/arquivos/salaaa03-09.jpg">
                      </div>
                      <div class="textoscolecao">
                        <span>Descubra</span>
                        <span>LED para Sala de Estar</span>
                      </div>
                    </a>
                  </div>
                  <div class="list-colecoes-ilm">
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/plafon-led-sobrepor?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-sobrepor.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/plafon-led-embutir?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-embutir.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/spot-led-redondo?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDRedondo-03-08.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/spot-led-quadrado?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDQuadrado-03-08-corrig.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/spot-led-trilho-eletrificado?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/spot-led-trilho03-08.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/led-retro?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-lampada-led-vintage-carrousel-16-02.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/fita-led-branco-morno?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-morno.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-branco-quente?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-quente.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/fita-led-branca?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-frio.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-rgb?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/corrigfita-led-rgb-colorida-sub-25-07-18.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/pendente-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-pendente-led.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/lustre-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-lustre-led.png">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>LED para Sala de Jantar</span>
              <div class="wrapper-box-colecoes">

              <div class="mask-fundo-duvidas colecao" data-id="LED-para-Sala-de-Jantar">
              <div class="conteudo-ilm">
                  <div class="titulo-duvidas">LED para Sala de jantar<div class="fechar-modal">X</div></div>
                  <div class="textos-duvidas">Quer iluminar corretamente a sua sala de jantar? Separamos ao lado alguns produtos LED que são muito usados nesse tipo de ambiente para ter uma iluminação eficiente, moderna e decorativa.</div>

                  </div>
              </div>

                <div class="ilm-colecoes">
                  <div class="box-principal-colecoes">
                    <div class="saiba-mais-colecoes jantar">Saiba mais</div>
                    <a href="https://www.iluminim.com.br/led-para-sala-de-jantar">
                      <div>
                        <img src="https://cdn.awsli.com.br/257/257163/arquivos/fita_espelho03-09.jpg">
                      </div>
                      <div class="textoscolecao">
                        <span>Descubra</span>
                        <span>LED para Sala de Jantar</span>
                      </div>
                    </a>
                  </div>
                  <div class="list-colecoes-ilm">
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/plafon-led-sobrepor?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-sobrepor.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/plafon-led-embutir?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/30-07-plafon-led-embutir.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/spot-led-redondo?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDRedondo-03-08.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/spot-led-quadrado?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/SpotDicroicaLEDQuadrado-03-08-corrig.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/spot-led-cristal?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-spot-led-cristal-new.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/vela-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/menu-lampada-led-vela-carrousel-16-07.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/fita-led-branco-morno?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-morno.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-branco-quente?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-quente.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/fita-led-branca?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/carrousel-fita-led-25-07-branco-frio.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/fita-led-rgb?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/corrigfita-led-rgb-colorida-sub-25-07-18.png">
                        </a>
                      </div>
                    </div>
                    <div class="item-ilm">
                      <div class="elm-colecao">
                        <a href="/pendente-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-pendente-led.png">
                        </a>
                      </div>
                      <div class="elm-colecao">
                        <a href="/lustre-led?sort=mais_vendidos">
                          <img src="https://cdn.awsli.com.br/257/257163/arquivos/sub-categoria-carrousel-lustre-led.png">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </span>
      </div>
    </div>
    </div>`)[colecoes_iluminim_posicaoFuncao](`${colecoes_iluminim_posicaoSeletor}`);


        $(".iluminim-colecoes ul.elementos-colecoes > li:nth-child(1)").addClass("active");

        var armzTexto = $(".iluminim-colecoes .elementos-colecoes > li.active > span").text();

        $(".iluminim-colecoes span.acao-elemento-colecoes").text(" " + armzTexto + " ");

        $(".iluminim-colecoes .content-breads .acao-elemento-colecoes").click(function() {
            $(this).parents(".iluminim-colecoes").toggleClass("dropdown-ativo")
        });

        $(".iluminim-colecoes .elementos-colecoes").find("li").click(function() {
            $(".iluminim-colecoes .elementos-colecoes li").removeClass("active");
            $(this).addClass("active");
            var e = $(this).children("span").text();
            $(".iluminim-colecoes").removeClass("dropdown-ativo");
            $(".iluminim-colecoes span.acao-elemento-colecoes").text(" " + e + " ");
        });

        /*acoes modal*/
        $('.iluminim-colecoes .saiba-mais-colecoes').click(function(){
          $(this).parents('.wrapper-box-colecoes').find('.mask-fundo-duvidas').addClass('fade_in');
        });
        $('.mask-fundo-duvidas.colecao .fechar-modal').click(function(){
          $(this).parents('.colecao').removeClass('fade_in');
        });



      if(carrousel){
        carrousel();
      }

    } 
  };


  static tarjaInformacoes(obj){
    let tarja_informacoes_CSS_inline     = obj.style_html;
    let tarja_informacoes_posicaoFuncao  = obj.posicao.funcao;
    let tarja_informacoes_posicaoSeletor = obj.posicao.seletor;

    if(tarja_informacoes_posicaoSeletor){
      $(`
      <div class="hidden-phone" id="tarja-informacoes" style="${tarja_informacoes_CSS_inline}">
          <div class="conteiner">
              <div class="bloco-tarja span3">
                  <div class="parte-superior">
                      <div class="imagem-tarja melhor-preco" style="height:49px;"></div>
                      <span class="titul-tarja">BUSCAMOS<br>O MELHOR PREÇO</span>
                  </div> 
                  <div class="parte-inferior">
                      <span class="conteudo-tarja">Encontrou um preço menor? <br>Nós faremos o possível <br>para cobri-lo.</span>
                      <a class="link-tarja" href="/pagina/menor-preco-led.html">Saiba mais</a>
                  </div> 
              </div> 
              <div class="bloco-tarja span3">
                  <div class="parte-superior">
                      <div class="imagem-tarja centro-tecnico" style="height:49px;"></div>
                      <span class="titul-tarja">CENTRO<br>TÉCNICO</span>
                  </div> 
                  <div class="parte-inferior">
                      <span class="conteudo-tarja">Equipe especializada pronta<br>para prestar informações<br>precisas.</span>
                      <a class="link-tarja" href="/pagina/centro-tecnico.html">Saiba mais</a>
                  </div> 
              </div> 
              <div class="bloco-tarja span3">
                  <div class="parte-superior">
                      <div class="imagem-tarja vendas-atacado" style="height:49px;"></div>
                      <span class="titul-tarja">VENDA<br>POR ATACADO</span>
                  </div> 
                  <div class="parte-inferior">
                      <span class="conteudo-tarja">Conheça as principais vantagens<br>em ser nosso revendedor<br>exclusivo.</span>
                      <a class="link-tarja" href="https://www.iluminim.com.br/pagina/seja-nosso-revendedor-led.html">Saiba mais</a>
                  </div> 
              </div> 
              <div class="bloco-tarja span3">
                  <div class="parte-superior">
                      <div class="imagem-tarja blog-ilm" style="height:49px;"></div>
                      <span class="titul-tarja">ACOMPANHE<br>O NOSSO BLOG</span>
                  </div> 
                  <div class="parte-inferior">
                      <span class="conteudo-tarja">Confira em nosso blog dicas incríveis<br>sobre iluminação LED<br>e muito mais.</span>
                      <a class="link-tarja" target="_blank" href="https://blog.iluminim.com.br/">Saiba mais</a>
                  </div> 
              </div> 
          </div> 
      </div>`)[tarja_informacoes_posicaoFuncao](`${tarja_informacoes_posicaoSeletor}`);
      
    } 
  }



  static wireFrame(obj, carrousel){
    let wireFrame_CSS_inline     = obj.style_html;
    let wireFrame_posicaoSeletor = obj.posicao.seletor;
    let bannerGrande = obj.bannerGrande;

    let elementosPrimeiroBloco = obj.primeiroBloco.map(item=> `<a href="${item.link}"><img src="${item.img}"/></a>`).join('');
    let elementosTerceiroBloco = obj.terceiroBloco.map(item=> `<a href="${item.link}"><img src="${item.img}"/></a>`).join('');


    function retornaHTMLProducts(array){
      return array.map(item=> {return `
        <div class="produto_iluminim">
            <a class="link_prod" href="${item.link}">
              <div class="desconto_prod">${item.desconto}</div>
              <div class="_img_prod"><img src="${item.img}"/></div>
              <div class="info_prod_iluminim">
                  <div class="confira_prod">Confira</div>
                  <div class="nome_prod_iluminim">${item.nome}</div>
                  <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional">
                      ${ (item.apartir_de) ? '<span class="preco_apartir">A partir de</span>' : `<span class="preco_riscado">DE R$ ${item.preco_riscado}</span>` }
                      <span class="preco_prod">R$ ${item.preco_normal}</span>
                    </div>
                  <div class="parcelas_prod"><span>até <b>${item.parcela.vezes}x</b> de <b>R$ ${item.parcela.valor}</b> sem juros</span></div>
                  <div class="boleto_prod"><span><b>R$ ${item.preco_boleto}</b> <span class="no_boleto">no boleto</span></span></div>
              </div>
            </a>
          </div>
      `; }).join('');
    };

    let objectProds = [
        {
          desconto: '-61%',
          link: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado',
          img: 'https://cdn.awsli.com.br/257/257163/arquivos/PG-Q18WBF-15-01.png',
          nome: 'Luminária Plafon 18w LED Sobrepor Branco Frio',
          parcela: {
            vezes: '2',
            valor: '14,94'
          },
          preco_riscado: '75,90',
          preco_normal: '29,90',
          preco_boleto: '26,91'
        },
        
        {
          desconto: '-65%',
          link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
          img: 'https://cdn.awsli.com.br/257/257163/arquivos/PS-Q18WBF-embutir-17-01.jpg',
          nome: 'Luminária Plafon 18w LED Embutir Branco Frio',
          parcela: {
            vezes: '2',
            valor: '11,94'
          },
          preco_riscado: '68,64',
          preco_normal: '23,90',
          preco_boleto: '21,51'
        },

        {
          desconto: '-79%',
          link: '/spot-led-cob-5w-quadrado-embutir-direcionavel-branco-quente',
          img: 'https://cdn.awsli.com.br/257/257163/arquivos/COB-Q5WBF_15-01newsps-edit.png',
          nome: 'Spot LED COB 5W Quadrado Embutir Direcionável Branco Quente',
          parcela: {
            vezes: '1',
            valor: '14,90'
          },
          preco_riscado: '69,90',
          preco_normal: '14,90',
          preco_boleto: '13,41'
        },

        {
          apartir_de: true,
          desconto: '-77%',
          link: '/spot-7w-dicroica-led-base-branca',
          img: 'https://cdn.awsli.com.br/257/257163/arquivos/D-QAB7WB_15-01news.jpg',
          nome: 'Spot 7W Dicróica LED Direcionavel Base Branca',
          parcela: {
            vezes: '1',
            valor: '17,90'
          },
          preco_normal: '17,90',
          preco_boleto: '16,11'
        }
      ];
      let htmlObjectProds = retornaHTMLProducts(objectProds)


    let miniBanners = obj.miniBanners.map(item=>{ 
      return `<div class="modulo span4 segunda-fileira-spot">
          <a href="${item.link}"><img src="${item.img}"/></a>
      </div>`;
    }).join('');

    $(`${wireFrame_posicaoSeletor}`).html(`
    <div class="wire_frame_iluminim" style="${wireFrame_CSS_inline}">
    
    <div class="modulo span4 novos-ilm-lancamentos primeira-fileira">
      ${elementosPrimeiroBloco}
    </div>
    <div class="modulo span4 oferta-do-dia">
      <div class="carrousel-prods-ledfriday">
          <div class="box-cronometro-lf">
            <span class="titulo-oferta">Oferta do dia</span>
            <div class="plg-cronometro">
                <span></span>
            </div>
          </div>
          <div class="carrousel-prods">
              ${htmlObjectProds}
          </div>
      </div>
    </div>
    <div class="modulo span4 novos-ilm-lancamentos seg-fileira">
      ${elementosTerceiroBloco}
    </div>
    <div class="modulo span12">
      <a href="${bannerGrande.link}"><img src="${bannerGrande.img}"/></a>
    </div>
      
    <div class="minis-banners-ilm">
        ${miniBanners}
    </div>
    
    </div>
    `);
      
    if(carrousel){
        carrousel();
      }

      $('.plg-cronometro > span').yuukCountDown({
          starttime: '2016/11/12 00:00:00',
          endtime: '2019/12/30 00:00:00'
      });

  }



}
