class HomeIluminim {

/* funcão banner empresarial */
static bannerEmpresarial(obj){

      let banner_empresarial_CSS_inline      = obj.style_html;
      let banner_empresarial_link_imagem     = obj.link_href_imagem;
      let banner_empresarial_src_imagem      = obj.link_src_imagem;
      let banner_empresarial_posicaoFuncao   = obj.posicao.funcao;
      let banner_empresarial_posicaoSeletor  = obj.posicao.seletor;
  
  if(banner_empresarial_posicaoSeletor){
      $(`<div class="solucoes-empresariais hidden-phone" style="${banner_empresarial_CSS_inline}">
        <a href="${banner_empresarial_link_imagem}">
          <img src="${banner_empresarial_src_imagem}"/>
        </a>
      </div>`)[banner_empresarial_posicaoFuncao](`${banner_empresarial_posicaoSeletor}`);
    }

}
/* ~~end~~ funcão banner empresarial */

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


/* funcão colecoes iluminim */
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
/* ~~end~~ funcão colecoes iluminim */


/* funcão tarja informacoes */
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
/* ~~end tarja_informacoes ~~ */


static wireFrame(obj, carrousel){
  
  let wireFrame_CSS_inline     = obj.style_html;
  let wireFrame_posicaoSeletor = obj.posicao.seletor;

  let elementosPrimeiroBloco = obj.primeiroBloco.map(item=>{ return `<a href="${item.link}"><img src="${item.img}"/></a>`; }).join('');
  let elementosTerceiroBloco = obj.terceiroBloco.map(item=>{ return `<a href="${item.link}"><img src="${item.img}"/></a>`; }).join('');
  let bannerGrande = obj.bannerGrande;

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
           <div class="produto_iluminim">
              <a class="link_prod" href="/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado">
                 <div class="desconto_prod">-61%</div>
                 <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/PG-Q18WBF-15-01.png"/></div>
                 <div class="info_prod_iluminim">
                    <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Luminária Plafon 18w LED Sobrepor Branco Frio</div>
                    <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 75,90</span> <span class="preco_prod">R$ 29,90</span></div>
                    <div class="parcelas_prod"><span>até <b>2x</b> de <b>R$ 14,94</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 26,91</b> <span class="no_boleto">no boleto</span></span></div>
                 </div>
              </a>
           </div>
           <div class="produto_iluminim">
              <a class="link_prod" href="/luminaria-plafon-18w-led-embutir-branco-frio-quadrado">
                 <div class="desconto_prod">-65%</div>
                 <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/PS-Q18WBF-embutir-17-01.jpg"/></div>
                 <div class="info_prod_iluminim">
                    <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Luminária Plafon 18w LED Embutir Branco Frio</div>
                    <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 68,64</span><span class="preco_prod">R$ 23,90</span></div>
                    <div class="parcelas_prod"><span>até <b>2x</b> de <b>R$ 11,94</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 21,51</b> <span class="no_boleto">no boleto</span></span></div>
                 </div>
              </a>
           </div>
           <div class="produto_iluminim">
              <a class="link_prod" href="/spot-led-cob-5w-quadrado-embutir-direcionavel-branco-quente">
                 <div class="desconto_prod">-79%</div>
                 <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/COB-Q5WBF_15-01newsps-edit.png"/></div>
                 <div class="info_prod_iluminim">
                    <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Spot LED COB 5W Quadrado Embutir Direcionável Branco Quente</div>
                    <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_riscado">DE R$ 69,90</span> <span class="preco_prod">R$ 14,90</span></div>
                    <div class="parcelas_prod"><span>até <b>1x</b> de <b>R$ 14,90</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 13,41</b> <span class="no_boleto">no boleto</span></span></div>
                 </div>
              </a>
           </div>
           <div class="produto_iluminim">
              <a class="link_prod" href="/spot-7w-dicroica-led-base-branca">
                 <div class="desconto_prod">-77%</div>
                 <div class="_img_prod"><img src="https://cdn.awsli.com.br/257/257163/arquivos/D-QAB7WB_15-01news.jpg"/></div>
                 <div class="info_prod_iluminim">
                    <div class="confira_prod">Confira</div>
                    <div class="nome_prod_iluminim">Spot 7W Dicróica LED Direcionavel Base Branca</div>
                    <div class="stars-iluminim-bf"></div>
                    <div class="preco_promocional"><span class="preco_apartir">A partir de</span> <span class="preco_prod">R$ 17,90</span></div>
                    <div class="parcelas_prod"><span>até <b>1x</b> de <b>R$ 17,90</b> sem juros</span></div>
                    <div class="boleto_prod"><span><b>R$ 16,11</b> <span class="no_boleto">no boleto</span></span></div>
                 </div>
              </a>
           </div>
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



/* move html bloco seo */
static blocoHTMLAvaliacoesSEO(element,position){   
  $('<div class="conteiner" id="bloco_html_google"></div>')[position](`${element}`);
  $('.texto-seo').prependTo('#bloco_html_google');
  $('.seo-text').appendTo('#bloco_html_google');
}
/* ~~end move html bloco seo*/

}
