function listagemPPV(){

/**
 * @function ODPEL = Objetos De Produtos E Listagem
 */
function ODPEL(){
    return {
            ['RSPM-10WRGB']: ['RSPM-10WRGB', 'D-QAB5WB', 'RSPM-320WRGB', 'RSPM-30WRGB', 'RSPM-50WRGB', 'RSPM-50WBF'] 
    }
}



/**
 * @function Cria HTML Listagem
 */
function CHTMLL(listagem){
    if(listagem !== undefined && listagem.length > 3){
        $(`
        <div class="listagem listagem-ppv listagem-application-iluminim listagem-vitrine-app">
        <h4 class="titulo borda-principal cor-secundaria _ppv">
            Produtos para você
        </h4>
            <ul data-produtos-linha="4" class="produtos-carrossel ppv personalizada">
                <div class="listagem-linha">
                    ${listagem}
                </div>
            </ul>
        </div>`).insertBefore('.pagina-produto div#descricao');
    }
}

/**
 * @function RL = Renderizar Listagem 
 * renderiza listagem personalizada;
 */
function RL(xmlObjectProds){
        let prodAcessado = $('.produto .codigo-produto span[itemprop="sku"]').text();
        var ua = ODPEL()[prodAcessado];
    
        var listagem = ua.map(list=>{
            console.log(list);
            var ppv = xmlObjectProds.filter(item => {
                if(item.info_item){
                    if(item.info_item['g:id'] == list){
                        return item;
                    }
                }
            });
            if(ppv.length < 1){
                ppv = xmlObjectProds.filter(item=> {
                    if(item.info_item){
                        if(item.info_item['g:item_group_id'] == list){
                            return item;
                        }
                    }
                });
            }

            if(ppv.length > 0){
                let item = ppv[Math.floor(Math.random() * ppv.length)].info_item;
                let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemPPV');
                return Utils.htmlListagemItem(item, linkUtm, false ,false);
            }
        }).join('');

        CHTMLL(listagem);
        Utils.carrouselOWL('.produtos-carrossel.ppv.personalizada .listagem-linha');
}   


Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    console.log(xmlObjectProds);
    RL(xmlObjectProds);
});

}

listagemPPV();

