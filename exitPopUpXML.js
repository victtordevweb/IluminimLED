
const xml = {
    url: 'https://www.iluminim.com.br/xml/358fd/googlemerchant.xml'
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

/**
 * @function XML = retorna um XML ja transformado em objeto para função
 */
function XML(url){
    return new Promise((resolve, reject)=>{
        let objectXML = {
            store_data: [],
            items_data: []
        };

        $request.get(url).then(resultXML=>{
            var xmlDOM = new DOMParser().parseFromString(resultXML, 'text/xml');
            var myXML = xmlDOM.childNodes
            var xmlOBJ = myXML[0];
            if( xmlOBJ.childNodes.length === 3 ) {
                console.log('é xml');
                var xmlItems = xmlOBJ.childNodes[1];
                var arrXML = xmlItems.children;
                var toARRAY = Array.prototype.slice.call(arrXML)
                toARRAY.forEach(function(e,i){
                var indexBox = i - 3;
                    if( e.nodeName === 'title' || e.nodeName === 'link' || e.nodeName === 'description'){
                        objectXML.store_data.push({
                            type: e.nodeName,
                            text: e.textContent
                        });
                    }else if( e.nodeName === 'item') {
                        var toARRAYitem = Array.prototype.slice.call(e.children);
                        objectXML.items_data.push({
                            full_text: e.textContent,
                            info_item: {},
                        });
                        toARRAYitem.forEach(function(a,b){
                            if( a.nodeName === 'g:installment'){
                                console.log(objectXML.items_data[indexBox].info_item);
                                objectXML.items_data[indexBox].info_item.installment = {
                                    months: `${a.childNodes[0].textContent}`,
                                    price_months: `${a.childNodes[1].textContent}`  
                                }
                            }else if(a.nodeName === 'g:product_type'){
                                if(objectXML.items_data[indexBox].info_item.categoriaprincipal){
                                    objectXML.items_data[indexBox].info_item.categoria = a.textContent;
                                }else {
                                    objectXML.items_data[indexBox].info_item.categoriaprincipal = a.textContent;
                                }
                            }else{
                                objectXML.items_data[indexBox].info_item[`${a.nodeName}`] = a.textContent;
                            }
                        });    
                    }
                });
            
            }
            resolve(objectXML);
        });
    });
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
 * @param xmlObject = é o xml transformado em objeto;
 * @param localProdsId = é o id no localStorage aonde se encontra os produtos para manipulaçoes;
 */
CHTMLEP();
function PDDPAPI(xmlObject, localProdsId){

    let dataLastProd = JSON.parse(localStorage.getItem('APA'));
    let prodObject = xmlObject.items_data.filter(item=> item.info_item['g:id'] == `${dataLastProd[1]}` ? item : '');
    console.log(prodObject[0]);
    let catReferenceProdObject = prodObject[0].info_item.categoria.split('> ');
    let lastCatReference = catReferenceProdObject[catReferenceProdObject.length -1];
    let cat = $(`.menu.superior a[title="${lastCatReference}"]`).first().attr('href');

    $('.exit_popup_personalizado .carrousel-popup-personalizado').load(`${cat}?sort=mais_vendidos .listagem-linha:first-child>ul>li>div,.listagem-linha:nth-child(2)>ul>li>div`, ()=>{
                
        carrouselOWL('.exit_popup_personalizado .carrousel-popup-personalizado');
    
        /*if(catReferenceProdObject.length -1 > 0){
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
                console.log(comparation, comparationVal);
                if(comparation < comparationVal){
                    $('.exit_popup_personalizado').remove();
                    CHTMLEP();
                    console.log('codigo executado');
                    console.log(catReferenceProdObject.length);
                    if(catReferenceProdObject.length >= 2){
                        console.log('xd');
                        let lastCatReference = catReferenceProdObject[catReferenceProdObject.length -2];
                        let cat = $(`.menu.superior a[title="${lastCatReference}"]`).first().attr('href');
                        $('.exit_popup_personalizado .carrousel-popup-personalizado').load(`${cat}?sort=mais_vendidos .listagem-linha:first-child>ul>li>div,.listagem-linha:nth-child(2)>ul>li>div`, ()=>{
                            carrouselOWL('.exit_popup_personalizado .carrousel-popup-personalizado');
                        });
                    }
                }
        }*/

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


let localProdsId = 'produtos-iluminim';
let refreshProds = 'atualizar-produtos-iluminim';  
if(document.cookie.indexOf(refreshProds) > -1){
    PDDPAPI(JSON.parse(localStorage.getItem(localProdsId)), localProdsId);
}else {
    setCookie(refreshProds, 'true', 23);
    XML(xml.url).then(xmlObject=>{
        localStorage.setItem(localProdsId, JSON.stringify(xmlObject));
        console.log(xmlObject);
        PDDPAPI(xmlObject, localProdsId);
    }); 
}




EPU(callback=>{
    if($('.exit_popup_personalizado .wrap-popup .carrousel-popup-personalizado .listagem-item').length > 2){
        $('.exit_popup_personalizado').addClass('__open');
    }
});


BFEP();
