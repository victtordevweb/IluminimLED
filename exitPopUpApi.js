/*<style>
    .exit_popup_personalizado {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999999999;
    background: rgba(0, 0, 0, 0.55);
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
		opacity:0;
		transition: all 0.2s;
		visibility:hidden;
	
}
.exit_popup_personalizado.__open {
		opacity:1 !important;
		visibility:visible !important;
}

.exit_popup_personalizado .content-popup {
    margin: -40px auto 0 auto;
    display: flex;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.45);
    background: #040402;
}


.exit_popup_personalizado .content-popup .header-popup span.title-popup {
    font-size: 35px;
    display: block;
    font-weight: 800;
    text-transform: uppercase;
    color: #d50808;
}


.exit_popup_personalizado .content-popup:before {
    content: url(https://media.discordapp.net/attachments/461936410748780575/611280463033663508/banner-segunda-box-newsletter-led-friday-3-0-min.png?width=435&height=481);
    height: 481px;
}

.exit_popup_personalizado .wrap-popup {
    background: #fff;
    padding: 20px 25px;
    box-sizing: border-box;
    width: 500px;
    position: relative;
}

.exit_popup_personalizado .content-popup .header-popup span.title-popup-p {
    font-size: 17px;
    font-weight: 600;
}

.exit_popup_personalizado .wrap-popup .header-popup {
    text-align: center;
    margin-bottom: 16px;
}

.btn-close-popup-personalizado {
    font-size: 40px;
    position: absolute;
    right: 13px;
    top: -7px;
    color: #d50808;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-close-popup-personalizado:hover {
    color: #8a190c;
}



.exit_popup_personalizado .carrousel-popup-personalizado.owl-loaded.owl-drag .owl-item {
    float: left;
}

.exit_popup_personalizado .carrousel-popup-personalizado.owl-loaded.owl-drag .owl-stage-outer {
    display: block;
    overflow: hidden;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado {
    position: relative;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .owl-nav {
    position: absolute;
    width: 100%;
    top: calc(50% - 23px);
    display: flex;
    justify-content: space-between;
    height: 0;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .owl-dots {
    display: none !important;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .listagem-item {
    padding: 18px 20px;
    text-align: center;
    position: relative;
}


.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .owl-nav i {
    font-size: 45px;
    color: #d50808;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .owl-nav .owl-prev {
    left: -15px;
}
.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .owl-nav .owl-next {
    right: -15px;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .owl-nav > div {
    position: relative;
    cursor:pointer;
}

.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .listagem-item .desconto-a-vista strong {
    margin: 0;
}

.exit_popup_personalizado a.nome-produto.cor-secundaria {
    margin-top: 15px!important;
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 12px;
    line-height: 15px;
    width: 100%!important;
    text-decoration: none;
    height: 45px!important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 3;
}

.exit_popup_personalizado span.preco-parcela strong {
    color: #d74d4e;
}
.exit_popup_personalizado .desconto-a-vista {
    width: 295px;
    font-size: 0;
}

.exit_popup_personalizado span.preco-parcela {
    font-size:12px !important;
    margin: 0;
    line-height: 18px;
}
.exit_popup_personalizado .desconto-a-vista strong:after {
    content: "no boleto";
    font-size: 12px;
    color: #FF8600;
    margin-left: 5px;
}

.exit_popup_personalizado .listagem-item .desconto-a-vista strong{
    padding-bottom: 5px !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

.exit_popup_personalizado .desconto-a-vista strong {
    margin-top: 15px;
    margin-bottom: 30px;
    display: inline-block;
    font-family: 'Open Sans';
    font-weight: 900;
    font-size: 21px;
    color: #FF8600;
    letter-spacing: -1px;
}
.exit_popup_personalizado .listagem-item .desconto-a-vista strong:before {
    content: "";
    background: url(https://cdn.awsli.com.br/257/257163/arquivos/sprite_default_ilm-CMKY-tree-min.png) -1406px -1155px;
    display: inherit;
    margin-right: 7px!important;
    width: 28px;
    height: 24px;
    top: 6px;
    position: relative;
}

.exit_popup_personalizado .listagem-item:hover .produto-sobrepor:after {
    transform: translateY(-98px);
}

@media (max-width: 767px){
    .exit_popup_personalizado {
        display:none!important;
    }
}
</style>*/


const chave = {
    api: 'fd7e5bbe195de3d9b7d2',
    aplicacao: '47366dd3-180e-43c5-928b-45a93d31d561'
}

const $request = {
    get: (url)=>{
        return new Promise((resolve, reject)=>{
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.onreadystatechange = function(){
                if (this.readyState === 4) {
                    resolve(this.responseText);
                }
            };
            request.onerror = function(err){
                reject(err);
            }
            request.send();
        });
    }
}


function setCookie(name, value, hours){
    if (hours){
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else{
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

/**
 * @function EPU = Exit PopUp - Ao tirar o mouse da janela abre um popup com produtos relacionado ao ultimo acessado pelo cliente
 * @param callback = executa função callback ao exibir popup
 */
function EPU(callback){
    $(document).on('mouseleave', function(e){
        if( e.clientY < 0 ){
            if(document.cookie.indexOf('ofertaExitPopup') == -1){
                callback();
            }
        }
    });
}


/**
 * @function APA = Armazena ultimo Produto Acessado
 */
function APA(){
    let body = $('body.pagina-produto');
    if(body.length > 0){
        let idProd  = body.attr('class').split('produto-')[1].split(' ')[0];
        let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
        let nameProd = $('.pagina-produto .principal .nome-produto').text();

        localStorage.setItem('APA', JSON.stringify([idProd, skuProd, nameProd]));
    }
}


function carrouselOWL(elemento){
    $(elemento).owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
        autoplayTimeout:5000,
        responsive:{
            800:{
                items:2
            }
        }
     });
}

/**
 * @function Cria HTML Exit PopUp na body
 */
function CHTMLEP(){
    $(`<div class="exit_popup_personalizado">
        <div class="content-popup">
            <div class="wrap-popup">
                <div class="header-popup">
                    <span class="title-popup">Não vá embora!</span>
                    <span class="title-popup-p">Olhe o que separamos para você, aproveite!</span>
                    <div class="btn-close-popup-personalizado">×</div>
                </div>
                <div class="body-popup">
                    <div class="carrousel-popup-personalizado"></div>
                </div>
            </div>
        </div>
    </div>`).appendTo('body');
}

/**
 * @function PDDPAPI = Pega Dados Do Produto na via API - função que pega os dados do produto via api atraves de request.
 */
function PDDPAPI(){

    CHTMLEP();

    let dataLastProd = JSON.parse(localStorage.getItem('APA'))

    $request.get(`https://api.awsli.com.br/v1/produto/${dataLastProd[0]}?format=json&chave_api=${chave.api}&chave_aplicacao=${chave.aplicacao}`).then(result=>{
        
        var dataProd = JSON.parse(result);
        let api = dataProd.categorias[dataProd.categorias.length -1].replace('/api/', '');

        $request.get(`https://api.awsli.com.br/${api}?format=json&chave_api=${chave.api}&chave_aplicacao=${chave.aplicacao}`).then(result=>{
            let data = JSON.parse(result);
            let url = data.url.replace('http:', 'https:');

            $('.exit_popup_personalizado .carrousel-popup-personalizado').load(`${url}?sort=mais_vendidos .listagem-linha:first-child>ul>li>div,.listagem-linha:nth-child(2)>ul>li>div`, ()=>{
                
                carrouselOWL('.exit_popup_personalizado .carrousel-popup-personalizado');
                console.log(dataProd.categorias.length -1 > 0);
                if(dataProd.categorias.length -1 > 0){
                        let prodCatLoad = $('.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .listagem-item:first-child a.nome-produto.cor-secundaria').first().text();
                        let lastProd = dataLastProd[2].split(' ');
                        var comparation = 0;
                        lastProd.forEach(item=>{
                            if(prodCatLoad.split(' ').includes(item)){
                                comparation++
                            }
                        });

                        console.log('comparation', comparation);
                        console.log('last', lastProd);

                    if(lastProd <= 3){
                        var comparationVal = 1;
                    }else if(lastProd <= 6){
                        var comparationVal = 2;
                    }else if(lastProd <= 9){
                        var comparationVal = 3;
                    }else if(lastProd <= 12){
                        var comparationVal = 4;
                    }else if(lastProd <= 15){
                        var comparationVal = 5;
                    }else {
                        var comparationVal = 6;
                    }

                    if(comparation < comparationVal){
                        $('.exit_popup_personalizado').remove();

                        CHTMLEP()

                        console.log('codigo executado');
                        let api2 = dataProd.categorias[dataProd.categorias.length -2].replace('/api/', '');

                        $request.get(`https://api.awsli.com.br/${api2}?format=json&chave_api=${chave.api}&chave_aplicacao=${chave.aplicacao}`).then(result=>{
                            let data2 = JSON.parse(result);
                            let url2 = data2.url.replace('http:', 'https:');
                                $('.exit_popup_personalizado .carrousel-popup-personalizado').load(`${url2}?sort=mais_vendidos .listagem-linha:first-child>ul>li>div,.listagem-linha:nth-child(2)>ul>li>div`, ()=>{
                                    carrouselOWL('.exit_popup_personalizado .carrousel-popup-personalizado');
                                });

                        });
                    }
                }

            });

        }); 


    }).catch(err=>{
        console.error(err);
    });
}


/**
 * @function BFEP - Botão que Fecha Exit Popup
 */
function BFEP(){
    $(document).on('click','.btn-close-popup-personalizado', function(){
        $(this).parents('.exit_popup_personalizado').removeClass('__open');
        setCookie('ofertaExitPopup','true', 12);
    });
}   

            


APA();

$(document).ready(function(){
    EPU(callback=>{
        if($('.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .listagem-item').length > 2){
            $('.exit_popup_personalizado').addClass('__open');
        }
    });
});

PDDPAPI();
BFEP();
