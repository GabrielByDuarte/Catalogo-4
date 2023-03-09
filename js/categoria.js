

function categoria(genero_value) {

    var div = document.getElementById("filme");

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    favoritos_all = JSON.parse(localStorage.getItem('Favoritos'));

    for (let index = 0; favoritos_all < array.length; index++) {
        resultado=favoritos_all[i].replace(" ", "%20");
        url_array[i]="http://www.omdbapi.com/?apikey=10ef3ab9&t="+resultado;
        url=url_array[i];

    function pegarFilme(url) {
        let request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send();

        return request.responseText;
    }

    let data = pegarFilme(url);
    filme = JSON.parse(data);
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
}  
        
    } 
 



