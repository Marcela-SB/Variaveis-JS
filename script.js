var nome, profissao, idade, calculo;

nome = (window.prompt("Qual o seu Nome?"));
idade = parseFloat(window.prompt("Qual a sua Idade?"));
profissao = (window.prompt("Qual a sua Profissão?"));

window.alert("Bem vindo(a)!");

if (idade<18){
  window.alert("Por ser menor de idade, algumas funções do site serão desabilitadas...");
}

document.write("<p style='font-weight: bolder;'>DADOS PESSOAIS:</p>");
document.write("Nome: "+nome+"</br>");
document.write("Idade: "+idade+"</br>");
document.write("Profissão: "+profissao+"</br>");

if (idade<18) {
  calculo=18-idade;
  document.write("Tempo Para a Maioridade: "+calculo+" anos");
}
