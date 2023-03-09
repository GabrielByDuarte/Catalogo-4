function buscar() {

  div = document.getElementById("filme");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  sumir_star();

  api = "http://www.omdbapi.com/?apikey=10ef3ab9&t=";

  input_value = document.querySelector("#buscar").value;

  resultado = input_value.replace(" ", "%20");

  buscar_api = api + resultado;
  url = buscar_api;

  // request = new XMLHttpRequest();
  // request.open("GET", url);
  // console.log(url);
  // request.send();
  // console.log(request);

  // request.onload = function () {
  //   // Analisa a resposta da solicitação e extrai o objeto desejado
  //   const response = JSON.parse(request.responseText);
  //   const filme = response.filme;
  //   //  data = pegarFilme(url);
  //   // filme = JSON.parse(data);
  fetch(url)
    .then(response => response.json())
    .then(filme => {

      // console.log(filme.Title);
      var elemento_pai = document.getElementById("filme");

      h1Title = document.createElement("h1");
      h1Title.innerHTML = filme.Title;

      elemento_pai.appendChild(h1Title);
      // h1Title.appendChild(filmeTitulo);

      section_pai = document.createElement("section");
      elemento_pai.appendChild(section_pai);

      div_descricao_left = document.createElement("div");

      section_pai.appendChild(div_descricao_left);
      img = document.createElement("img");
      img.src = filme.Poster;

      div_descricao_left.appendChild(img);

      div_descricao_right = document.createElement("div");
      section_pai.appendChild(div_descricao_right);
      atores = document.createElement("p");
      atores.innerHTML = "<span class='bold'>Atores: </span>" + filme.Actors;
      genero = document.createElement("p");
      genero.innerHTML = "<span class='bold'>Gênero: </span>" + filme.Genre;

      fatura = document.createElement("p");
      fatura.innerHTML = "<span class='bold'>Bilheteria: </span> <span class='bold green'>" + filme.BoxOffice + "</span>";
      ano = document.createElement("p");
      ano.innerHTML = "<span class='bold'>Ano de lançamento: </span>" + filme.Year;
      nota_critico = document.createElement("p");
      nota_critico.innerHTML = "<span class='bold'>Nota da crítica: </span>" + filme.Metascore + "/100";
      descricao = document.createElement("p");
      descricao.innerHTML = "<span class='bold'>Descrição: </span>" + filme.Plot;


      div_descricao_right.appendChild(atores);
      div_descricao_right.appendChild(genero);
      div_descricao_right.appendChild(fatura);
      div_descricao_right.appendChild(ano);
      div_descricao_right.appendChild(nota_critico);
      div_descricao_right.appendChild(descricao);


      if (filme.Title == undefined) {
        var div = document.getElementById("filme");

        while (div.firstChild) {
          div.removeChild(div.firstChild);
        }
        div = document.getElementById("filme");

        h1Title = document.createElement("h1");
        h1Title.innerHTML = "Filme desconhecido";

        elemento_pai.appendChild(h1Title);


      } else {
        aparecer_star();
      }

    })

  setTimeout(verifica_favorito, 2500);
}



function verifica_favorito() {

  var texto_input = document.getElementById('filme').querySelector('h1').textContent;
  if (texto_input == "Filme desconhecido") {
    sumir_star();
  } else {
    var star = document.getElementById("fa-star");

    favoritos = JSON.parse(localStorage.getItem('Favoritos'));
    if (!favoritos) {

    } else {

      for (var i = 0; i < favoritos.length; i++) {
        // console.log(texto_input);
        // console.log(favoritos[i]);
        if (favoritos[i] == texto_input) {
          star.classList.replace('fa-regular', 'fa-solid');
          break;
        } else {
          star.classList.replace('fa-solid', 'fa-regular');
        }
      }
    }
  }
}




function favoritar() {


  var star = document.getElementById("fa-star");

  // var texto_input = document.getElementById("filme");
  // var texto_input = input.querySelector("h1").textContent;
  const minhaDiv = document.getElementById('filme');

  // Seleciona o primeiro h1 dentro da div
  const titulo = minhaDiv.querySelector('h1');

  // Pega o texto do h1
  const texto_input = titulo.textContent;


  favoritos = window.localStorage.getItem('Favoritos');
  add = false;
  if (!favoritos) {

    favoritos = texto_input;

    star.classList.replace('fa-regular', 'fa-solid');
    favoritos_a = favoritos.split(",");


    localStorage.setItem('Favoritos', JSON.stringify(favoritos_a));

  } else if (star.classList.contains("fa-regular")) {

    favoritos_all = JSON.parse(localStorage.getItem('Favoritos'));
    for (var i = 0; i <= favoritos_all.length; i++) {

      if (favoritos_all[i] == texto_input) {
        add = true;
      }
    }
    if (add != true) {
      favoritos_all.push(texto_input);
    }

    star.classList.replace('fa-regular', 'fa-solid');
    localStorage.setItem('Favoritos', JSON.stringify(favoritos_all));

  } else {
    favoritos_all = JSON.parse(localStorage.getItem('Favoritos'));

    for (var i = 0; i <= favoritos_all.length; i++) {

      if (favoritos_all[i] == texto_input) {
        a = i--;
        console.log("remover" + a);
        favoritos_all.splice(a, 1);

        localStorage.setItem('Favoritos', JSON.stringify(favoritos_all));
        star.classList.replace('fa-solid', 'fa-regular');
        break;
      }

    }


  }

  mostrar_favoritos();

}

function mostrar_favoritos() {
  var limpar = document.getElementById("nav_favoritos");

  while (limpar.firstChild) {
    limpar.removeChild(limpar.firstChild);
  }
  limpo();
}

function limpo() {

  favoritos_all = JSON.parse(localStorage.getItem('Favoritos'));

  if (favoritos_all == null) {

  } else {

    var elemento_pai = document.getElementById("nav_favoritos");
    for (let i = 0; i < favoritos_all.length; i++) {
      li = document.createElement("li");
      a = document.createElement("a");
      a.innerHTML = favoritos_all[i];

      elemento_pai.appendChild(li);
      li.appendChild(a);

    }
  }
}



function categoria(genero_value) {

  var div = document.getElementById("filme");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  favoritos_all = JSON.parse(localStorage.getItem('Favoritos'));

  for (let i = 0; i < favoritos_all.length; i++) {
    resultado = favoritos_all[i].replace(" ", "%20");
    var url = "http://www.omdbapi.com/?apikey=10ef3ab9&t=" + resultado;

    fetch(url)
      .then(response => response.json())
      .then(filme => {
        if (filme.Genre == genero_value) {
          var elemento_pai = document.getElementById("filme");

          h1Title = document.createElement("h1");
          h1Title.innerHTML = filme.Title;

          elemento_pai.appendChild(h1Title);

          section_pai = document.createElement("section");
          elemento_pai.appendChild(section_pai);

          div_descricao_left = document.createElement("div");

          section_pai.appendChild(div_descricao_left);
          img = document.createElement("img");
          img.src = filme.Poster;

          div_descricao_left.appendChild(img);

          div_descricao_right = document.createElement("div");
          section_pai.appendChild(div_descricao_right);
          atores = document.createElement("p");
          atores.innerHTML = "<span class='bold'>Atores: </span>" + filme.Actors;
          genero = document.createElement("p");
          genero.innerHTML = "<span class='bold'>Gênero: </span>" + filme.Genre;
          fatura = document.createElement("p");
          fatura.innerHTML = "<span class='bold'>Bilheteria: </span> <span class='bold green'>" + filme.BoxOffice + "</span>";
          ano = document.createElement("p");
          ano.innerHTML = "<span class='bold'>Ano de lançamento: </span>" + filme.Year;
          nota_critico = document.createElement("p");
          nota_critico.innerHTML = "<span class='bold'>Nota da crítica: </span>" + filme.Metascore + "/100";
          descricao = document.createElement("p");
          descricao.innerHTML = "<span class='bold'>Descrição: </span>" + filme.Plot;


          div_descricao_right.appendChild(atores);
          div_descricao_right.appendChild(genero);
          div_descricao_right.appendChild(fatura);
          div_descricao_right.appendChild(ano);
          div_descricao_right.appendChild(nota_critico);
          div_descricao_right.appendChild(descricao);

        }
      })

  }
}




function sumir_star() {

  var star = document.getElementById("fa-star");
  star.style.display = "none";
}

function aparecer_star() {

  var star = document.getElementById("fa-star");
  star.style.display = "block";
}