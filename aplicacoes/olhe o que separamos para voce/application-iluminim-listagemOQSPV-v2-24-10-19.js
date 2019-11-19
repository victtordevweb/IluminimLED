function listagemOQSPV(){

/**
 * @function Cria HTML Listagem
 */
function CHTMLL(listagem){
    if(listagem !== undefined && listagem.length > 3){
        $(`
        <div class="listagem listagem-oqspv listagem-application-iluminim listagem-vitrine-app">
        <h4 class="titulo borda-principal cor-secundaria _oqspv">
            Olhe o que separamos para você!
        </h4>
            <ul data-produtos-linha="4" class="produtos-carrossel oqspv personalizada">
                <div class="listagem-linha">
                    ${listagem}
                </div>
            </ul>
        </div>`).insertAfter('.row-fluid.banner.mini-banner.hidden-phone');
    }
}

/**
 * @function RL = Renderizar Listagem 
 * renderiza listagem personalizada;
 */
function RL(xmlObjectProds){
    let ua = JSON.parse(localStorage.getItem('iluminimdev-application-history'));


    var listagem = ua.map(list=>{
     
        var oqspv = xmlObjectProds.filter(item => {
            if(item.info_item){
                if(item.info_item['g:id'] == list){
                    return item;
                }
            }
        });


        if(oqspv.length < 1){
            oqspv = xmlObjectProds.filter(item=> {
                if(item.info_item){
                    if(item.info_item['g:item_group_id'] == list){
                        return item;
                    }
                }
            });
        }

        if(oqspv.length > 0){
            let item = oqspv[Math.floor(Math.random() * oqspv.length)].info_item;
            let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemOQSPV');

            let prod = Utils.GPRDPA(item, xmlObjectProds, {qtdProdsReturn: 1, filtrarPorCategoria: false, filtrarPorPreco: true} );

            return Utils.htmlListagemItem(prod.info_item, linkUtm, false ,false);
        }

    }).join('');

    if(ua.length > 3){
        CHTMLL(listagem);
    }
    Utils.carrouselOWL('.produtos-carrossel.oqspv.personalizada .listagem-linha');
}   


Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    RL(xmlObjectProds);
});

}

if($('body.pagina-inicial').length > 0){
    listagemOQSPV();
}

