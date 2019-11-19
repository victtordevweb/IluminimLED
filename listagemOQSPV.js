
const Utils = {
    xml: {
        url: 'https://www.iluminim.com.br/xml/24e04/facebook.xml',
        utm: '?utm_source=Site&utm_medium=IluminimDev&utm_campaign=IluminimDev'
    },
    //https://www.iluminim.com.br/xml/358fd/googlemerchant.xml
    //https://www.iluminim.com.br/xml/ab463/roihero.xml
    //https://www.iluminim.com.br/xml/24e04/facebook.xml

    request: {
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
    },

    /**
     * @function convertPriceToBRL = transforma numeros em valores R$
     */
    convertPriceToBRL:(number)=>{
        return parseFloat(number.split(' ')[0]).toLocaleString('pt-br', {minimumFractionDigits: 2});
    },


    /**
     * @function generateXML = retorna um XML ja transformado em objeto para função
     */
    generateXML:(url)=>{
        return new Promise((resolve, reject)=>{
            let objectXML = {
                store_data: [],
                items_data: []
            };

            Utils.request.get(url).then(resultXML=>{
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
                                        price_months: Utils.convertPriceToBRL(`${a.childNodes[1].textContent}`) 
                                    }
                                }else if(a.nodeName === 'link'){
                                    let url = a.textContent.split('?utm_source')[0];

                                    objectXML.items_data[indexBox].info_item[`${a.nodeName}`] = `${url}${Utils.xml.utm}`;
                                }else if(a.nodeName === 'g:price' || a.nodeName === 'g:sale_price'){
                                    objectXML.items_data[indexBox].info_item[`${a.nodeName}`] = Utils.convertPriceToBRL(a.textContent);
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
    },



    /**
     * @functin Desconto Produto %;
     */
    DP:(preco, promocional)=>{
        var flutuanteprecoVenda = preco.replace('.', '').replace(',', '.');
        var flutuanteprecoDesconto = promocional.replace('.', '').replace(',', '.');
        return flutuanteporcDesconto = parseInt(Math.round((parseFloat(flutuanteprecoVenda) - parseFloat(flutuanteprecoDesconto)) / parseFloat(flutuanteprecoVenda) * 100));
    },


    /**
     * @function setCookie = seta algo no cookie para ser expirado em @param hours
     */
    setCookie:(name, value, hours)=>{
        if (hours){
            var date = new Date();
            date.setTime(date.getTime()+(hours*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else{
            var expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    },


    /**
     * @function verifyExists = verifica se o produto que esta acessando ja existe no objeto;
     * @param data = objeto completo, @param skuNew = o sku para verificar se existe;
     */
    verifyExists:(data, skuNew)=>{
        var boo = { boolean: false, index: null};
        data.filter((item, index)=>{
            if(item.skuProd == skuNew){
                boo.boolean = true;
                boo.index = index;
            }
        });
        return boo;
    },


    htmlListagemItem:(item, linkUtm)=>{
        return `
            <div class="listagem-item cjd" data-id="${item.idProd}">
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
                                    <span class="fundo-principal bandeira-promocao morno">${Utils.DP(item['g:price'], item['g:sale_price'])}% Desconto</span>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
        `
    },


    /**
     * @function APA = Armazenas ultimo Produto Acessado e executa outros scripts;
     * @param xmlObjectProds = é os produtos objeto xml convertido para objeto json,
     * @param nameLocalStorage = é o nome que vai ser setado no localstorage dos produtos relcionados referente ao produto acessado;
     */
    APA:(xmlObjectProds, nameLocalStorage)=>{
        let body = $('body.pagina-produto');
        if(body.length > 0){
            let idProd  = body.attr('class').split('produto-')[1].split(' ')[0];
            let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
            let nameProd = $('.pagina-produto .principal .nome-produto').text();
            let priceProd = $('.acoes-produto.disponivel meta[itemprop="price"]').attr('content');

            PRROPA(nameProd, priceProd, xmlObjectProds).then(prodRelacionado=>{

                console.log(prodRelacionado);

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

            });
        }
    },

    carrouselOWL:(elemento)=>{
        $(elemento).owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items: 1
                },
                800:{
                    items:4
                }
            }
         });
    },



    setXMLToLocalStorage:()=>{
        return new Promise((resolve, reject)=>{
            Utils.generateXML(Utils.xml.url).then(result=>{
                localStorage.setItem('produtos-iluminim', JSON.stringify(result.items_data));
                resolve(result.items_data);
            });
        });
    },

    getXMLToLocalStorage:()=>{
        return new Promise((resolve, reject)=>{
            if(localStorage.hasOwnProperty('produtos-iluminim')){
                resolve(JSON.parse(localStorage.getItem('produtos-iluminim')));
            }else {
                Utils.setXMLToLocalStorage().then(xmlObjectProds=>{
                    resolve(xmlObjectProds)
                })
            }
        });

    }

}



    /**
     * @function PRROPA - Produtos Relacionados Referente O Produto Acessado Atualmente
     * essa função pega o nome do produto que esta na tela atualmente (na pagina de produto) e faz uma busca por produtos no xml referente ao nome do mesmo
     */
    function PRROPA(nameProd, priceProd, xmlObjectProds){
        return new Promise((resolve, reject)=>{
            var nameProduto = nameProd.split(' ');
            console.log(nameProduto);
            if(xmlObjectProds){
                var comparation = parseInt(nameProduto.length / 2) + 1;

                let itemsFiltrado = xmlObjectProds.filter(item=>{
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

                let items = xmlObjectProds.filter(item=>{
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

                var selected = itemsFiltrado.length > 0 ? items[Math.floor(Math.random() * items.length)] : [];
                resolve(selected);
            }
        });
    }


/**
 * @function Cria HTML Listagem
 */
function CHTMLL(listagem){
    if(listagem !== undefined && listagem.length > 3){
        $(`
        <div class="listagem-oqspv listagem-application-iluminim listagem-vitrine-app">
            <div class="titulo-categoria borda-principal cor-principal _oqspv">
                <strong>Olha o que separamos para você, new</strong>
            </div>
            <ul data-produtos-linha="4" class="produtos-carrossel oqspv personalizada">
                <div class="listagem-linha">
                    ${listagem}
                </div>
            </ul>
        </div>`).prependTo('.pagina-inicial #corpo div#listagemProdutos');
    }
}

/**
 * @function RenderizarListagemOQSPV = Renderizar Listagem 
 * @param nameLocalStorage = nome(key) no localstorage dos produtos relacionado
 * renderiza listagem personalizada;
 */
function RenderizarListagemOQSPV(nameLocalStorage){
    if($('.pagina-inicial').length > 0){

        if(localStorage.hasOwnProperty(nameLocalStorage)){
            var ua = JSON.parse(localStorage.getItem(nameLocalStorage));
            if(ua.length > 3){
                var listagem = ua.map(list=>{
                    console.log(list);
                    let item = list.prodRelacionado.info_item;
                    let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemOQSPV');
                    return Utils.htmlListagemItem(item, linkUtm);
                }).join('');

                CHTMLL(listagem);
                Utils.carrouselOWL('.produtos-carrossel.oqspv.personalizada .listagem-linha');
            }   
        }
    }   
}


Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    Utils.APA(xmlObjectProds, 'iluminim-application-OQSPV');
    RenderizarListagemOQSPV('iluminim-application-OQSPV');
});

