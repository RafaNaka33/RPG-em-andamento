const promptBox = document.getElementById("prompt");
const optionsBox = document.getElementById("options");

const cenas = {
  inicio: {
    texto: "-- Você adormece no seu acampamento na floresta.\n-- Horas depois você acorda numa taverna.\n-- Você não se lembra o que aconteceu.\n-- O que você faz?",
    imagem: "url(img/acampamento.jpg)",
    opcoes: [
      { texto: "1 - Olhar ao redor", proxima: "olhar" },
      { texto: "2 - Voltar a dormir", proxima: "dormir" },
    ]
  },

  olhar: {
    texto: "-- Você vê várias pessoas bebendo e cantando.\n-- No canto da sala tem um grupo de pessoas que parecem te encarar\n-- O taverneiro te acorda com um 'Bom dia novo rei'",
    imagem: "url('img/taverna.jpg')",
    opcoes: [
      { texto: "1 - Perguntar algo ao taverneiro", proxima: "pergunta" },
      { texto: "2 - Ir falar com o grupo", proxima: "grupo" },
    ]
  },

  dormir: {
    texto: "-- Voltando a dormir, você sonha com uma batalha intensa.\n-- Porém não se lembra de muita coisa ao acordar mais 3h depois\n-- A taverna está mais calma, quase vazia",
    imagem: "url('img/taverna.jpg')",
    opcoes: [
      { texto: "1 - Perguntar ao taverneiro que dia e horas são", proxima: "horas" },
    ]
  },
  pergunta: {
    texto: "-- Você se vira para o taverneiro e ele te joga outra caneca de cerveja\n-- Você da um gole, a cerveja gelada faz o sono se dissipar um pouco",
    imagem: "url('img/taverna.jpg')",
    opcoes: [
      { texto: "1 - Perguntar onde está", proxima: "duvidas" },
      { texto: "2 - Perguntar como chegou la", proxima: "chegada" },
    ]
  },
  grupo: {
    texto: "-- Você se levanta e vai falar com o grupo.\n-- É um grupo de 4 pessoas\n-- Dois deles possuem vestes leves, portando varinhas\n-- Um deles possui uma couraça de metal pesada, e uma espada ao lado da cintura, enquanto o outro tem um escudo a mais\n-- Eles se assustam por uns segundos",
    imagem: "url('img/grupo.png')",
    opcoes: [
      { texto: "1 - Perguntar o motivo de estarem encarando", proxima: "encarada" },
      { texto: "2 - Perguntar o por que de estarem levemente apreenssivos", proxima: "apreenssao" },
    ]
  },
  horas: {
    texto: "-- 'É 3h da madrugada, você dormiu quase um dia inteiro, seus dois companheiros ja saíram...'",
    imagem: "url('img/taverna.jpg')",
    opcoes: [
        { texto: "1 - Sair da taverna", proxima: "sair"},
        { texto: "2 - Procurar alguém", proxima: "procura"},
    ]
  },
  duvidas: {
    texto: "-- 'Você está na taverna Porcos no Barril, no Sul da cidade de Eryndor'.\n-- Sua cabeça dói um pouco, mas nada tão preocupante",
    imagem: "url('img/taverna.jpg')",
    opcoes: [
      { texto: "1 - Perguntar como e quando chegou la", proxima: "chegada" },
    ]
  },
  chegada: {
    texto: "-- 'Você e mais 2 pessoas chegaram uns dois dias atras.'\n-- 'No primeiro dia bebeu bastante, e depois de encher essa cara com cerveja você apagou'.\n-- 'As outras 2 pessoas pegaram um serviço e saíram daqui horas depois de você desmaiar",
    imagem: "url('img/taverna.jpg')",
    opcoes: [
      { texto: "1 - Perguntar qual era o trabalho", proxima: "quest" },
      { texto: "2 - Beber mais um pouco e esperar o amanhecer", proxima: "amanhecer" },
    ]
  },
  encarada: {
    texto: "-- Um dos magos, o que parece ser o líder do grupo, se levanta e grita:\n-- 'Você roubou a nossa opotunidade de ganhar muito ouro! Esse era um trabalho para 4 pessoas e não 3'.\n-- Você começa a se lembrar do seu grupo, mas pra onde eles foram?",
    imagem: "url('img/grupo.png')",
    opcoes: [
      { texto: "1 - Perguntar qual era esse trabalho", proxima: "quest" },
      { texto: "2 - Agradecer a conversa e ir dormir", proxima: "amanhecer" },
    ]
  },
  apreenssao: {
    texto:"-- O grupo de viajantes o olhou de cima a baixo\n-- A aparência de um ladino bêbado não estava tão apresentável\n-- Um dos magos se levanta e indignado fala:\n-- 'como um bandido bêbado estaria a altura de uma missão daquelas, o taverneiro ficou doido? Aqueles 2 só te largaram pra trás'\n-- Depois de uma longa conversa, o sol ja estava quase clareando o céu\n-- O Ladino observa o papel deixado em sua bolsa, era as instruções da missão",
    imagem: "url('img/grupo.jpg')",
    opcoes: [
        { texto: "1 - Instruções da missão", proxima: "quest"},
        { texto: "2 - Agradecer a conversa e ir embora", proxima: "amanhecer" },
    ]
  },
  sair: {
    texto: "-- Você sai da taverna, suas roupas de ladino se misturam com as sombras da noite.\n-- Está frio, o inverno deixa sua respiração visível no ar\n-- De sua bolsa cai um papel.\n-- São instruções para uma missão",
    imagem: "url('img/vila.jpg')",
    opcoes: [
        { texto: "1 - Pegar o papel e continuar a procurar sinais do seu grupo", proxima: "procura"},
        { texto: "2 - Pegar o papel e ler", proxima: "quest"},
    ]
  },
  procura: {
    texto: "-- Na taverna, você procura por sinais dos outros 2 integrantes\n-- Encontra apenas um machado de batalha e um laço de cabelo roxo.\n-- Deduz que iriam voltar, então não deveriam estar longe.",
    imagem: "url('img/quartos.jpg')",
    opcoes: [
        { texto: "1 - Ler o papel", proxima: "quest"},
    ]
  },
    quest: {
    texto: "-- 'Nível da missão Rank: A\n-- Ao norte de Eryndor, perto das cachoeiras de Valemyr, há relatos de um grupo de Orcs saqueando viajantes e comerciantes que passam pela região. Acabe com a ameaça e recupere o Diamante da Loucura.\n-- Recompensa: 300 moedas de ouro.",
    imagem: "url('img/papel.jpg')",
    opcoes: [
        { texto: "1 - Se preparar pra sair", proxima: "preparo"},
        { texto: "2 - Sair sem se preparar", proxima:"start"},
    ]
  },
    amanhecer: {
    texto: "-- O sol ja dava seus primeiros sinais de vida, em seu bolso havia um papel com instruções da missão deixada que haviam pego.\n-- Ainda como sono, leu:\n-- Ao norte de Eryndor\n-- Perto das cachoeiras de Valemyr\n-- ...grupo de Orcs...\n--...Recupere o Diamante da Loucura.\n--...Recompensa: 300 moedas de ouro.",
    imagem: "url('img/papel.jpg')",
    opcoes: [
        { texto: "Próximo", proxima: "amanhecer2"},
    ]
  },
   amanhecer2: {
    texto: "-- A dúvida que ficava era:\n-- Será que tenho tempo para me preparar?\n-- Ou o que tenho é suficiente?\n-- Tenho que me apressar, não sei onde meus companheiros estão agora",
    imagem: "url('img/papel.jpg')",
    opcoes: [
        { texto: "1 - Se preparar pra sair", proxima: "preparo"},
        { texto: "2 - Sair sem se preparar", proxima:"start"},
    ]
  },
  preparo: {
    texto: "-- Você sai em busca de uma loja de suprimentos\n-- Chegando na loja você precisa de:\n-- 3 maçãs - 30 pratas;\n-- 2 frascos de veneno - 1,60 ouros;\n-- 2 kits para ferimentos - 2 ouros;\n-- 1 adaga nova - 10 ouros;\n-- Sua quantidade de moedas é de apenas 4 moedas de ouro",
    imagem: "url('')",
    opcoes: [
      {texto: "1 - Comprar apenas alguns itens", proxima: "itens"},
      {texto: "2 - Sair pra roubar algumas moedas, afinal, és um rogue", proxima: "roubar"}
    ]
  },
  start:{
    texto: "-- Você pega suas duas adagas.\n-- Sua bolsa com:\n-- Meio frasco de veneno;\n-- 2 bombas de fumaça;\n-- 4 moedas de ouro;",
    imagem: "url('')",
    opcoes: [
      {texto: "Próximo", proxima: "start2"},
    ]
  },
  start2: {
    texto: "-- Após pegar suas coisas você sai da taverna em direção ao portão norte da cidade",
    imagem: "url('')",
    opcoes: [
      {texto: "Próximo", proxima:"portao"},
    ]
  },
  itens:{
    texto:"O que deseja comprar?\n-- 4 moedas de ouro totais.\n-- maçã - 10 moedas de prata cada.\n-- Veneno - 80 moedas de prata cada.\n-- kit - 1 moeda de ouro cada.\n-- Adaga - 10 moedas de ouro",
    imagem: "url('')",
    opcoes:[
      {texto: "1 - Comprar comida, veneno e kit necessários - sobra 10 pratas", proxima:"loja"},
      {texto: "2 - Comprar 1 maçã, 1 veneno e 1 kit - sobra 400 pratas", proxima:"loja"},
    ]
  },
  roubar:{
    texto: "--Você sai da loja e, andando pela rua, vai tentando furtar moedas das pessoas.\n-- Depois de alguns minutos você obtem o ouro necessário para comprar tudo que era necessário.\n-- Total roubado 20 moedas de ouro.\n-- Total da compra 13,90",
    imagem: "url('')",
    opcoes:[
      {texto: "1 - Comprar o necessário - sobra 6,10 ouros", proxima:"loja"},
      {texto: "2 - Comprar mais 1 maçã e 1 frasco de veneno - sobra 5,20 ouros", proxima:"loja"},
    ]
  },
  loja:{
    texto: "--Saindo da loja com seus itens, você anda em direção ao portão norte da cidade",
    imagem:"url('')",
    opcoes:[
      {texto: "Próximo", proxima:"portao"},
    ]
  },
  portao:{
    texto:"-- Saindo do portão, há 3 caminhos diferentes:\n-- direita, em frente e voltar pra cidade.\n-- No horizonte, montanhas e árvores esbraquiçadas pela neve.\n-- No caminho da frente, a terra úmida marca pegadas de pelo menos 3 pessoas.\n-- Pela direita tem marcas de 2 pessoas",
    imagem:"url('')",
    opcoes:[
      {texto: "1 - Caminho da frente", proxima:"frente"},
      {texto: "2 - Caminho da direita", proxima:"direita"},
    ]
  },
  frente:{
    texto:"-- Depois de 20 minutos andando você avista 3 pessoas caídas no chão.\n-- Há sinais de batalha.\n-- Nenhum saque.\n-- E mais marcas de pegadas, maiores do que de uma pessoa normal, indo para a floresta ao Leste.\n-- Os Orcs devem estar dentro da floresta!",
    imagem:"url('')",
    opcoes:[
      {texto: "1 - Seguir as pegadas para a floresta?", proxima:"floresta"},
      {texto: "2 - Voltar para a divisão de caminho?", proxima:"caminho"},
    ]
  },
  caminho:{
    texto:"-- após a estrada percorrida anteriormente, você chega a divisão, e toma a estrada para a direita",
    imagem:"url('')",
    opcoes:[
      {texto: "Próximo", proxima:"direita"},
    ]
  },
  direita:{
    texto:"-- Depois de alguns minutos.\n-- Seguindo os passos das duas pessoas, você encontra resquícios de uma fogueira e uma marca no chão.\n-- É uma marca feita com magia, está meio fraca, mas você sabe que foi deixada por um dos integrantes do seu grupo",
    imagem:"url('')",
    opcoes:[
      {texto: "1 - Começar a correr", proxima:"correr"},
      {texto: "2 - Continuar andando", proxima:"andar"},
    ]
  },
  floresta:{
    texto:"-- Ao adentrar a floresta, você ouve gritos e barulhos ao longe.",
    imagem:"url('')",
    opcoes:[
      {texto:"1 - Começar a correr", proxima:"correr"},
      {texto: "2 - Continuar andando", proxima:"andar"},
    ]
  },
  correr:{
    texto:"-- Chegando rápido ao local, um dos seus companheiros está sendo torturado por um dos Orcs\n-- Aparentemente estão querendo saber sobre a localização do outro humano.\n-- O segundo Orc ainda nao tinha chegado naquele posto avançado.\n-- Qual a sua ação?",
    imagem:"url('')",
    opcoes:[
      {texto: "1 - atacar o Orc pelas costas", proxima:"costas"},
      {texto: "2 - Distrair o Orc com barulho enquanto liberta seu companheiro?", prixima:"distracao"},
    ]
  },
  andar:{
    texto:"-- após alguns minutos você chega ao posto avançado de Orcs, há dois deles.\n-- O corpo de um de seus companheiros está caído no chão. O outro não está la\n-- No meio do posto tem uma fogueira.\n-- Do lado direito tem duas barracas.\n-- Do lado esquerdo tem baldes de água",
    imagem:"url('')",
    opcoes:[
      {texto: "1 - Atacar um deles quando estiver distraído", proxima:"andar2"},
      {texto: "2 - Envenenar a água dos baldes", proxima:"andar21"},
    ]
  },
  costas:{
    texto:"-- Você espera o Orc se afastar um pouco do acampamento.\n-- Depois de passar veneno na lâmina da adaga, o Ladino pula nas costas do inimigo e perfura sua pele.\n-- O orc cai no chão ja sem muitos sinais de vida",
    imagem:"url('')",
    opcoes:[
      {texto: "Próximo", proxima:"Sara"},
    ]
  },
  
  Sara:{
    texto:"-- Ao libertar Sara.\n-- Se afastando do local, e tratando dos ferimentos, Sara lhe conta uma informação importante...",
    imagem:"url('')",
    opcoes:[
    {texto:"Próximo", proxima:"finalcapitulo1"}
    ]
  },

  distracao:{
    texto:"-- Você distrai o Orc com um barulho.\n-- Ele anda pra longe do acampamento.\n-- Você chega sorrateiramente e liberta Sara.\n-- Se afastando do local, e tratando dos ferimentos, Sara lhe conta uma informação importante...",
    imagem:"url('')",
    opcoes:[
      {texto:"Próximo", proxima:"finalcapitulo1"}
    ]
  },
  andar2:{
    texto:"-- Você espera o Orc se afastar um pouco do acampamento.\n-- Depois de passar veneno na lâmina da adaga, o Ladino pula nas costas do inimigo e perfura sua pele.\n-- O orc cai no chão ja sem muitos sinais de vida.\n-- O outro Orc é atraído pelo barulho e vai verificar o que está acontecendo",
    imagem:"url('')",
    opcoes:[
      {texto: "Próxmo", proxima:"bilhete"},
    ]
  },
  andar21:{
    texto:"-- Após envenenar a água dos baldes os dois inimigos caem inconscientes no chão.\n-- Analisando o corpo de Sara, você encontra um bilhete escondido, com uma informação muito importante...",
    imagem:"url('')",
    opcoes:[
      {texto: "Próxmo", proxima:"bilhete"},
    ]
  },
  bilhete:{
    texto:"-- O recado dizia....",
    imagem:"url('')",
    opcoes:[
      {texto:"Próximo", proxima:"finalcapitulo1"}
    ]
  },
  finalcapitulo1:{
    texto:"FINAL DO CAPÍTULO 1",
    imagem:"url('')",
    opcoes:[
      {texto:"início", proxima:"inicio"}
    ]
  },
};


function carregarCena(nomeCena) {
  const cena = cenas[nomeCena];

  document.body.style.backgroundImage = cena.imagem;
  promptBox.textContent = cena.texto;

  optionsBox.innerHTML = "";
  cena.opcoes.forEach(opcao => {
    const div = document.createElement("div");
    div.textContent = opcao.texto;
    div.classList.add("option");

    div.onclick = () => {
      promptBox.textContent += `\n\n> ${opcao.texto}`;
      setTimeout(() => carregarCena(opcao.proxima), 500);
    };

    optionsBox.appendChild(div);
  });
}

carregarCena("inicio");

const botaoInicio = document.getElementById('botao-inicio');
botaoInicio.addEventListener('click', () => {
    carregarCena("inicio");
});


