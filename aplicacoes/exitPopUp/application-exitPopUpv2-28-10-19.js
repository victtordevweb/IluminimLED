

function exitPopUp(){

/**
 * @function APA = Armazena ultimo Produto Acessado
 */
function APA(){
    let body = $('body.pagina-produto');
    if(body.length > 0){
        let idProd  = body.attr('class').split('produto-')[1].split(' ')[0];
        let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
        let nameProd = $('.pagina-produto .principal .nome-produto').text();

        localStorage.setItem('iluminim-application-OEP', JSON.stringify([idProd, skuProd, nameProd]));
    }
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
                    <div class="carrousel-popup-personalizado listagem-application-iluminim"></div>
                </div>
            </div>
        </div>
    </div>`).appendTo('body');
}

/**
 * @function PDDPXML = Pega Dados Do Produto na via XML - função que pega os dados do produto via api atraves de request.
 * @param xmlObject = é o xml transformado em objeto;
 * @param localProdsId = é o id no localStorage aonde se encontra os produtos para manipulaçoes;
 * OEP - Overlay Exit Popup
 */
function PDDPXML(xmlObjectProds, callback){

    let dataLastProd = JSON.parse(localStorage.getItem('iluminim-application-OEP'));

    var prodObject = xmlObjectProds.filter(item=> {
            if(item.info_item){
                if(item.info_item['g:id'] == dataLastProd[1]){
                    return item
                }
            }
        });
    if(prodObject.length  < 1){
        prodObject = xmlObjectProds.filter(item=> {
            if(item.info_item){
                if(item.info_item['g:item_group_id'] == dataLastProd[1]){
                    return item;
                }
            }
        });
    }
    
    let catAcessadaWaiting = prodObject[Math.floor(Math.random() * prodObject.length)].info_item;


    if(catAcessadaWaiting.categoria){
        catAcessadaWaiting = catAcessadaWaiting.categoria.split(' > ');
    }else{
        catAcessadaWaiting = catAcessadaWaiting.categoriaprincipal.split(' > ');
    }

    let lastCatReference = catAcessadaWaiting[catAcessadaWaiting.length -1];

    let cat = $(`.menu.superior a[title="${lastCatReference}"]`).first().attr('href');

    $('.exit_popup_personalizado .carrousel-popup-personalizado').load(`${cat}?sort=mais_vendidos .listagem-linha:first-child>ul>li>div,.listagem-linha:nth-child(2)>ul>li>div`, ()=>{
        Utils.carrouselOWL('.exit_popup_personalizado .carrousel-popup-personalizado', true);
        $('.exit_popup_personalizado .carrousel-popup-personalizado .listagem-item a.produto-sobrepor').each(function(){
            //$(this).attr('href', `${$(this).attr('href')}?utm_source=Site&utm_medium=IluminimDev&utm_campaign=exitpopup`);
        });

        callback();
    });

}

/**
 * @function BFEP - Botão que Fecha Exit Popup
 */
function BFEP(){
    $(document).on('click','.btn-close-popup-personalizado', function(){
        $(this).parents('.exit_popup_personalizado').removeClass('__open');
        Utils.setCookie('ofertaExitPopup','true', 5);
    });
}




Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    CHTMLEP();
    
    APA();

    PDDPXML(xmlObjectProds, callback=>{

        EPU(callback=>{
            if($('.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .listagem-item').length > 2){
                $('.exit_popup_personalizado').addClass('__open');
            }
        });

    });

    BFEP();
});

}

exitPopUp();