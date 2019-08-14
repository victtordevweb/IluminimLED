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
            tipo: ['Tubular LED', 'Bulbo LED', 'Alta Potência LED', 'Milho LED', 'Vintage LED', 'Par LED', 'Halopin LED', 'Vela LED', 'AR LED', 'Espiral LED', 'Bolinha LED','Globo LED', 'Dicróica LED', 'Prato LED', 'Automotiva LED','T40 LED', 'Wifi LED'],
            nextFields: [fieldsTexts.tipo, fieldsTexts.potencia]
          },
        ],
        tipo: [
          /* TIPOS DE LAMPADAS */
          {
            tipo: 'Tubular LED',
            potencia: [
                '9W - 60CM',
                '10W - 30CM',
                '18W - 1,20M', 
                '20W - 60CM', 
                '36W - 2,40M', 
                '40W - 1,20M', 
                '75W - 2,40M'
            ],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Bulbo LED',
            potencia: ['3W', '4W', '5W', '7W', '8W', '9W', '9,5W', '10W', '12W', '15W', '20W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Alta Potência LED',
            potencia: ['20W', '30W', '40W', '50W', '65W', '80W', '100W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Milho LED',
            potencia: ['5W', '7W', '9W', '12W', '16W', '20W', '24W', '36W', '50W', '65W', '70W', '80W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Vintage LED',
            potencia: ['2W', '4W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Par LED',
            potencia: ['5W', '7W', '8W', '11W', '12W', '18W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Halopin LED',
            potencia: ['2W', '3W', '5W', '7W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Vela LED',
            potencia: ['2W', '3W', '4W', '5W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'AR LED',
            potencia: ['6W', '7W', '10W', '11W', '13W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Espiral LED',
            potencia: ['5W', '7W', '9W', '12W', '16W', '20W', '24W', '30W'],
            nextFields: [fieldsTexts.potenciar]
          },
          {
            tipo: 'Bolinha LED',
            potencia: ['1W', '2W', '3W', '5W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Globo LED',
            potencia: ['3W', '4W', '9W', '18W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Dicróica LED',
            potencia: ['3W', '4W', '4,5W', '5W', '6,5W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Prato LED',
            potencia: ['12W', '18W', '24W', '36W'],
            nextFields: [fieldsTexts.potencir]
          },
          {
            tipo: 'Automotiva LED',
            potencia: ['1W', '5W', '40W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'T40 LED',
            potencia: ['4,6W', '9W', '15W'],
            nextFields: [fieldsTexts.potencia]
          },
          {
            tipo: 'Wifi LED',
            potencia: ['12W'],
            nextFields: [fieldsTexts.potencia]
          },
          /* ~~END~~ TIPOS DE LAMPADA */
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
            
            /*if(direction.includes('automotiva+40w+branco+frio')){
                direction = 'automotiva+40w';
            }else if(direction.includes('par+8w+branco+quente')){
                direction = 'par20+8w+branco+quente'
            }*/
            //window.location.href = `/buscar?q=${direction}`;
            window.open(`https://www.iluminim.com.br/buscar?q=${direction}`);
            //window.open(`/buscar?q=${direction}`);
        });
      } 
      
      function renderFiltrosSelect(object, optionSelected, objectOptions){
      
          var htmlOptions;
          var corOptions;
          var nextFields;
    
          console.log(object);
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
                              <span>Como escolher a minha lâmpada?</span>
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
                            <div class="txt-field">Selecione a Potência</div>
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
  
    
      searchFilter()
    
      $('.words-fields.wordsProduto ul.options-field  li.options-item').click();
    }); //end doc ready
    } // end if