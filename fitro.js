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
    let fieldsCor = {
      RGB: ['RGB'],
      Frio: ['Branco Frio'],
      Quente: ['Branco Quente'],
      FrioQuente: ['Branco Frio', 'Branco Quente'],
      FrioQuenteVerdeRGB: ['Branco Frio', 'Branco Quente', 'Verde', 'RGB']
    }
  
    return {
      produto:[
      {
        produto: 'Refletor',
        tipo: ['MicroLED Slim', 'MicroLED Ultra Thin', 'MicroLED Ultra', 'Super LED'],
        nextFields: [fieldsTexts.tipo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        produto: 'Luminaria',
        tipo: ['Plafon', 'Pública', 'Arandela', 'Emergência', 'Solar', 'Lustre', 'Pendente', 'Posto', 'Mesa', 'Industrial HighBay'],
        nextFields: [fieldsTexts.tipo, fieldsTexts.modelo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        produto: 'Spot',
        tipo: ['Dicróica Direcionavel', 'Trilho', 'Balizador', 'Mini Spot', 'Cristal'],
        nextFields: [fieldsTexts.tipo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        produto: 'Fita',
        tipo: ['5050', '3528'],
        nextFields: [fieldsTexts.tipo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        produto: 'Lampada',
        tipo: ['Tubular', 'Bulbo', 'Alta Potência', 'Milho', 'Vintage', 'Par', 'Halopin', 'Vela', 'AR', 'Espiral', 'Bolinha','Globo', 'Dicróica', 'Prato', 'Automotiva','T40', 'Wi-fi'],
        nextFields: [fieldsTexts.tipo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        produto: 'Acessório',
        tipo: ['Fonte Chaveada', 'Fonte Convencional', 'Chip', 'Controle', 'Driver', 'Emenda', 'Soquete', 'Conector', 'Amplificador', 'Interruptor Tomada', 'Dimmer', 'Fios e Cabos'],
        nextFields: [fieldsTexts.tipo, fieldsTexts.potencia, fieldsTexts.cor]
      }
  
    ],
    tipo: [
      /* TIPOS DE REFLETORES */
      {
        tipo: 'MicroLED Slim',
        potencia: ['10w', '20w', '30w', '50w', '100w', '150w', '200w', '300w'],
        cor: fieldsCor.FrioQuenteVerdeRGB,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'MicroLED Ultra Thin',
        potencia: ['10w', '20w', '30w', '50w', '100w', '150w', '200w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'MicroLED Ultra',
        potencia: ['10w', '20w', '50w', '100w', '200w'],
        cor: fieldsCor.Frio,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Super LED',
        potencia: ['10w', '20w', '30w', '50w', '100w', '150w', '200w', '300w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      /* ~~END~~ TIPOS DE REFLETORES */
  
      /* TIPOS DE LUMINARIAS */
      {
        tipo: 'Plafon',
        modelo: ['Quandrado de Embutir', 'Quandrado de Sobrepor', 'Redondo de Embutir', 'Redondo de Sobrepor', 'Retangular de Embutir', 'Retangular de Sobrepor'],
        nextFields: [fieldsTexts.modelo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Pública',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Arandela',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Emergência',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Solar',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Lustre',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Pendente',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Posto',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Mesa',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Industrial HighBay',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      /* ~~END~~ TIPO DE LUMINARIAS */
   
      /* TIPOS DE SPOTS */
      {
        tipo: 'Dicróica',
        modelo: ['Quadrado', 'Redondo'],
        nextFields: [fieldsTexts.modelo, fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Trilho',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },  
      {
        tipo: 'Balizador',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },  
      {
        tipo: 'Mini Spot',
        modelo: ['Quadrado', 'Redondo'],
        nextFields: [fieldsTexts.modelo, fieldsTexts.potencia, fieldsTexts.cor]
      },  
      {
        tipo: 'Cristal',
        potencia: ['145w', '400w', '500w', '890w', '2090w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },  
      /* ~~END TIPOS DE SPOTS */
  
  
      /* TIPOS DE FITAS */
      {
        tipo: '5050',
        potencia: ['1545w', '40w', '50w', '80w', '2080w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: '3528',
        potencia: ['185w', '480w', '570w', '80w', '2700w'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      /* ~~END~~ TIPOS DE FITAS */
  
  
      /* TIPOS DE LAMPADAS */
      
      {
        tipo: 'Tubular',
        potencia: ['9w', '10w', '18w', '18w', '20w', '40w', '36w', '75w'],
        cor: ['Branco Frio', 'Branco Quente', 'Branco Neutro', 'Azul', 'Amarela', 'Vermelha', 'Verde', 'Rosa'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Bulbo',
        potencia: ['9w', '12w', '15w', '20w'],
        cor: ['Branca - Amarela', 'Branco Quente', 'Branco Frio', 'RGB'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Alta Potência',
        potencia: ['20w', '30w', '40w', '50w', '65w', '80w', '100w'],
        cor: fieldsCor.Frio,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Milho',
        potencia: ['5w', '7w', '9w', '12w', '16w', '20w', '24w', '36w', '50w', '65w', '70w', '80w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Vintage',
        potencia: ['2w', '4w'],
        cor: fieldsCor.Quente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Par',
        potencia: ['5w', '7w', '8w', '11w', '12w', '18w'],
        cor: ['Branco Frio', 'Branco Quente', 'Branca', 'Amarela'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Halopin',
        potencia: ['2w', '3w', '5w', '7w'],
        cor: ['Branco Frio', 'Branco Quente', 'Branca - Amarela'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Vela',
        potencia: ['2w', '3w', '4w', '5w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'AR',
        potencia: ['6w', '7w', '10w', '11w', '13w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Espiral',
        potencia: ['5w', '7w', '9w', '12w', '16w', '20w', '24w', '30w'],
        cor: ['Branca'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Bolinha',
        potencia: ['1w', '2w', '3w', '5w'],
        cor: ['Branco Frio', 'Branco Quente', 'Amarela', 'Azul', 'Larajna', 'Vermelha'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Globo',
        potencia: ['3w', '4w', '5w', '9w', '18w'],
        cor: ['Branco Quente', 'RGB'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Dicróica',
        potencia: ['3w', '4w', '4,5w', '5w', '6,5w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Prato',
        potencia: ['12w', '18w', '24w', '36w'],
        cor: ['Branco Frio', 'Branco Neutro'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Automotiva',
        potencia: ['1w', '5w', '40w'],
        cor: ['Branco Frio', 'Amarela', 'Azul', 'Verde', 'Vermelho'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'T40',
        potencia: ['4,6w', '9w', '15w'],
        cor: ['Branca', 'Branca - Amarela'],
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Wi-fi',
        potencia: ['12w'],
        cor: fieldsCor.Frio,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      /* ~~END~~ TIPOS DE LAMPADA */
  
      /* TIPOS DE ACESSÓRIOS */
      //['Fonte Chaveada', 'Fonte Convencional', 'Chip', 'Controle', 'Driver', 'Emenda', 'Soquete', 'Conector', 'Amplificador', 'Interruptor Tomada', 'Dimmer', 'Fios e Cabos'],
      {
        tipo: 'Fonte Chaveada',
        potencia: ['12v 5a', '12v 10a', '12v 15a', '12v 20a', '12v 30a', '12v 50a', '24v 3a', '24v 5a'],
        nextFields: [fieldsTexts.potencia]
      },
      {
        tipo: 'Fonte Convencional',
        potencia: ['12v 2a', '12v 3a', '12v 5a', '12v 6a'],
        nextFields: [fieldsTexts.potencia]
      },
      {
        tipo: 'Chip',
        potencia: ['10w', '20w', '30w', '50w'],
        cor: fieldsCor.FrioQuente,
        nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
      },
      {
        tipo: 'Controle',
        modelo: ['Fita', 'Refletor'],
        nextFields: [fieldsTexts.modelo]
      }
  
  
      /* ~~END~~ TIPOS DE ACESSÓRIOS */
      
    ],
  
  
    modelo: { 
      ['Plafon']:[
        {
          modelo: 'Quandrado de Embutir',
          potencia: ['145w', '407w', '50w', '80w', '200w'],
          cor: ['verde','vermelho','laranja','azul'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Quandrado de Sobrepor',
          potencia: ['100w'],
          cor: ['verde'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Redondo de Embutir',
          potencia: ['145w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Redondo de Sobrepor',
          potencia: ['200w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Retangular de Embutir',
          potencia: ['145w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Retangular de Sobrepor',
          potencia: ['200w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        }
    ],
      ['Mini Spot']: [
        {
          modelo: 'Quadrado',
          potencia: ['145w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Redondo',
          potencia: ['200w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        }
      ],
      ['Dicróica Direcionavel']: [
        {
          modelo: 'Quadrado',
          potencia: ['145w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        },
        {
          modelo: 'Redondo',
          potencia: ['200w'],
          nextFields: [fieldsTexts.potencia, fieldsTexts.cor]
        }
      ],
      ['Controle']: [
        {
          modelo: 'Fita',
          cor: fieldsCor.RGB,
          nextFields: [fieldsTexts.cor]
        },
        {
          modelo: 'Refletor',
          cor: fieldsCor.RGB,
          nextFields: [fieldsTexts.cor]
        }
      ]
  
    }
  
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
  
  
  $('div#corpo').before(`
      <div class="busca-produto-personalizada">
        <div class="conteiner">
          <div class="wrap-content">
              <div class="row-contents">
                    <div class="bloco-txt">
                          <span>Como escolher o meu produto?</span>
                    </div>
                    <div class="bloco-fields">
  
                      <div class="words-fields wordsProduto active">
                        <div class="txt-field">Selecione o Produto</div>
                        <ul class="options-field">${palavrasProdutos()}</ul>
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
    let txt = $(this).attr('data-item');
    thisParents.find('.txt-field').html(txt);
  });
  
  
  function renderFiltrosSelect(object, optionSelected, objectOptions){
  
      var htmlOptions;
      var corOptions;
      var nextFields;
      console.log(object);
  
  
  
      if(object == 'modelo'){
  
        var returnItem = objectFiltro().modelo[$('.words-fields.wordsTipo .txt-field').text()].filter(item=>{
          if(item[object] == optionSelected){
            return item;
          }
        });
  
        var htmlTiposItem = returnItem[0];
          htmlOptions = htmlTiposItem[objectOptions].map(itemTxt=>{
            return `<li class="options-item" data-item="${itemTxt}">${itemTxt}</li>`
          }).join('');
  
      }else {
  
        var returnItem = objectFiltro()[object].filter(item=>{
          if(item[object] == optionSelected){
            return item;
          }
        });
        var htmlTiposItem = returnItem[0];
        console.log(htmlTiposItem);
  
        if(htmlTiposItem.modelo){
            htmlOptions = objectFiltro().modelo[optionSelected].map(itemTxt=>{
              return `<li class="options-item" data-item="${itemTxt.modelo}">${itemTxt.modelo}</li>`
            });
        }else {
          htmlOptions = htmlTiposItem[objectOptions].map(itemTxt=>{
            return `<li class="options-item" data-item="${itemTxt}">${itemTxt}</li>`
          }).join('');
        }
  
      }
  
      if(htmlTiposItem.cor){
        corOptions = htmlTiposItem['cor'].map(itemTxt=>{
          return `<li class="options-item" data-item="${itemTxt}">${itemTxt}</li>`
        }).join('');
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
  
  function nextFieldsChanges(thisParents, render){
    thisParents.nextUntil().remove();
    $(render.nextFields).appendTo(thisParents.parents('.bloco-fields'));
    thisParents.next().removeClass('desactive').addClass('active').find('.options-field').html(render.htmlOptions);
    thisParents.parents('.bloco-fields').find('.wordsCor .options-field').html(render.corOptions);
  }
  
  
  $(document).on('click','.wordsProduto .options-field .options-item', function(){
      let thisParents = $(this).parents('.words-fields');
      let txt = $(this).attr('data-item');
  
      var render = renderFiltrosSelect('produto', txt, 'tipo');
      nextFieldsChanges(thisParents, render);
  });
  
  
  $(document).on('click','.wordsTipo .options-field .options-item', function(){
    let thisParents = $(this).parents('.words-fields');
    let txt = $(this).attr('data-item');
  
    var render = renderFiltrosSelect('tipo', txt, 'potencia');
    nextFieldsChanges(thisParents, render);
  
  });
  
  $(document).on('click','.wordsModelo .options-field .options-item', function(){
    let thisParents = $(this).parents('.words-fields');
    let txt = $(this).attr('data-item');
  
    var render = renderFiltrosSelect('modelo', txt, 'potencia');
    nextFieldsChanges(thisParents, render);
  });
  
  
  $(document).on('click','.wordsPotencia .options-field .options-item', function(){
    let thisParents = $(this).parents('.words-fields');
    thisParents.next().removeClass('desactive').addClass('active');
  });
  
  