
const Script_Desktop_INICIAL = function(obj){

/* ESCOPOS DE VARIAVEIS */

/* funcão tarja informacoes */
const tarja_informacoes = obj.tarja_informacoes_before;
/* ~~end~~ funcão tarja informacoes */

/* funcão colecoes iluminim */
const colecoes_iluminim = obj.colecoes_iluminim_before;
/* ~~end~~ funcão colecoes iluminim */

/* funcão banner empresarial */
const banner_empresarial_CSS_inline      = obj.banner_empresarial.style_html;
const banner_empresarial_link_imagem     = obj.banner_empresarial.link_href_imagem;
const banner_empresarial_src_imagem      = obj.banner_empresarial.link_src_imagem;
const banner_empresarial_posicaoFuncao   = obj.banner_empresarial.posicao.funcao;
const banner_empresarial_posicaoSeletor  = obj.banner_empresarial.posicao.seletor;
/* ~~end~~ funcão banner empresarial */

/* ~~end~~ ESCOPOS DE VARIAVEIS */

if(banner_empresarial_posicaoSeletor){
$(`<div class="solucoes-empresariais hidden-phone" style="${banner_empresarial_CSS_inline}">
    <a href="${banner_empresarial_link_imagem}">
      <img src="${banner_empresarial_src_imagem}"/>
    </a>
  </div>`)[banner_empresarial_posicaoFuncao](`${banner_empresarial_posicaoSeletor}`);
}

if(colecoes_iluminim){
$(`<div class="iluminim-colecoes hidden-phone">
  <div class="bread-iluminim-colecoes">
    <div class="content-breads">
      <span class="text-principal">Coleções Iluminim: 
        <span class="acao-elemento-colecoes"></span>
        <ul class="elementos-colecoes">
          <li>
            <span>LED para Jardim</span>
            <div class="wrapper-box-colecoes">
              <div class="ilm-colecoes">
                <div class="box-principal-colecoes">
                  <div class="saiba-mais-colecoes jardim" style="display:none;">Saiba mais</div>
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
              <div class="ilm-colecoes">
                <div class="box-principal-colecoes">
                  <div class="saiba-mais-colecoes quarto" style="display:none;">Saiba mais</div>
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
              <div class="ilm-colecoes">
                <div class="box-principal-colecoes">
                  <div class="saiba-mais-colecoes cozinha" style="display:none;">Saiba mais</div>
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
              <div class="ilm-colecoes">
                <div class="box-principal-colecoes">
                  <div class="saiba-mais-colecoes estar" style="display:none;">Saiba mais</div>
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
              <div class="ilm-colecoes">
                <div class="box-principal-colecoes">
                  <div class="saiba-mais-colecoes jantar" style="display:none;">Saiba mais</div>
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
</div>`).insertBefore(`${colecoes_iluminim}`);

    $(".iluminim-colecoes ul.elementos-colecoes > li:nth-child(1)").addClass("active");

    var armzTexto = $(".iluminim-colecoes .elementos-colecoes > li.active > span").text();

    $(".iluminim-colecoes span.acao-elemento-colecoes").text(" " + armzTexto + " ");

    $(".iluminim-colecoes .content-breads .acao-elemento-colecoes").click(function() {
        $(this).parents(".iluminim-colecoes").toggleClass("dropdown-ativo")
    });

    $(".iluminim-colecoes .elementos-colecoes").find("li").click(function() {
        $(".iluminim-colecoes .elementos-colecoes li").removeClass("active"), $(this).addClass("active");
        var e = $(this).children("span").text();
        $(".iluminim-colecoes").removeClass("dropdown-ativo"), $(".iluminim-colecoes span.acao-elemento-colecoes").text(" " + e + " ");
    });

    $(".list-colecoes-ilm").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        animateOut: !1,
        smartSpeed: 200,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 4
            },
            500: {
                items: 4
            }
        }
    });

} /* ~~end colecoes_iluminim ~~ */

if(tarja_informacoes){
$(`
<div class="conteiner" id="bloco_html_google"></div>
<div class="hidden-phone" id="tarja-informacoes" style="display:none;">
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
</div>`).insertBefore(`${tarja_informacoes}`);

} /* ~~end tarja_informacoes ~~ */

    
$('.texto-seo').prependTo('#bloco_html_google');
$('.seo-text').appendTo('#bloco_html_google');

};

