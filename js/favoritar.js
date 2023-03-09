// var texto_input = document.querySelector('#filme h1').innerText;


function verifica_favorito() {

    var star = document.getElementById("fa-star");
    var input = document.getElementById('filme');
    var texto_input = input.querySelector('h1').textContent;
   

    favoritos = JSON.parse(localStorage.getItem('Favoritos'));
    if (!favoritos) {

    } else {

        for (var i = 0; i < favoritos.length; i++) {
            console.log(texto_input);
            console.log(favoritos[i]);
            if (favoritos[i] == texto_input) {
                star.classList.replace('fa-regular', 'fa-solid');
                break;
            } else {
                star.classList.replace('fa-solid', 'fa-regular');
            }
        }
    }
}




function favoritar() {


    var star = document.getElementById("fa-star");
 
    var input = document.getElementById('filme');
    var texto_input = input.querySelector('h1').textContent;

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

    verifica_favorito();
    mostrar_favoritos();
    listar_categoria();

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

   if(favoritos_all==null){

   }else {
    
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