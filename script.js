

function validar(){

    let nome =document.getElementById("nome").value
    let telefone =document.getElementByid("telefone").value
    let email =document.getElementByid("telefone").value

    if( nome =="" && telefone =="" && email==""){
    alert("preencha todos os campos")

}else{
    alert("acesso permitido")
    window.open('contato.html')
   


}
}
var quis = [
  ["Qual é a uva mais utilizada na produção de vinho tinto na região de Bordeaux?", "Cabernet Sauvignon"],
  ["Qual país é conhecido pela produção do vinho Malbec?", "Argentina"],
  ["Qual é o nome da uva utilizada na produção de vinho branco Chardonnay?", "Chardonnay"],
  ["Qual é o nome da uva utilizada na produção de vinho tinto Pinot Noir?", "Pinot Noir"],
  ["Qual é a região vinícola mais famosa da Itália?", "Toscana"],
  ["Qual é a região vinícola mais famosa da França?", "Bordeaux"],
  ["Qual é a diferença entre um vinho seco e um vinho suave?", "O vinho seco tem menos açúcar residual que o vinho suave."],
  ["O que é o termo 'tanino' em relação ao vinho?", "É uma substância encontrada na casca da uva e nos barris de carvalho que dá ao vinho um sabor amargo e adstringente."],
  ["Qual é a temperatura ideal de serviço para um vinho tinto?", "Entre 16 e 18 graus Celsius."],
  ["Qual é a temperatura ideal de serviço para um vinho branco?", "Entre 8 e 12 graus Celsius."]
];


var score = 0;

for(var i=0; i<quis.length; i++){
  var answer = prompt(quis[i][0]);
  if(answer.toLowerCase() === quis[i][1].toLowerCase()){
    score++;
    alert("Resposta correta!");
  } else {
    alert("Resposta incorreta! A resposta correta é: " + quis[i][1]);
  }
}

document.write("<h2>Você acertou " + score + " de " + quis.length + " perguntas!</h2>");

   