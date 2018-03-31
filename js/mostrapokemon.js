function mostraPokemon(url) {

  const URL = url;
  //instancia classe responsável ao consumo da api
  const xhr = new XMLHttpRequest();
  //define opções da requisição
  xhr.open('GET', URL, true);
  //envia requisição para a api
  xhr.send();
  //trata os dados de maneira assincrona 
  xhr.onload = function(e) {
    //salva resposta da api em uma variavel
    //e transforma resposta em um JSON válido
    const res = JSON.parse(xhr.response);
    // console.log(res);
    //cria card para cada pokemon na tela inicial
    populaModal(res);
    $('.modal').modal('show');  
  }
}


// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO

  let modalTitle = document.getElementById("titulo");
  modalTitle.innerHTML = pokemon.name;

  let elementoImg = document.createElement("img");
  elementoImg.src = pokemon.sprites.front_default;
  modalTitle.appendChild(elementoImg);

  let abilities = pokemon.abilities;

  abilities.map(dados => {
    // console.log(dados.ability.name);
    let modalBody = document.getElementById("ability");
    modalBody.innerHTML = dados.ability.name;
    // modalBody.appendChild(elementoDiv);
  });

  console.log(pokemon);
  // console.log(pokemon.sprites.front_default);
}