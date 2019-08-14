if(screen.width > 767){

  function objectFiltro(){
      let fieldsTexts = {
        tipo: {
          txt:'Selecione o Tipo:',
          reference: 'wordsTipo'
        },
        modelo: {
          txt:'Selecione o Modelo:',
          reference: 'wordsModelo'
        },
        potencia: {
          txt:'Selecione a Potencia:',
          reference: 'wordsPotencia'
        },
        metragem: {
          txt:'Selecione a Metragem',
          reference: 'wordsMetragem'
        },
        cor: {
          txt:'Selecione a Cor:',
          reference: 'wordsCor'
        }
      }
    
      return {
        produto:[
        {
          produto: 'Lâmpada LED',
          tipo: ['Tubular', 'Bulbo', 'Alta Potência', 'Milho', 'Vintage', 'Par', 'Halopin', 'Vela', 'AR', 'Espiral', 'Bolinha','Globo', 'Dicróica', 'Prato', 'Automotiva','T40', 'Wifi'],
          nextFields: [fieldsTexts.tipo, fieldsTexts.potencia, fieldsTexts.cor]
        },
      ],
      tipo: [
        /* TIPOS DE LAMPADAS */
        {
          tipo: 'Tubular',
          potencia: ['9w', '10w', '18w', '20w', '36w', '40w', '75w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: ['4w', '5w', '7w', '8w', '9,5w', '12w', '20w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: ['20w', '30w', '40w', '50w', '65w', '80w', '100w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: ['5w', '7w', '9w', '12w', '16w', '20w', '24w', '36w', '50w', '65w', '70w', '80w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Vintage',
          potencia: ['2w', '4w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Par',
          potencia: ['5w', '7w', '8w', '11w', '12w', '18w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Halopin',
          potencia: ['2w', '3w', '5w', '7w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Vela',
          potencia: ['2w', '3w', '4w', '5w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'AR',
          potencia: ['6w', '7w', '10w', '11w', '13w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: ['5w', '7w', '9w', '12w', '16w', '20w', '24w', '30w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Bolinha',
          potencia: ['1w', '2w', '3w', '5w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Globo',
          potencia: ['3w', '4w', '9w', '18w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Dicróica',
          potencia: ['3w', '4w', '4,5w', '5w', '6,5w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Prato',
          potencia: ['12w', '18w', '24w', '36w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Automotiva',
          potencia: ['1w', '5w', '40w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'T40',
          potencia: ['4,6w', '9w', '15w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          tipo: 'Wifi',
          potencia: ['12w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        /* ~~END~~ TIPOS DE LAMPADA */
      ],

      
      potencia: [
        /* CORES EXISTENTES NAS POTENCIAS DE ############### TUBULAR #################### */
        {
          tipo: 'Tubular',
          potencia: '9w',
          cor: ['Branco Frio', 'Branco Quente', 'Branco Neutro'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Tubular',
          potencia: '10w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Tubular',
          potencia: '18w',
          cor: ['Branco Frio', 'Branco Quente', 'Branco Neutro', 'Amarela', 'Azul', 'Rosa', 'Verde', 'Vermelha'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Tubular',
          potencia: '20w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Tubular',
          potencia: '36w',
          cor: ['Branco Frio', 'Branco Neutro'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Tubular',
          potencia: '40w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Tubular',
          potencia: '75w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        /* CORES EXISTENTES NAS POTENCIAS DE ############### TUBULAR #################### */

        /* CORES EXISTENTES NAS POTENCIAS DE ############### BULBO #################### */
        {
          tipo: 'Bulbo',
          potencia: '4w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: '5w',
          cor: ['Branca - Amarela', 'RGB'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: '7w',
          cor: ['Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: '8w',
          cor: ['Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: '9,5w',
          cor: ['Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: '12w',
          cor: ['Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bulbo',
          potencia: '20w',
          cor: ['Branca Frio'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### BULBO #################### */


        /* CORES EXISTENTES NAS POTENCIAS DE ############### ALTA POTENCIA #################### */
        {
          tipo: 'Alta Potência',
          potencia: '20w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: '30w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: '40w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: '50w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: '65w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: '80w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Alta Potência',
          potencia: '100w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### ALTA POTENCIA #################### */

        /* CORES EXISTENTES NAS POTENCIAS DE ############### ALTA MILHO #################### */
        {
          tipo: 'Milho',
          potencia: '5w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '7w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '9w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '12w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '16w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '20w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '24w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '36w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '50w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '65w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '70w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Milho',
          potencia: '80w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### ALTA MILHO #################### */

        /* CORES EXISTENTES NAS POTENCIAS DE ############### VINTAGE #################### */
        {
          tipo: 'Vintage',
          potencia: '2w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Vintage',
          potencia: '4w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### VINTAGE #################### */

        /* CORES EXISTENTES NAS POTENCIAS DE ############### Par #################### */
        /*tipo: 'Par',
        potencia: ['5w', '7w', '8w', '11w', '12w', '18w'],*/
        {
          tipo: 'Par',
          potencia: '5w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Par',
          potencia: '7w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Par',
          potencia: '8w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Par',
          potencia: '11w',
          cor: ['Amarela', 'Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Par',
          potencia: '12w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Par',
          potencia: '18w',
          cor: ['Branca', 'Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### PAR #################### */


  
        /* CORES EXISTENTES NAS POTENCIAS DE ############### HALOPIN #################### */
        {
          tipo: 'Halopin',
          potencia: '2w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Halopin',
          potencia: '3w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Halopin',
          potencia: '5w',
          cor: ['Branco Frio', 'Branco Quente', 'Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Halopin',
          potencia: '7w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### HALOPIN #################### */



         /* CORES EXISTENTES NAS POTENCIAS DE ############### VELA #################### */
         {
          tipo: 'Vela',
          potencia: '2w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Vela',
          potencia: '3w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Vela',
          potencia: '4w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Vela',
          potencia: '5w',
          cor: ['Amarela'],
          nextFields: [fieldsTexts.cor]
        },
         /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### VELA #################### */

         /* CORES EXISTENTES NAS POTENCIAS DE ############### AR #################### */
         {
          tipo: 'AR',
          potencia: '6w',
          cor: ['Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'AR',
          potencia: '7w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'AR',
          potencia: '10w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'AR',
          potencia: '11w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'AR',
          potencia: '13w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
         /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### AR #################### */


        /* CORES EXISTENTES NAS POTENCIAS DE ############### ESPIRAL #################### */
        {
          tipo: 'Espiral',
          potencia: '5w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '7w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '9w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '12w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '16w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '20w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '24w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Espiral',
          potencia: '30w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### ESPIRAL #################### */
         

        /* CORES EXISTENTES NAS POTENCIAS DE ############### BOLINHA #################### */
        {
          tipo: 'Bolinha',
          potencia: '1w',
          cor: ['Branco Frio', 'Amarela', 'Azul', 'Laranja', 'Verde', 'Vermelho'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bolinha',
          potencia: '2w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bolinha',
          potencia: '3w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Bolinha',
          potencia: '5w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### BOLINHA #################### */



        /* CORES EXISTENTES NAS POTENCIAS DE ############### GLOBO #################### */
        {
          tipo: 'Globo',
          potencia: '3w',
          cor: ['RGB'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Globo',
          potencia: '4w',
          cor: ['Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Globo',
          potencia: '9w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Globo',
          potencia: '18w',
          cor: ['RGB'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### GLOBO #################### */



        /* CORES EXISTENTES NAS POTENCIAS DE ############### DICRÓICA #################### */
        {
          tipo: 'Dicróica',
          potencia: '3w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Dicróica',
          potencia: '4w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Dicróica',
          potencia: '4,5w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Dicróica',
          potencia: '5w',
          cor: ['Branco Frio', 'Branco Quente'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Dicróica',
          potencia: '6,5w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### DICRÓICA #################### */


        /* CORES EXISTENTES NAS POTENCIAS DE ############### PRATO #################### */
        {
          tipo: 'Prato',
          potencia: '12w',
          cor: ['Branco Frio', 'Branco Neutro'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Prato',
          potencia: '18w',
          cor: ['Branco Frio', 'Branco Neutro'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Prato',
          potencia: '24w',
          cor: ['Branco Frio', 'Branco Neutro'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Prato',
          potencia: '36w',
          cor: ['Branco Frio', 'Branco Neutro'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### PRATO #################### */



        /* CORES EXISTENTES NAS POTENCIAS DE ############### AUTOMOTIVA #################### */
        {
          tipo: 'Automotiva',
          potencia: '1w',
          cor: ['Branco Frio', 'Amarela', 'Azul', 'Verde', 'Vermelho'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Automotiva',
          potencia: '5w',
          cor: ['Branco Frio', 'Branco Quente', 'Azul'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'Automotiva',
          potencia: '40w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### AUTOMOTIVA #################### */
        


        /* CORES EXISTENTES NAS POTENCIAS DE ############### T40 #################### */
        {
          tipo: 'T40',
          potencia: '4,6w',
          cor: ['Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'T40',
          potencia: '9w',
          cor: ['Branca - Amarela'],
          nextFields: [fieldsTexts.cor]
        },
        {
          tipo: 'T40',
          potencia: '15w',
          cor: ['Branca'],
          nextFields: [fieldsTexts.cor]
        },
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### T40 #################### */

        /* CORES EXISTENTES NAS POTENCIAS DE ############### Wifi #################### */
        {
          tipo: 'Wifi',
          potencia: '12w',
          cor: ['Branco Frio'],
          nextFields: [fieldsTexts.cor]
        }
        /* ~~END~~ CORES EXISTENTES NAS POTENCIAS DE ############### Wifi #################### */

      ]

      }; /* end return */
      
    
    };
    
    function palavrasProdutos(){
    
      let htmlOptions = objectFiltro().produto.map(item=>{ 
        return `
          <li class="options-item" data-item="${item.produto}">${item.produto}</li>
        `;
       }).join('');
       return htmlOptions;
    }

    function nextFieldsChanges(thisParents, render){
      thisParents.nextUntil().remove();
      $(render.nextFields).appendTo(thisParents.parents('.bloco-fields'));
      thisParents.next().removeClass('desactive').addClass('active').find('.options-field').html(render.htmlOptions);
    }
  
    function clickElement(elemento, first, last){
      $(document).on('click',elemento, function(){
          let thisParents = $(this).parents('.words-fields');
          let txt = $(this).attr('data-item');
          var render = renderFiltrosSelect(first, txt, last);
          nextFieldsChanges(thisParents, render);
      });
    }
    function searchFilter(){
      
      $('.btn-buscar-filtro').click(function(){
          var dataBusca = [];
          $('.busca-produto-personalizada .bloco-fields .words-fields:not(:first-child) .txt-field').each(function(){
              let txt = $(this).text().toLowerCase();
              if(!txt.includes('selecione')){
                  dataBusca.push(txt);
              }
          });
          var direction = dataBusca.join('+').replace(/\ /g, '+');
          
          if(direction.includes('automotiva+40w+branco+frio')){
              direction = 'automotiva+40w';
          }else if(direction.includes('par+8w+branco+quente')){
              direction = 'par20+8w+branco+quente'
          }
          //window.location.href = `/buscar?q=${direction}`;
          window.open(`https://www.iluminim.com.br/buscar?q=${direction}`)
          //window.open(`/buscar?q=${direction}`);
      });
    } 
    
    function renderFiltrosSelect(object, optionSelected, objectOptions){
    
        var htmlOptions;
        var corOptions;
        var nextFields;
  
        
        var returnItem = objectFiltro()[object].filter(item=>{
            if(item[object] == optionSelected){
              return item;
            }
          });

          var htmlTiposItem = returnItem[0];

            htmlOptions = htmlTiposItem[objectOptions].map(itemTxt=>{
              return `<li class="options-item" data-item="${itemTxt}">${itemTxt}</li>`
            }).join('');
       
            if(htmlTiposItem.cor){
                let campoTipoSelecionado = $('.words-fields.wordsTipo .txt-field').text();

                
                var itemCor = objectFiltro().potencia.filter(item=>{
                  if(item.tipo == campoTipoSelecionado){
                    if(item.potencia == optionSelected){
                      return item;
                    }
                  }
                });
                
                /*console.log('// itemCor');
                console.log(itemCor);
                console.log('////////');
                console.log('// campoTipoSelecionado');
                console.log(campoTipoSelecionado);
                console.log('//////////');
                console.log('// opção voltagem selecionada');
                console.log(optionSelected);*/
                

                htmlOptions = itemCor[0]['cor'].map(itemTxt=>{
                  return `<li class="options-item" data-item="${itemTxt}">${itemTxt}</li>`
                }).join('');
               /* console.log(htmlOptions);*/
            }

            nextFields = htmlTiposItem.nextFields.map(item=>{
              return `                    
              <div class="words-fields ${item.reference} desactive">
                <div class="txt-field">${item.txt}</div>
                <ul class="options-field"></ul>
              </div>`
            }).join('');

        return {
          htmlOptions,
          corOptions,
          nextFields
        }   
    }
  $(document).ready(function(){   
    
    $('.pagina-categoria.categoria-3048879 .breadcrumbs.borda-alpha').before(`
        <div class="busca-produto-personalizada">
          <div class="conteiner">
            <div class="wrap-content">
                <div class="row-contents">
                      <div class="bloco-txt">
                            <span>Como escolher o meu produto?</span>
                      </div>
                      <div class="bloco-fields">
    
                        <div class="words-fields wordsProduto active">
                          <div class="txt-field">Lâmpada LED</div>
                          <ul class="options-field" style="display:none;">${palavrasProdutos()}</ul>
                        </div>
      
                        <div class="words-fields wordsTipo desactive">
                          <div class="txt-field">Selecione o Tipo</div>
                          <ul class="options-field"></ul>
                        </div>
    
                        <div class="words-fields wordsPotencia desactive">
                          <div class="txt-field">Selecione a Potencia</div>
                          <ul class="options-field"></ul>
                        </div>
    
                        <div class="words-fields wordsCor desactive">
                          <div class="txt-field">Selecione a Cor</div>
                          <ul class="options-field"></ul>
                        </div>
                        </div>
    
                      <div class="btn-buscar-filtro">Buscar</div>
                </div>
            </div>
          </div>
        </div>
    `);
    $(document).on('click','.options-field .options-item', function(){

      let thisParents = $(this).parents('.words-fields');
      thisParents.find('.options-item').removeClass('actived');
      $(this).addClass('actived');
      let txt = $(this).attr('data-item');
      thisParents.find('.txt-field').html(txt);

    });
  
    clickElement('.wordsProduto .options-field .options-item', 'produto', 'tipo');
    clickElement('.wordsTipo .options-field .options-item', 'tipo', 'potencia');
    clickElement('.wordsPotencia .options-field .options-item', 'potencia', 'cor');

  
    searchFilter()
  
    $('.words-fields.wordsProduto ul.options-field  li.options-item').click();
  }); //end doc ready
  } // end if