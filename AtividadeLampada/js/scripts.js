// let led = "ligar";

// const ligar = () => {
//   let btnEnviar = document.getElementById("btnEnviar");
//   let imgLampada = document.getElementById("lampada");

//   if (led == "ligar") {
//     // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
//     imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
//     imgLampada.alt = "Lampada acesa.";

//     btnEnviar.innerHTML = "Apagar";
//     led = "apagar";
//   } else {
//     // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
//     imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
//     imgLampada.alt = "Lampada apagada.";

//     btnEnviar.innerHTML = "Acender";
//     led = "ligar";
//   }
// };
// console.log("------------------/ /------------------")
// const gerarImagem = () => {
//   let qtdImagem = document.getElementById("inQtdImg").value;
//   let canvas = document.getElementById("canvas");

//   console.log(qtdImagem);

//   canvas.innerHTML = ""

//   for (let i = 1; i <= qtdImagem; i++) {
//     canvas.innerHTML += `<img class="imagens" src="https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg" />`;
//   }
// }
// console.log("------------------/ /------------------")

// const calcular = () => {
//   let inValorPedido = document.getElementById("inValorPedido").value
//   let inPercDesc = document.getElementById("inPercDesc")
//   let inValDesc = document.getElementById("inValDesc")
//   let inValFinal = document.getElementById("inValFinal ")

//   if (inValorPedido >= 2000) {
//     inPercDesc.value = 1.5
//   } else if (inValorPedido >= 1500) {
//     inPercDesc.value = 1
//   } else if (inValorPedido >= 1000) {
//     inPercDesc.value = 0.8
//   } else if (inValorPedido >= 500) {
//     inPercDesc.value = 0.5
//   }
// }
// console.log("funcionou")

// console.log("------------------/ /------------------")
// function validaForm() {
//   const inData = document.getElementById("inData").value;
//   const inCli = document.getElementById("inCli").value;
//   const inFone = document.getElementById("inFone").value;
//   const inMail = document.getElementById("inMail").value;
//   const inProd = document.getElementById("inProd").value;
//   const inQtd = document.getElementById("inQtd").value;
//   const inVal = document.getElementById("inVal").value;
//   const mensagemErro = document.getElementById("mensagem-erro");

//   mensagemErro.style.display = "none";
//   mensagemErro.innerHTML = "";

//   if (!inData || inCli == "" || inFone == "" || inMail == "" || inProd == "" || inQtd == "" || inVal == "") {
//     mensagemErro.innerHTML += "É obrigatório que todos os campos estejam preenchidos! <br />";
//     mensagemErro.style.display = "block";
//   }
// }


console.log("---------------  C O R R E Ç Ã O ")

const validaForm = () => {
  // captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválida <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : (msgErro.style.display = "block");

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    (msgErro.className = "verde"));
};