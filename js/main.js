function showPhoto(a) {

  var element = document.getElementById("imagem");
  var element2 = document.getElementById("descricao");


  if (a == "CP") {
    element.innerHTML = "<br><img src='img/cp1.jpg'</img>"; 
    element2.innerHTML = "<p>Copenhague leva o turista a um patamar diferente de fantasia. Entre a troca de guarda no Palácio de Amalienborg, residência de inverno da família real dinamarquesa; o edifício de tijolinhos do Castelo Rosenborg, com suas salas de trono e de joias da coroa; e a estátua da Pequena Sereia, personagem de um conto de Hans Christian Andersen, a capital da Dinamarca é cheia de histórias, combinando imaginação e autenticidade com o esplendor de uma cidade que tem um dos padrões de vida mais altos do mundo.</p>";
  }

  else if (a == "AA") {
    element.innerHTML = "<br><img src='img/aa1.jpg'</img>";
    element2.innerHTML = "<p>Århus, em que a pronúncia se aproxima de “órrus” em português, é a segunda maior cidade da Dinamarca com aproximadamente 300 mil habitantes e onde estão localizadas algumas das maiores empresas dinamarquesas, além de ser berço de uma das melhores universidades do mundo. Apesar de ser o maior polo comercial e educacional da península de Jylland, a cidade ainda mantém o espírito e tranquilidade de uma cidade de interior.</p>";
  }

  else if (a == "SK") {
    element.innerHTML = "<br><img src='img/sk1.jpg'</img>";
    element2.innerHTML = "<p>Um porto grande e ativo não diminui o charme dos mais antigos arredores de Skagen, com casas amarelas distintas, grandes museus, galerias de arte de cerâmica e vidro, e casas para alugueis de bicicleta. Os restaurantes portuários servem peixe fresco pescado na hora. Se você estiver acostumado a frequentar as praias do Caribe, isso não será novidade para você, mas apostamos que o charme de Skagen deixará você boquiaberto.</p>";
  }

  else if (a == "OD") {
    element.innerHTML = "<br><img src='img/od1.jpg'</img>";
    element2.innerHTML = "<p>Odense, a milenar e exótica capital de Fyn (ou Funen), é repleta de esculturas de duendes e bancos com pés em forma de monstros. A terra natal de Hans Christian Andersen é cheia de atrações relacionadas aos contos de fadas. Há diversos castelos no interior, incluindo o Castelo Egeskov de 1554, com seu fosso profundo, a 28 km de distância. De bicicleta ou a pé, visite os peixes-bois no zoológico, visite museus a céu aberto, conheça a impressionante catedral, o cinema de arte e os movimentados cafés, ou faça um passeio de barco pelo rio para ver a cidade.</p>";
  }
}
