const Utils = {
    xml: {
        url: 'https://www.iluminim.com.br/xml/24e04/facebook.xml',
        //utm: '?utm_source=Site&utm_medium=IluminimDev&utm_campaign=IluminimDev',
        utm: ''
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
    verifyExists:(data, skuNew, def = false)=>{
        var boo = { boolean: false, index: null};
        data.filter((item, index)=>{
            if(def == true){
                if(item == skuNew){
                    boo.boolean = true;
                    boo.index = index;
                }
            }else{
                if(item.skuProd == skuNew){
                    boo.boolean = true;
                    boo.index = index;
                }
            }
        });
        return boo;
    },

    htmlListagemItem:(item, linkUtm, btnTrocar, btnQtd)=>{
        // linkUtm retirado por enquanto
        return `
            <div class="listagem-item cjd" data-id="${item.idProd}">
            
            <a href="${item.link.split('?utm_source=')[0]}" class="produto-sobrepor" title="${item.title}"></a>
            <div class="imagem-produto"><img src="${item['g:image_link']}" alt="${item.title}" class="imagem-principal" draggable="false"> </div>
                <div class="info-produto"> <a href="${linkUtm}" class="nome-produto cor-secundaria">${item.title}</a><div class="ilm-app-stars"><img src="https://cdn.awsli.com.br/257/257163/arquivos/img-start-02-8.png"></div>
                        <div class="infos">
                            <div class="produto-sku hide">${item['g:id']}</div>
                            ${btnQtd ? `
                            <div class="input_qtd">
                                <div class="value-button" id="decrease" value="Decrease Value"><span>-</span></div>
                                <input type="number" id="number" value="1" min="1">
                                <div class="value-button" id="increase" value="Increase Value"><span>+</span></div>
                            </div>
                            `: ''}
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
                ${btnTrocar ? '<div class="trocar-prod">Trocar</div>' : ''}
        </div>
        `
    },

    carrouselOWL:(elemento, overlayp)=>{
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
                    items: overlayp ? 2 : 4
                }
            }
         });
    },

    /**
     * @function GRPDPA = Gera Produtos Relacionados Do Produto Acessado;
     * @param infoItemProdObject = é o objeto do produto acessado info_item;
     * @param xmlObjectProds = é o xml convertido para object (apenas os produtos);
     * @param params.qtdProdsReturn = em especifico o parametro serve pra quantos produtos relacionado retornar da função.
     * @param params.filtrarPorCategoria = parametro para condicionar por categoria ou não.
     */
    GPRDPA:(infoItemProdObject, xmlObjectProds, params)=>{

        var nameProduto = infoItemProdObject.title.split(' ');

        var precoProduto = infoItemProdObject['g:price'].replace('.', '').replace(',', '.');
        
        var comparation = parseInt(nameProduto.length / 2);

        let itemsFiltrado = xmlObjectProds.filter(item=>{
            var count = 0;
            item.info_item.title.split(' ').forEach(words=>{
                if(nameProduto.includes(words)){
                    count++
                }
            });
            if(count > comparation){
                if(params.filtrarPorPreco){
                    if(parseFloat(precoProduto) * 2 > parseFloat(item.info_item['g:sale_price'].replace(/\./g, '').replace(',','.'))){
                        if(params.filtrarPorCategoria){

                            if(infoItemProdObject.categoria){
                                var catAcessadaWaiting = infoItemProdObject.categoria.split(' > ');
                            }else{
                                var catAcessadaWaiting = infoItemProdObject.categoriaprincipal.split(' > ');
                            }
                            catAcessada = catAcessadaWaiting[catAcessadaWaiting.length -1];
                            
                            if(item.info_item.categoria){
                                var catReferenceProdObject = item.info_item.categoria.split('> ');
                            }else{
                                var catReferenceProdObject = item.info_item.categoriaprincipal.split('> ');
                            }   
                            
                            if(catReferenceProdObject.includes(catAcessada)){
                                return item;
                            }

                        }else{
                            return item;
                        }

                    }
                }else{
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

        var selected = itemsFiltrado.length > 0 ? itemsFiltrado : items;

        var random = Math.floor(Math.random() * selected.length);
        
        if(params.qtdProdsReturn > 1){

            if(params.qtdProdsReturn > selected.length){
                return selected;
            }else {
                if(random + params.qtdProdsReturn > selected.length){
                    return selected.slice(selected.length - params.qtdProdsReturn, selected.length);
                }else{
                    return selected.slice(random, random + params.qtdProdsReturn);
                }
            
            }

        }else{
            return selected[random];
        }
    
    },

    /**
     * @function PUPA = Pega Ultimo Produto Acessado;
     */
    PUPA:(xmlObjectProds)=>{
        let historyProds = $('.produto .codigo-produto span[itemprop="sku"]').text();

        let skuProd = historyProds;
        let xmlObject = xmlObjectProds;
        var p = xmlObject.filter(item=> item.info_item['g:id'] == skuProd ? item : '');
    
        if(!p.length > 0){
            p = xmlObject.filter(item=> item.info_item['g:item_group_id'] == skuProd ? item : '');
        }
    
        return p;
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
 * @function APA = Armazena Produto Acessado;
 * @param namelocalStorage;
 */
function APA(nameLocalStorage){
    let body = $('body.pagina-produto');
    if(body.length > 0){
        let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();

        if(localStorage.hasOwnProperty(nameLocalStorage)){
            let arrayUA = JSON.parse(localStorage.getItem(nameLocalStorage));
            let verify = Utils.verifyExists(arrayUA, skuProd, true);
            if(verify.boolean == true){
                arrayUA.splice(verify.index, 1);
            }
            arrayUA.unshift(skuProd);
            if(arrayUA.length > 12){
                arrayUA.pop();
            }
            localStorage.setItem(nameLocalStorage, JSON.stringify(arrayUA));
        }else{
            localStorage.setItem(nameLocalStorage, JSON.stringify([skuProd]));
        }
    }
}

APA('iluminimdev-application-history');

if(document.cookie.indexOf('atualizar-produtos-iluminim-v2') > -1){

}else {
    localStorage.removeItem('produtos-iluminim');
    Utils.setCookie('atualizar-produtos-iluminim-v2', 'true', 10);
}

