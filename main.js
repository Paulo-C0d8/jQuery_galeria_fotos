$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

     $('#botao-cancelar').click(function(){ // Botão cancelar tem a função "click" e quando for selecionado terá a função de subir a aba// Uma maneira de atribuir uma função ou evento a um elemento
        $('form').slideUp() //Nova função atribuida
    })

    $('form').on('submit', function(e) { //Atribuição de uma função ao elemento
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem) //Adicionando o código do appendTo dentro do $('<li>' '</li>')
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blanck" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })
    
})

