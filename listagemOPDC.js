
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
                var toARRAY = Array.prototype.slice.call(arrXML);
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
    var flutuanteprecoVenda = preco.replace('.', '').replace(',', '.');
    var flutuanteprecoDesconto = promocional.replace('.', '').replace(',', '.');
    return flutuanteporcDesconto = parseInt(Math.round((parseFloat(flutuanteprecoVenda) - parseFloat(flutuanteprecoDesconto)) / parseFloat(flutuanteprecoVenda) * 100));
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
 * @function verifyExists = verifica se o produto que esta acessando ja existe no 'iluminim-application-OPDC'
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
function PRROPA(catAcessada, nameProd, priceProd, xmlObject){
    return new Promise((resolve, reject)=>{
        var nameProduto = nameProd.split(' ');
        if(xmlObject){
            var comparation = parseInt(nameProduto.length / 2);

            let itemsFiltrado = xmlObject.items_data.filter(item=>{
                var count = 0;
                item.info_item.title.split(' ').forEach(words=>{
                    if(nameProduto.includes(words)){
                        count++
                    }
                });
                if(count > comparation){
                    //console.log(parseFloat(priceProd) * 2, parseFloat(item.info_item['g:sale_price'].replace(/\./g, '').replace(',','.')), item, parseFloat(priceProd) * 2 > parseFloat(item.info_item['g:sale_price'].replace(/\./g, '').replace(',','.')));
                    if(parseFloat(priceProd) * 2 > parseFloat(item.info_item['g:sale_price'].replace(/\./g, '').replace(',','.'))){
                        let catReferenceProdObject = item.info_item.categoria.split('> ');
                        if(catReferenceProdObject.includes(catAcessada)){
                            return item;
                        }
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

            console.log('items',items);
            console.log('itemsFiltrados', itemsFiltrado);

            var selected = itemsFiltrado.length > 4 ? itemsFiltrado : items;

            var random = Math.floor(Math.random() * selected.length -1);
            if(random > -1){
                if(random + 8 > selected.length -1){
                    var selectedRandom = selected.slice(selected.length -8, selected.length);
                    console.log(selected.length -8, selected.length);
                }else {
                    var selectedRandom = selected.slice(random, random +8);
                    console.log(random, random +8);
                }
            }

            resolve(selectedRandom == undefined ? selected.slice(0, 8) : selected.slice(0, 8));
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
        let xmlObject = JSON.parse(localStorage.getItem('produtos-iluminim'));

        var catAcessada;
        xmlObject.items_data.forEach(item=>{
            if(item.info_item['g:id'] == skuProd){
                 let catReferenceProdObject = item.info_item.categoria.split('> ');
                catAcessada = catReferenceProdObject[catReferenceProdObject.length -1];
            }
         });
        PRROPA(catAcessada, nameProd, priceProd, xmlObject).then(prodRelacionado=>{
            console.log(prodRelacionado);
            CHTMLL(RL(prodRelacionado));
            carrouselOWL('.produtos-carrossel.opdc .listagem-linha');
        });
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
                items:4
            }
        }
     });
}


/**
 * @function Cria HTML Listagem
 */
function CHTMLL(listagem){
    $(`
    <div class="listagem listagem-opdc listagem-application-iluminim">
        <h4 class="titulo borda-principal cor-secundaria _opdc">
            Outros produtos desta coleção!
        </h4>
        <ul data-produtos-linha="4" class="produtos-carrossel opdc personalizada">
            <div class="listagem-linha">
                ${listagem}
            </div>
        </ul>
    </div>`).insertBefore('.pagina-produto div#descricao');
}

/**
 * @function RL = Renderizar Listagem 
 * renderiza listagem personalizada;
 */
function RL(objectOPDC){
    if(objectOPDC){
        var listagem = objectOPDC.map(prod=>{
            console.log(prod);
            let item = prod.info_item;
            let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemOPDC');
            return `
                <div class="listagem-item opdc ${item.idProd}">
                    <a href="${linkUtm}" class="produto-sobrepor" title="${item.title}"></a>
                    <div class="imagem-produto"><img src="${item['g:image_link']}" alt="${item.title}" class="imagem-principal" draggable="false"> </div>
                        <div class="info-produto"> <a href="${linkUtm}" class="nome-produto cor-secundaria">${item.title}</a>
                            <div class="produto-sku hide">${item['g:id']}</div>
                                <div>
                                    <div class="preco-produto destaque-preco com-promocao">
                                        <div>
                                            <s class="preco-venda titulo">R$ ${item['g:price']}</s>
                                            <strong class="preco-promocional cor-principal titulo">R$ ${item['g:sale_price']}</strong>
                                        </div>
                                        ${item.installment ? `
                                        <div>
                                            <span class="preco-parcela"> 
                                                até 
                                                <strong class="cor-secundaria">${item.installment.months}</strong> 
                                                de 
                                                <strong class="cor-secundaria">R$ ${item.installment.price_months}</strong> 
                                                <span>sem juros</span>
                                            </span>
                                        </div>
                                        ` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="bandeiras-produto">
                            <span class="fundo-principal bandeira-promocao morno">${DP(item['g:price'], item['g:sale_price'])}% Desconto</span>
                        </div>
                </div>`;
        }).join('');

        return listagem;
    }   
}

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





