// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables:
let amigo = document.querySelector("#amigo");
let btnAgregarAmigo = document.querySelector(".button-add");
let btnSortearAmigo = document.querySelector(".button-draw");
let amigoSecreto = document.querySelector("#amigoSecreto");
let listaDeAmigos =document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


//la function let resultado = document.createElement('li')

function agregarAmigo(){
    let amigoValue = amigo.value;

   if (amigoValue =='') {
    alert("por fa escribe algo")
   }
   else{
    const listItem = document.createElement("li");
    
    listItem.innerHTML=`<p>${amigoValue}</p>`

    listaDeAmigos.appendChild(listItem);

    amigo.value="";
   }
};

function sortearAmigo(){
    const items = listaDeAmigos.querySelectorAll('li');
    if (items.length === 0){
        alert('No hay amigos para mostrar')
    }else{
        const randomIndex = Math.floor(Math.random()*items.length);
        const selectedItem = items[randomIndex].textContent;
        
        resultado.textContent = `El amigo secreto es:${selectedItem}`;
        listaDeAmigos.innerHTML="";
    }
    
};

