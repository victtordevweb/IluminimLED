function listagemPPV(){

    /**
     * @function APA = Armazenas ultimo Produto Acessado e executa outros scripts;
     */
    function APA(xmlObjectProds){
    
            let prodAcessado = Utils.PUPA(xmlObjectProds);
            let prods = Utils.GPRDPA(prodAcessado[0].info_item, xmlObjectProds, {qtdProdsReturn: 8, filtrarPorCategoria: false, filtrarPorPreco: true});
            CHTMLL(RL(prods));
            Utils.carrouselOWL('.produtos-carrossel.ppv .listagem-linha');
    }
    
    
    /**
     * @function Cria HTML Listagem
     */
    function CHTMLL(listagem){
        $(`
        <div class="listagem listagem-ppv listagem-application-iluminim listagem-vitrine-app">
            <h4 class="titulo borda-principal cor-secundaria _ppv">
                Produtos para você!
            </h4>
            <ul data-produtos-linha="4" class="produtos-carrossel ppv personalizada">
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
                let linkUtm = item.link.replace('&utm_campaign=IluminimDev', '&utm_campaign=listagemPPV');
                return Utils.htmlListagemItem(item, linkUtm, false, false);
            }).join('');
    
            return listagem;
        }   
    }
    
    
    Utils.getXMLToLocalStorage().then(xmlObjectProds=>{
        APA(xmlObjectProds);
    });
    
    
    }
    
    if($('body.pagina-produto').length>0){
        listagemPPV();
    }