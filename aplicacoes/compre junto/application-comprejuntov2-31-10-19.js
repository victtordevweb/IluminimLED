
function compreJunto(){

/**
 * @function APA = Armazenas ultimo Produto Acessado e executa outros scripts;
 * @param xmlObjectProds = é os produtos objeto xml convertido para objeto json,
 * @param nameLocalStorage = é o nome que vai ser setado no localstorage dos produtos relcionados referente ao produto acessado;
 */

function APA(xmlObjectProds, nameLocalStorage){
    let body = $('body.pagina-produto');
    if(body.length > 0){
        let idProd  = body.attr('class').split('produto-')[1].split(' ')[0];
        let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
        let nameProd = $('.pagina-produto .principal .nome-produto').text();
        let priceProd = $('.acoes-produto.disponivel meta[itemprop="price"]').attr('content');

        let prodAcessadoArr = Utils.PUPA(xmlObjectProds);
        let prodAcessado = prodAcessadoArr[Math.floor(Math.random() * prodAcessadoArr.length)];
        
        let prodRelacionado = Utils.GPRDPA(prodAcessado.info_item, xmlObjectProds, {qtdProdsReturn: 4, filtrarPorCategoria: false, filtrarPorPreco: true});

        if(localStorage.hasOwnProperty(nameLocalStorage)){
            if(prodRelacionado){
                let arrayUA = JSON.parse(localStorage.getItem(nameLocalStorage));
                let verify = Utils.verifyExists(arrayUA, skuProd);
                if(verify.boolean == true){
                    arrayUA.splice(verify.index, 1);
                }
                arrayUA.unshift({idProd, skuProd, nameProd, priceProd, prodRelacionado});
                if(arrayUA.length > 12){
                    arrayUA.pop();
                }
                localStorage.setItem(nameLocalStorage, JSON.stringify(arrayUA));
            }
        }else{
            localStorage.setItem(nameLocalStorage, JSON.stringify([{idProd, skuProd, nameProd, priceProd, prodRelacionado}]));
        }
    }
}


function initCompreJunto(xmlObjectProds){


/**
 * @function Cria HTML Listagem
 */
function CHTMLL(prodAcessado, listagem){
    if(listagem !== undefined){
        $(`
        <div class="listagem-cjd listagem-application-iluminim">
            <div class="titulo-categoria borda-principal cor-principal _cjd">
                <strong>Compre junto</strong>
            </div>
            <ul class="produtos-carrossel cjd personalizada">
                <div class="cjd_loading"><div class="wrap-load"><img src="https://uploaddeimagens.com.br/images/001/786/965/original/anm-iluminim-loading-18.gif"></div></div>
                <div class="listagem-linha">
                    <div class="cjd-prod-acessado cjd-block">
                        ${prodAcessado}
                    </div>
                    <div class="cjd-prod-disparado cjd-block">
                        ${listagem}
                    </div>
                </div>

                <div class="cjd-info">
                    <span class="cjd-info-title">Aproveite e compre junto!</span>
                    <div class="economize-cjd"></div>
                    <div class="cjd-info-title2">Compre os 2 produtos</p></div>
                    <div class="price-total-cjd"></div>
                    <div class="btn-comprar-cjd">COMPRAR</span>
                </div>
            </ul>
        </div>`).insertAfter('.pagina-produto .produto>.row-fluid:first-child');
    }
}


function htmlListageItem(object, btnQtd = true){
    if(object){
    return object.map(prod=>{

    let item = prod.info_item;
    let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=compreJuntoDinamico');

    return Utils.htmlListagemItem(item, linkUtm, true, btnQtd);

    }).join('');

    }
}

/**
 * @function RLEOC = Renderizar Listagem Em Objeto baseado nas categorias
 */
function RLEOC(xmlObjectProds){
   

    let Cats = {
        ['lâmpadas led']: 'pendente',
        ['fita de led']: 'spots led',
        ['luminárias públicas led']: 'refletores holofotes led',
        ['luminaria emergencia led']: 'arandela led',
        ['lustre']: 'pendente',
        ['arandelas led']: 'spots led',
        ['luminária industrial']: 'luminárias públicas led',
        ['luminária led de mesa']: 'pendente',
        ['soquete led']: 'lâmpadas led',
        ['fontes led']: 'fita de led 12v',
        ['chip led']: 'refletores holofotes led',
        ['driver led']: 'luminarias plafons led',
        ['emendas led']: 'fita de led',
        ['conectores led']: 'fita de led',
        ['luminária led solar']: 'luminária pública led solar',
        ['câmera segurança']: 'dvr stand alone',
        ['refletores holofotes led']: 'balizador led',
        ['spots led']: 'fita de led',
        ['luminarias plafons led']: 'spots led',
        ['balizador led']: 'espeto led'
}
    
    let prodAcessadoArr = Utils.PUPA(xmlObjectProds);
    let prodObjVerify = prodAcessadoArr[Math.floor(Math.random() * prodAcessadoArr.length)];
    let polyfill = []
    if(prodObjVerify.info_item.categoria){
        var prodObj = prodObjVerify.info_item.categoria.toLowerCase().split(' > ');
        prodObj.forEach(item=>{
            if(!polyfill.includes(item)){
                polyfill.push(item);
            }
        });
    }

    if(prodObjVerify.info_item.categoriaprincipal){
        var prodObj = prodObjVerify.info_item.categoriaprincipal.toLowerCase().split(' > ');
        prodObj.forEach(item=>{
            if(!polyfill.includes(item)){
                polyfill.push(item);
            }
        });
    }

    let cat = polyfill.filter(item=> Cats[item] !== undefined ? item : false);
    
    let catForObject;
    if(cat.length > 0){
        if(cat.length > 1){
            let catsArr = cat.map(item=> Cats[item] !== undefined ? Cats[item] : false);
            catForObject = catsArr[Math.floor(Math.random() * catsArr.length)];
        }else {
            catForObject = Cats[cat];
        }
    }

    let prodsWithCatSelect = xmlObjectProds.filter(item=> {
        if(item.info_item.categoria){
            if(item.info_item.categoria.toLowerCase().split(' > ').includes(catForObject) || item.info_item.categoriaprincipal.toLowerCase().split(' > ').includes(catForObject)){
                return item
            }
        }else{
            if(item.info_item.categoriaprincipal.toLowerCase().split(' > ').includes(catForObject)){
                return item
            }         
        }
    }); 

    let random = Math.floor(Math.random() * prodsWithCatSelect.length);

    if(random + 4 > prodsWithCatSelect.length){
        var selectedRandom = prodsWithCatSelect.slice(prodsWithCatSelect.length -4, prodsWithCatSelect.length);
    }else {
        var selectedRandom = prodsWithCatSelect.slice(random, random +4);
    }

    return selectedRandom == undefined ? prodsWithCatSelect.slice(0, 4) : selectedRandom;
}


/**
 * @function RL = Renderizar Listagem EM OBJETO
 * renderiza listagem personalizada;
 * @param prodAcessado = recebe o objeto do produto acessado via json do proprio codigo para verificar se o prod acessado é pra ser dinamico ou não, (produtos disparados do compre junto);
 */
function RL(prodAcessado, xmlObjectProds){
    let nameProdAcessado  = $('.pagina-produto .principal .nome-produto').text().toLowerCase();

    if(prodAcessado == undefined){  
        //condição para executar compre junto por categoria;
        if(RLEOC(xmlObjectProds).length > 0){
            return RLEOC(xmlObjectProds);
        }
    }else{
        if(prodAcessado.dinamico == true){
             //condição para executar compre junto baseado na navegação do cliente;
            if(localStorage.hasOwnProperty('iluminim-application-CJD')){
                let ua = JSON.parse(localStorage.getItem('iluminim-application-CJD'));
                let uaAleatorio =  ua[Math.floor(Math.random() * ua.length)];


                if(uaAleatorio.prodRelacionado.length < 2){
                    if(uaAleatorio.prodRelacionado[0].info_item.title.toLowerCase() !== nameProdAcessado){
                        return uaAleatorio.prodRelacionado;
                    }
                }else{
                    return uaAleatorio.prodRelacionado;
                }
            }
        }else {
            //condição para executar compre junto baseado no objeto dentro do código;
            return xmlObjectProds.filter(itemProd => {
                if( prodAcessado.disparados.includes(itemProd.info_item['g:id'])){
                    return itemProd;
                }
            });
        }
    }
}




/**
 * function FQDUDA = Função Que Deixa Um Produto Disparado Ativo
 */
function FQDUDA(){
    let disparados = $('.cjd-prod-disparado.cjd-block .listagem-item.cjd');
    let elemento = $('.cjd-prod-disparado.cjd-block .listagem-item.cjd')[Math.floor(Math.random() * disparados.length)];
    $(elemento).addClass('active');
    if(!$('.cjd-prod-acessado.cjd-block .select-wrapper').length > 0){
        TPT();
    }
}


/**
 * function TPD = Trocar Produto Disparado
 */
function TPD(){
    if($('.listagem-cjd .cjd .listagem-linha .cjd-prod-disparado .listagem-item.cjd').length < 2){
        $('.listagem-cjd .cjd .listagem-linha .cjd-prod-disparado .listagem-item.cjd').addClass('remove-btn-change');
    }
    $('.listagem-cjd .cjd .listagem-linha .cjd-prod-disparado .trocar-prod').click(function(){
        var parent = $(this).parents('.listagem-item.cjd');
        parent.removeClass('active');
        setTimeout(()=>{
            if(parent.next().length > 0){
                parent.next().addClass('active');
            }else {
                $('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd').first().addClass('active');
            }
            if(!$('.cjd-prod-acessado.cjd-block .infos').text() == ''){
                TPT();
            }
        },500);
    });

}

/**
 * function TPT = Trocar Preços Total
 */
function TPT(){
    function formatPrice(seletor){
        return $.trim($(seletor).text()).replace('R$ ', '').replace(/\./g, '').replace(/\,/g, '.');
    }

    let priceRiscadoDisparado = parseFloat(formatPrice('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active .preco-produto .preco-venda')) * parseFloat($('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active #number').val());
    let priceProdDisparado = parseFloat(formatPrice('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active .preco-produto strong.titulo')) * parseFloat($('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active #number').val());

    let priceRiscadoProdAcessado = formatPrice('.cjd-prod-acessado.cjd-block .preco-produto s.preco-venda.titulo');
    
    let economizeTotal = (parseFloat(priceRiscadoProdAcessado) + parseFloat(priceRiscadoDisparado)).toFixed(2);

    let priceProdAcessado = formatPrice('.cjd-prod-acessado.cjd-block .preco-produto strong.titulo');


    let precoTotal = (parseFloat(priceProdAcessado) + parseFloat(priceProdDisparado)).toFixed(2);
    
    $('.listagem-cjd .economize-cjd').html(`Economize R$ ${Utils.convertPriceToBRL((economizeTotal - precoTotal).toFixed(2))}`);
    $('.listagem-cjd .cjd-info .price-total-cjd').html(`
        <span>POR APENAS</span>
        <span class="cjd-price">R$ ${Utils.convertPriceToBRL(precoTotal)}</span>`);

}

/**
 * function BTNCOMPRAR - Ao clicar no botao comprar;
 */
function BTNCOMPRAR(){
    $(document).on('click', '.btn-comprar-cjd', function(){
        let idAcessado = $('.listagem-cjd .cjd-prod-acessado.cjd-block .listagem-item.cjd').attr('data-id');
        let idDisparado = $('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active').attr('data-id');
        let qtdDisprado = $('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active #number').val();
        if($('.cjd-prod-acessado.cjd-block .infos').text() == ''){
            $('.listagem-cjd .cjd-prod-acessado.cjd-block .select-wrapper select').addClass('error');
            alert('Selecione uma variação');
        }else {
            $('.listagem-cjd').addClass('carregando');
            Utils.request.get(`/carrinho/produto/${idAcessado}/adicionar`).then(()=>{
                Utils.request.get(`/carrinho/produto/${idDisparado}/adicionar/${qtdDisprado}`).then(()=>{
                    $('.listagem-cjd').removeClass('carregando');
                    $('.listagem-cjd .btn-comprar-cjd').replaceWith(`<div class="itens-adicionados"><a href="/carrinho/index">Produtos adicionado ao carrinhos<i class="fa fa-check" aria-hidden="true"></i> </a></div>`);
                });
            });
        }

    });
}

/**
 * function CPACV = Carrega Produto Acessado Com Variação;
 */
function CPACV(object){
    let nameProdAcessado = $('.pagina-produto .principal .nome-produto').text().toLowerCase();

    let item = object[0].info_item;
    //let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=compreJuntoDinamico');

    window.variations = [];
    object.forEach(vars=>{
        let nameVariacao = $.trim(vars.info_item.title.toLowerCase().split(`${nameProdAcessado}`)[1]);
        let idVariacao = $(`.acoes-produto.hide.disponivel.SKU-${vars.info_item['g:id']}`).attr('data-produto-id');
        let skuVariacao = vars.info_item['g:id'];
        variations.push({nameVariacao, idVariacao, skuVariacao});
    });

    let variacoesHTML = variations.map(item=>{
        return `
            <option value="${item.idVariacao} ${item.skuVariacao}" data-sku="${item.skuVariacao}">${item.nameVariacao == '' ? item.skuVariacao : item.nameVariacao}</option>
        `;
    }).join('');

    return `
    <div class="listagem-item cjd variacao" data-id="${item.idProd}">
        <div class="imagem-produto"><img src="${item['g:image_link']}" alt="${item.title}" class="imagem-principal" draggable="false"> </div>
            <div class="info-produto"> <a href="?utm_source=Site&utm_medium=IluminimDev&utm_campaign=compreJuntoDinamico" class="nome-produto cor-secundaria">${item.title}</a><div class="ilm-app-stars"><img src="https://cdn.awsli.com.br/257/257163/arquivos/img-start-02-8.png"></div>
                <div class="select-wrapper">
                    <select class="select">
                        <option value="sv" selected disabled>Selecionar variação</option>
                        ${variacoesHTML}
                    </select>
                </div>
                <div class="infos"></div>
            </div>
    </div>`;

}


function verifyBtnQtd(){

    $(document).on('click', '.listagem-cjd #increase', function(){
        var inputVal = parseInt($(this).siblings('#number').val());
        $(this).siblings('#number').val(inputVal +1);
        $(this).siblings('#number').change();
    });

    $(document).on('click', '.listagem-cjd #decrease', function(){
        var inputVal = parseInt($(this).siblings('#number').val());
        if(inputVal >= 2){
            $(this).siblings('#number').val(inputVal -1);
            $(this).siblings('#number').change();
        }
    });

    $('.listagem-cjd input#number').keyup(function(){
        if($(this).val() !== ''){
            if($(this).val() <= 0){
                $(this).val('1');
            }
        }
    });

    $('.listagem-cjd input#number').change(function(){
        if($(this).val() == ''){
            $(this).val('1');
        }
        if(!$('.cjd-prod-acessado.cjd-block .infos').text() == ''){
            TPT();
        }
    });
}

/**
 * @function APDV = Alterar Preços Das Variações (change);
 */

function APDV(variationsAcessado){
    
    $('.cjd-prod-acessado .select-wrapper select').change(function(){
        $(this).removeClass('error');
        let id = $(this).val().split(' ')[0];  
        let sku = $(this).val().split(' ')[1];  
        $(this).parents('.listagem-item.cjd.variacao').attr('data-id', `${id}`);

        var item = variationsAcessado.filter(item=> item.info_item['g:id'] == sku ? item : '')[0].info_item;

        $(this).parents('.select-wrapper').siblings('.infos').html(` 
        <div class="produto-sku hide">${item['g:id']}</div>
        <div class="preco-produto destaque-preco com-promocao">
            <div>
                <s class="preco-venda titulo">R$ ${item['g:price']}</s>
                <strong class="preco-promocional cor-principal titulo">R$ ${item['g:sale_price']}</strong>
            </div>
            ${item.installment ? `
            <div>
                <span class="preco-parcela" style="font-size: 12px !important;"> 
                    até 
                    <strong class="cor-secundaria">${item.installment.months}x</strong> 
                    de 
                    <strong class="cor-secundaria">R$ ${item.installment.price_months}</strong> 
                    <span>sem juros</span>
                </span>
            </div>
            ` : ''}
            <div class="bandeiras-produto">
                <span class="fundo-principal bandeira-promocao morno">${Utils.DP(item['g:price'], item['g:sale_price'])}% Desconto</span>
            </div>`);

            TPT();
    });
}



    let prodAcessadoSku = $('.produto .codigo-produto span[itemprop="sku"]').text();
    
    let prodsEspecificos = {
        ["PAR20-7WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["LT-240BF"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["LT-120BQ"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["D-3WRGB"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["GU10-5WBF"]: {
            dinamico: false,
            disparados: ["1020"]
        },
        ["GU10-5WBQ"]: {
            dinamico: false,
            disparados: ["1020"]
        },
        ["GU10-6-5WBF"]: {
            dinamico: false,
            disparados: ["1020"]
        },
        ["G4-2W-BQ"]: {
            dinamico: false,
            disparados: ["MG-9005"]
        },
        ["G9B-5WBF-110V"]: {
            dinamico: false,
            disparados: ["1020"]
        },
        ["PAR20-7WBQ"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["PAR38-18WW"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-U16WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["L-U20WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["BULBO-10W"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-7W"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-5WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-12W"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-15WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["PAR38-18W"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["PAR30-11W3K"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["LT-60BQ"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["BULBO-10W-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["L-U9WBQ"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["BULBO-10W-KIT100"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT100"]
        },
        ["BULBO-12W-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-12W-KIT100"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT100"]
        },
        ["BULBO-12W-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["BULBO-5W-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["BULBO-5W-KIT100"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT100"]
        },
        ["BULBO-5W-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-15W-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-15W-KIT100"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT100"]
        },
        ["BULBO-15W-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["LT-120BF-KIT5"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT10"]
        },
        ["LT-60BF-KIT5"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT10"]
        },
        ["LT-240BF-KIT5"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT10"]
        },
        ["LT-120BF-KIT10"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["PAR30-11W6K"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-U70WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-U7WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-U12WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["T8-60CM-60-9W-T-BF"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["L-U16WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-U20WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["LTC-120-18W-C-BQ"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["VLV-2WBQ-SB"]: {
            dinamico: false,
            disparados: ["1012"]
        },
        ["VLV-2WBQ-CB"]: {
            dinamico: false,
            disparados: ["1012"]
        },
        ["LP-33365"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["G95-4W"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["ST58-4W"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["BULBO-10W-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["GU10-4-5W-3000K"]: {
            dinamico: false,
            disparados: ["1020"]
        },
        ["AP-2688-W"]: {
            dinamico: false,
            disparados: ["AHD-9004N"]
        },
        ["BSE27L-KIT10"]: {
            dinamico: false,
            disparados: ["BULBO-12W-KIT10"]
        },
        ["LT-60BF-KIT10"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["LT-60BQ-KIT10"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["LT-240BF-KIT10"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["BULBO-7W-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-8W-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-9-5WBQ-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-9-5WBF-KIT10"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT10"]
        },
        ["BULBO-7W-KIT100"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT100"]
        },
        ["BULBO-9-5W-KIT100"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT100"]
        },
        ["LT-240BF-KIT12"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT12"]
        },
        ["LT-120BF-KIT12"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT12"]
        },
        ["BULBO-7W-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["BULBO-8W-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["BSE27L-KIT12"]: {
            dinamico: false,
            disparados: ["BULBO-12W-KIT12"]
        },
        ["LT-60BF-KIT12"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT12"]
        },
        ["LT-60BQ-KIT12"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT12"]
        },
        ["BULBO-9-5WBF-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["BULBO-15W-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["BULBO-9-5WBQ-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["BULBO-12W-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["BULBO-5W-KIT12"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT12"]
        },
        ["LT-60BQ-KIT20"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["LT-240BF-KIT20"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["LT-120BF-KIT20"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT20"]
        },
        ["BSE27L-KIT20"]: {
            dinamico: false,
            disparados: ["BULBO-12W-KIT20"]
        },
        ["LT-60BF-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-12W-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-7W-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-10W-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-9-5WBQ-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-8W-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BSE27L-KIT5"]: {
            dinamico: false,
            disparados: ["BULBO-12W-KIT5"]
        },
        ["BULBO-9-5WBF-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-5W-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-15W-KIT20"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT20"]
        },
        ["BULBO-10W-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["LT-60BQ-KIT5"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT10"]
        },
        ["BULBO-7W-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["BULBO-8W-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["BULBO-12W-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["BULBO-15W-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["BULBO-9-5WBF-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["BULBO-9-5WBQ-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["BULBO-5W-KIT5"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT5"]
        },
        ["LT-60BF-KIT50"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT50"]
        },
        ["LT-60BQ-KIT50"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT50"]
        },
        ["BSE27L-KIT50"]: {
            dinamico: false,
            disparados: ["BULBO-12W-KIT50"]
        },
        ["LT-240BF-KIT50"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT50"]
        },
        ["BULBO-7W-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["BULBO-8W-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["BULBO-9-5WBQ-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["LT-120BF-KIT50"]: {
            dinamico: false,
            disparados: ["SOQ-T8-KIT50"]
        },
        ["L-U12WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["BULBO-9-5WBF-KIT50"]: {
            dinamico: false,
            disparados: ["BSE27L-KIT50"]
        },
        ["L-U24WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["L-U24WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-U3WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["L-U5WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["L-U9WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["LP-32832"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["LP-32849"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["L-T120-AM"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["LT-120BF"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["L-T120-AZ"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["L-T120-RO"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["L-T120-VE"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["L-T120-VM"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["LT-60BF"]: {
            dinamico: false,
            disparados: ["SOQ-T8"]
        },
        ["SOQ-PLUG-E27"]: {
            dinamico: false,
            disparados: ["L-U16WBQ"]
        },
        ["BULBO-T-15W-INBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-T-4-6W-IN"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-15WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-T-9W-IN"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-8WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-5WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-8WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-9-5WBQ"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-9-5WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["GU10-3WBQ"]: {
            dinamico: false,
            disparados: ["1020"]
        },
        ["PAR20-8WW"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["PAR20-5WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["L-U30WBF"]: {
            dinamico: false,
            disparados: ["SOQ-PLUG-E27"]
        },
        ["L-U7WBF"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-10WBF-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-10WBQ-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-12WBF-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-12WBQ-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-15WBF-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-5WBF-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-7WBF-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-5WBQ-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-5WRGB"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-9-5WBF-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["BULBO-7WBQ-R"]: {
            dinamico: false,
            disparados: ["BSE27L"]
        },
        ["RS-02001PT-BOLA"]: {
            dinamico: false,
            disparados: ["BULBO-9-5WBF"]
        },
        ["GD-GD2004"]: {
            dinamico: false,
            disparados: ["TL-1-B"]
        },
        ["GD-GD3003"]: {
            dinamico: false,
            disparados: ["TL-2-W"]
        },
        ["STB-10-BQ"]: {
            dinamico: false,
            disparados: ["TL-1-5-W"]
        },
        ["TL-1-W"]: {
            dinamico: false,
            disparados: ["GD-GD3003"]
        },
        ["STB-10-BN"]: {
            dinamico: false,
            disparados: ["TL-1-W"]
        },
        ["STB-18-BF"]: {
            dinamico: false,
            disparados: ["TL-2-W"]
        },
        ["GD-GD2003"]: {
            dinamico: false,
            disparados: ["TL-1-5-B"]
        },
        ["GD-GD3004"]: {
            dinamico: false,
            disparados: ["TL-1-5-W"]
        },
        ["TL-1-5-W"]: {
            dinamico: false,
            disparados: ["GD-GD3004"]
        },
        ["TL-2-W"]: {
            dinamico: false,
            disparados: ["STB-10-BQ"]
        },
        ["TL-1-B"]: {
            dinamico: false,
            disparados: ["GD-GD2004"]
        },
        ["TL-1-5-B"]: {
            dinamico: false,
            disparados: ["GD-GD2004"]
        },
        ["TL-2-B"]: {
            dinamico: false,
            disparados: ["GD-GD2003"]
        },
        ["RS-02001VM-BOLA"]: {
            dinamico: false,
            disparados: ["BULBO-9-5WBF"]
        },
        ["MG-9003"]: {
            dinamico: false,
            disparados: ["G4-2W-BQ"]
        },
        ["RS-01001AM-BELGICA"]: {
            dinamico: false,
            disparados: ["ST58-4W"]
        },
        ["RS-01001VM-BELGICA"]: {
            dinamico: false,
            disparados: ["ST58-4W"]
        },
        ["RS-01001PT-BELGICA"]: {
            dinamico: false,
            disparados: ["ST58-4W"]
        },
        ["RS-01001CB-BELGICA"]: {
            dinamico: false,
            disparados: ["ST58-4W"]
        },
        ["RS-01001AZ"]: {
            dinamico: false,
            disparados: ["ST58-4W"]
        }
    }

    if(RL(prodsEspecificos[prodAcessadoSku], xmlObjectProds)){
        if(!RL(prodsEspecificos[prodAcessadoSku], xmlObjectProds).length < 1){
            if(Utils.PUPA(xmlObjectProds).length > 1){
                // prod acessado com variação
                CHTMLL( CPACV(Utils.PUPA(xmlObjectProds)), htmlListageItem(RL(prodsEspecificos[prodAcessadoSku], xmlObjectProds)) );
            }else {
                // prod acessado sem variação
                CHTMLL( htmlListageItem(Utils.PUPA(xmlObjectProds), false), htmlListageItem(RL(prodsEspecificos[prodAcessadoSku], xmlObjectProds)) );
            }
        }
    }
        
    APDV(Utils.PUPA(xmlObjectProds));
    FQDUDA();
    TPD();
    BTNCOMPRAR();
    verifyBtnQtd();

}


Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    APA(xmlObjectProds, 'iluminim-application-CJD');
    initCompreJunto(xmlObjectProds);
});


}

if($('body.pagina-produto').length > 0){
    compreJunto();
}