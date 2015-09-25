// Muda Layout
document.querySelector("#mudaLayout").addEventListener("click", function(){
// Pega o elemento com a class="mural"
var mural = document.querySelector(".mural"); //querySelector pega o seletor entre os ()
// Tira ou coloca a classe
mural.classList.toggle("mural--linhas"); //Evento de clicar para adicionar e remover a classList
// If = Se ele tiver a classe "mural--linhas", estará escrito "BLOCOS", se não tiver, estará escrito "LINHAS"
	if (mural.classList.contains("mural--linhas")){
		this.textContent = "Blocos";
	} else {
		this.textContent = "Linhas";
	}
});
	
//Remover Cartão
function removeCartao(){
	var cartao = $("#cartao_" + $(this).data("ref"));
	//da uma classe que faz ele sumir devagar
	cartao.addClass('cartao--some');
	//tira da pagina depois da animação
	setTimeout(function(){
		cartao.remove();
	}, 400)
};

// Pega os botões
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
	for ( var i = 0; i < botoes.length; i++ ) {
	//adiciona o evento em cada botão
	botoes[i].addEventListener("click", removeCartao);
};
	
// Criando o contador
var contador = $(".cartao").length;
// Criando um novo cartão
$(".novoCartao").submit(function(event){
	var campoConteudo = $(".novoCartao-conteudo");
	var conteudo = campoConteudo.val().trim()
										.replace(/\n/g, "<br>");

	if (conteudo){
		//soma um no contador
		contador++;
		//cria atributo data-ref
		var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
										.attr("data-ref", contador)
										.text("Remover")
										.click(removeCartao);

		var opceos = $("<div>").addClass("opcoesDoCartao")
								.append(botaoRemove);

		var conteudoTag = $("<p>").addClass("cartao-conteudo")
									.append(conteudo);
		//cria atributo id
		$("<div>").attr("id", "cartao_" + contador)
					.addClass("cartao")
					.append(opcoes)
					.append(conteudoTag)
					.prependTo(".mural");
	}
	campoConteudo.val("");
	event.preventDefault();
});