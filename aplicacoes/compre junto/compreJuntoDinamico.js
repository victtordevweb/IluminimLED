
const xml = {
    url: 'https://www.iluminim.com.br/xml/24e04/facebook.xml',
    utm: '?utm_source=Site&utm_medium=IluminimDev&utm_campaign=IluminimDev'
}
//https://www.iluminim.com.br/xml/358fd/googlemerchant.xml
//https://www.iluminim.com.br/xml/ab463/roihero.xml
//https://www.iluminim.com.br/xml/24e04/facebook.xml
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
 * @function convertPriceToBRL = transforma numeros em valores R$
 */
function convertPriceToBRL(number){
    return parseFloat(number.split(' ')[0]).toLocaleString('pt-br', {minimumFractionDigits: 2});
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
                                objectXML.items_data[indexBox].info_item.installment = {
                                    months: `${a.childNodes[0].textContent}`,
                                    price_months: convertPriceToBRL(`${a.childNodes[1].textContent}`) 
                                }
                            }else if(a.nodeName === 'link'){
                                let url = a.textContent.split('?utm_source')[0];

                                objectXML.items_data[indexBox].info_item[`${a.nodeName}`] = `${url}${xml.utm}`;
                            }else if(a.nodeName === 'g:price' || a.nodeName === 'g:sale_price'){
                                objectXML.items_data[indexBox].info_item[`${a.nodeName}`] = convertPriceToBRL(a.textContent);
                            }else if(a.nodeName === 'g:image_link'){
                                objectXML.items_data[indexBox].info_item[`${a.nodeName}`] = a.textContent;
                                if(a.textContent.includes('https://cdn.awsli.com.br')){
                                    objectXML.items_data[indexBox].info_item.idProd = a.textContent.split('/produto/')[1].split('/')[0];
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


/**
 * @functin Desconto Produto %;
 */
function DP(preco, promocional){
    console.log(preco, promocional);
    if(preco !== undefined || promocional !== undefined){
        var flutuanteprecoVenda = preco.replace('.', '').replace(',', '.');
        var flutuanteprecoDesconto = promocional.replace('.', '').replace(',', '.');
        return flutuanteporcDesconto = parseInt(Math.round((parseFloat(flutuanteprecoVenda) - parseFloat(flutuanteprecoDesconto)) / parseFloat(flutuanteprecoVenda) * 100));
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
 * @function verifyExists = verifica se o produto que esta acessando ja existe no 'iluminim-application-OQSPV'
 */
function verifyExists(data, skuNew){
    var boo = { boolean: false, index: null};
    data.filter((item, index)=>{
        if(item.skuProd == skuNew){
            boo.boolean = true;
            boo.index = index;
        }
    });
    return boo;
}

/**
 * @function PRROPA - Produtos Relacionados Referente O Produto Acessado Atualmente
 * essa função pega o nome do produto que esta na tela atualmente (na pagina de produto) e faz uma busca por produtos no xml referente ao nome do mesmo
 */
function PRROPA(nameProd, priceProd, xmlObject){
    return new Promise((resolve, reject)=>{
        var nameProduto = nameProd.split(' ');
        if(xmlObject){
            var comparation = parseInt(nameProduto.length / 2) + 1;

            let itemsFiltrado = xmlObject.items_data.filter(item=>{
                var count = 0;
                item.info_item.title.split(' ').forEach(words=>{
                    if(nameProduto.includes(words)){
                        count++
                    }
                });
                if(count > comparation){
                    if(parseFloat(priceProd) * 2 > parseFloat(item.info_item['g:sale_price'].replace(/\./g, '').replace(',','.'))){
                        return item;
                    }
                }
            });
            
            let items = xmlObject.items_data.filter(item=>{
                var count = 0;
                item.info_item.title.split(' ').forEach(words=>{
                    if(nameProduto.includes(words)){
                        count++
                    }
                });
                if(count > comparation){
                        return item;
                }
            });

            var selected = itemsFiltrado.length > 1 ? itemsFiltrado : items;

            var random = Math.floor(Math.random() * selected.length);

            if(random + 4 > selected.length -1){
                var selectedRandom = selected.slice(selected.length -4, selected.length);
                console.log(selected.length -4, selected.length);
            }else {
                var selectedRandom = selected.slice(random, random +4);
                console.log(random, random +4);
            }

            resolve(selectedRandom == undefined ? selected.slice(0, 4) : selected.slice(0, 4));
        }
    });
}

/**
 * @function APA = Armazenas ultimo Produto Acessado e executa outros scripts;
 */
function APA(){
    let body = $('body.pagina-produto');
    if(body.length > 0){
        let idProd  = body.attr('class').split('produto-')[1].split(' ')[0];
        let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
        let nameProd = $('.pagina-produto .principal .nome-produto').text();
        let priceProd = $('.acoes-produto.disponivel meta[itemprop="price"]').attr('content');

        PRROPA(nameProd, priceProd, JSON.parse(localStorage.getItem('produtos-iluminim'))).then(prodRelacionado=>{
            console.log(prodRelacionado);
            if(localStorage.hasOwnProperty('iluminim-application-CJD')){
                let arrayUA = JSON.parse(localStorage.getItem('iluminim-application-CJD'));
                let verify = verifyExists(arrayUA, skuProd);
                if(verify.boolean == true){
                    arrayUA.splice(verify.index, 1);
                }
                arrayUA.unshift({idProd, skuProd, prodRelacionado});
                if(arrayUA.length > 10){
                    arrayUA.pop();
                }
                localStorage.setItem('iluminim-application-CJD', JSON.stringify(arrayUA));
    
            }else {
                localStorage.setItem('iluminim-application-CJD', JSON.stringify([{idProd, skuProd, prodRelacionado}]));
            } 
        });
    }
}

/**
 * @function Cria HTML Listagem
 */
function CHTMLL(prodAcessado, listagem){
    if(listagem !== undefined && listagem.length > 3){
        $(`
        <div class="listagem-cjd listagem-application-iluminim">
            <div class="titulo-categoria borda-principal cor-principal _cjd">
                <strong>Compre junto ilm</strong>
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

/**
 * @param variacao = se o item conter variação vai ser marcado como true este parametro;
 */
function htmlListageItem(object){
    console.log(object);
    return object.map(prod=>{

    let item = prod.info_item;
    let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=compreJuntoDinamico');

    return `
    <div class="listagem-item cjd" data-id="${item.idProd}">
        <div class="trocar-prod">Trocar</div>
        <a href="${linkUtm}" class="produto-sobrepor" title="${item.title}"></a>
        <div class="imagem-produto"><img src="${item['g:image_link']}" alt="${item.title}" class="imagem-principal" draggable="false"> </div>
            <div class="info-produto"> <a href="${linkUtm}" class="nome-produto cor-secundaria">${item.title}</a><div class="ilm-app-stars"><img src="https://cdn.awsli.com.br/257/257163/arquivos/img-start-02-8.png"></div>
                    <div class="infos">
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
                                    <strong class="cor-secundaria">${item.installment.months}</strong> 
                                    de 
                                    <strong class="cor-secundaria">R$ ${item.installment.price_months}</strong> 
                                    <span>sem juros</span>
                                </span>
                            </div>
                            ` : ''}
                            <div class="bandeiras-produto">
                                <span class="fundo-principal bandeira-promocao morno">${DP(item['g:price'], item['g:sale_price'])}% Desconto</span>
                            </div>
                    </div>
                </div>
            </div>
    </div>`;

    }).join('');
}

/**
 * @function RL = Renderizar Listagem 
 * renderiza listagem personalizada;
 */
function RL(){
    if(localStorage.hasOwnProperty('iluminim-application-CJD')){
        
        let ua = JSON.parse(localStorage.getItem('iluminim-application-CJD'));
        let uaAleatorio =  ua[Math.floor(Math.random() * ua.length)];
        console.log('uaAleatorio', uaAleatorio);
        return uaAleatorio.prodRelacionado;
    }   
}

/**
 * @function FPANXML = Filtra Produto Acessado No XML
 */
function FPANXML(){
    let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
    let xmlObject = JSON.parse(localStorage.getItem('produtos-iluminim')).items_data;

    var p = xmlObject.filter(item=> item.info_item['g:id'] == skuProd ? item : '');

   if(!p.length > 0){
       p = xmlObject.filter(item=> item.info_item['g:item_group_id'] == skuProd ? item : '');
   }
    console.log('p > ', p);
	return p;
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
    
    let priceRiscadoProdAcessado = formatPrice('.cjd-prod-acessado.cjd-block .preco-produto s.preco-venda.titulo');
    let priceRiscadoDisparado = formatPrice('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active .preco-produto .preco-venda');
    let economizeTotal = (parseFloat(priceRiscadoProdAcessado) + parseFloat(priceRiscadoDisparado)).toFixed(2);

    let priceProdAcessado = formatPrice('.cjd-prod-acessado.cjd-block .preco-produto strong.titulo');
    let priceProdDisparado = formatPrice('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active .preco-produto strong.titulo');
    let precoTotal = convertPriceToBRL((parseFloat(priceProdAcessado) + parseFloat(priceProdDisparado)).toFixed(2));
    
    $('.listagem-cjd .economize-cjd').html(`Economize R$ ${economizeTotal - precoTotal}`);
    $('.listagem-cjd .cjd-info .price-total-cjd').html(`
        <span>POR APENAS</span>
        <span class="cjd-price">R$ ${precoTotal}</span>`);

}


/**
 * function BTNCOMPRAR - Ao clicar no botao comprar;
 */
function BTNCOMPRAR(){
    $('.btn-comprar-cjd').click(function(){
        let idAcessado = $('.listagem-cjd .cjd-prod-acessado.cjd-block .listagem-item.cjd').attr('data-id');
        let idDisparado = $('.listagem-cjd .cjd-prod-disparado.cjd-block .listagem-item.cjd.active').attr('data-id');

        $('.listagem-cjd').addClass('carregando');

        $request.get(`/carrinho/produto/${idAcessado}/adicionar`).then(()=>{
            $request.get(`/carrinho/produto/${idDisparado}/adicionar`).then(()=>{
                $('.listagem-cjd').removeClass('carregando');
            });
        });
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
            <option value="${item.idVariacao} ${item.skuVariacao}" data-sku="${item.skuVariacao}">${item.nameVariacao}</option>
        `;
    }).join('');

    return `
    <div class="listagem-item cjd variacao" data-id="${item.idProd}">
        <div class="trocar-prod">Trocar</div>
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

/**
 * function APDV = Alterar Preços Das Variações (change);
 */
 
function APDV(variationsAcessado){
    
    $('.cjd-prod-acessado .select-wrapper select').change(function(){
        let sku = $(this).val().split(' ')[1];  
        //console.log(variationsAcessado, id);

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
                    <strong class="cor-secundaria">${item.installment.months}</strong> 
                    de 
                    <strong class="cor-secundaria">R$ ${item.installment.price_months}</strong> 
                    <span>sem juros</span>
                </span>
            </div>
            ` : ''}
            <div class="bandeiras-produto">
                <span class="fundo-principal bandeira-promocao morno">${DP(item['g:price'], item['g:sale_price'])}% Desconto</span>
            </div>`);

            TPT();
    });
}




if(FPANXML().length > 1){
    CHTMLL( CPACV(FPANXML()), htmlListageItem(RL()) );
}else {
    CHTMLL( htmlListageItem(FPANXML()), htmlListageItem(RL()) );
}
APDV(FPANXML());

FQDUDA();
TPD();
BTNCOMPRAR()

let localProdsId = 'produtos-iluminim';
let refreshProds = 'atualizar-produtos-iluminim';  
if(document.cookie.indexOf(refreshProds) > -1){
    APA();
}else {
    setCookie(refreshProds, 'true', 23);
    XML(xml.url).then(xmlObject=>{
        localStorage.setItem(localProdsId, JSON.stringify(xmlObject));
        console.log(xmlObject);
        APA();
    });
}