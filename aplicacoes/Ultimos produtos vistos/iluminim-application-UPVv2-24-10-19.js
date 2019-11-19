function listagemUPV(){

/**
 * @function Cria HTML Listagem
 */
function CHTMLL(listagem){
    if(listagem !== undefined && listagem.length > 3){
        $(`
        <div class="listagem listagem-upv listagem-application-iluminim listagem-vitrine-app">
        <h4 class="titulo borda-principal cor-secundaria _upv">
            Últimos Produtos Vistos
        </h4>
            <ul data-produtos-linha="4" class="produtos-carrossel upv personalizada">
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
        
        var ua = JSON.parse(localStorage.getItem('iluminimdev-application-history'));

        var listagem = ua.map(list=>{

            var upv = xmlObjectProds.filter(item => {
                if(item.info_item){
                    if(item.info_item['g:id'] == list){
                        return item;
                    }
                }
            });
            if(upv.length < 1){
                upv = xmlObjectProds.filter(item=> {
                    if(item.info_item){
                        if(item.info_item['g:item_group_id'] == list){
                            return item;
                        }
                    }
                });
            }

            if(upv.length > 0){
                let item = upv[Math.floor(Math.random() * upv.length)].info_item;
                let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemUPV');
                return Utils.htmlListagemItem(item, linkUtm, false ,false);
            }
        }).join('');

        if(listagem.length > 3){
            CHTMLL(listagem);
            Utils.carrouselOWL('.produtos-carrossel.upv.personalizada .listagem-linha');
        }
}   


Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
    RL(xmlObjectProds);
});

}
if($('body.pagina-inicial').length > 0){
    listagemUPV();
}

