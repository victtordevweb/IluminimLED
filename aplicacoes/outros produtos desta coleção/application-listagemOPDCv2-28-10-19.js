function listagemOPDC(){


/**
 * @function PRROPA - Produtos Relacionados Referente O Produto Acessado Atualmente
 * essa função pega o nome do produto que esta na tela atualmente (na pagina de produto) e faz uma busca por produtos no xml referente ao nome do mesmo
 */
function PRROPA(catAcessada, nameProd, priceProd, xmlObjectProds){
    return new Promise((resolve, reject)=>{
        var nameProduto = nameProd.split(' ');
        if(xmlObjectProds){
            var comparation = parseInt(nameProduto.length / 2);

            let itemsFiltrado = xmlObjectProds.filter(item=>{
                var count = 0;
                item.info_item.title.split(' ').forEach(words=>{
                    if(nameProduto.includes(words)){
                        count++
                    }
                });
                if(count > comparation){
                    if(parseFloat(priceProd) * 2 > parseFloat(item.info_item['g:sale_price'].replace(/\./g, '').replace(',','.'))){
                        if(item.info_item.categoria !== undefined){
                            let catReferenceProdObject = item.info_item.categoria.split('> ');
                            if(catReferenceProdObject.includes(catAcessada)){
                                return item;
                            }
                        }
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

            let itemsCat = xmlObjectProds.filter(item=>{

                if(item.info_item.categoria){
                    var catReferenceProdObject = item.info_item.categoria.split('> ');
                }else{
                    var catReferenceProdObject = item.info_item.categoriaprincipal.split('> ');
                }   
                
                if(catReferenceProdObject.includes(catAcessada)){
                    return item;
                }

            });


            var selected = itemsFiltrado.length > 4 ? itemsFiltrado : items.length > 4 ? items : itemsCat;

            var random = Math.floor(Math.random() * selected.length);
          
            if(random + 8 > selected.length){
                var selectedRandom = selected.slice(selected.length -8, selected.length);
            }else {
                var selectedRandom = selected.slice(random, random +8);

            }

            resolve(selectedRandom == undefined ? selected.slice(0, 8) : selected.slice(0, 8));
        }
    });
}

/**
 * @function APA = Armazenas ultimo Produto Acessado e executa outros scripts;
 */
function APA(xmlObjectProds){
    let body = $('body.pagina-produto');
    if(body.length > 0){
        let skuProd = $('.produto .codigo-produto span[itemprop="sku"]').text();
        let nameProd = $('.pagina-produto .principal .nome-produto').text();
        let priceProd = $('.acoes-produto.disponivel meta[itemprop="price"]').attr('content');


        var catAcessada = xmlObjectProds.filter(item=>{
            if(item.info_item){
                if(item.info_item['g:id'] == skuProd){
                    return item;
                }
            }
         });

         

         if(catAcessada.length < 1){
            catAcessada = xmlObjectProds.filter(item=> {
                if(item.info_item){
                    if(item.info_item['g:item_group_id'] == skuProd){
                        return item;
                    }
                }
            });
        }


        let catAcessadaWaiting = catAcessada[Math.floor(Math.random() * catAcessada.length)].info_item;
        if(catAcessadaWaiting.categoria){
            catAcessadaWaiting = catAcessadaWaiting.categoria.split(' > ');
        }else{
            catAcessadaWaiting = catAcessadaWaiting.categoriaprincipal.split(' > ');
        }
       
        catAcessada = catAcessadaWaiting[catAcessadaWaiting.length -1];

        PRROPA(catAcessada, nameProd, priceProd, xmlObjectProds).then(prodRelacionado=>{
            CHTMLL(RL(prodRelacionado));
            Utils.carrouselOWL('.produtos-carrossel.opdc .listagem-linha');
        });
    }
}


/**
 * @function Cria HTML Listagem
 */
function CHTMLL(listagem){
    $(`
    <div class="listagem listagem-opdc listagem-application-iluminim listagem-vitrine-app">
        <h4 class="titulo borda-principal cor-secundaria _opdc">
            Outros produtos desta coleção
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
            let item = prod.info_item;
            let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemOPDC');
            return Utils.htmlListagemItem(item, linkUtm, false, false);
        }).join('');

        return listagem;
    }   
}


Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    APA(xmlObjectProds);
});


}

listagemOPDC();