var peso = [35,38,42,45,43,34,36,41,48,32];

var soma = 0;


for (var indice = 0; indice <10; indice = indice +1){
  soma = soma+peso[indice];
}

var media = soma/peso.length;
console.log(soma);

function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

