$(document).ready(function() {
    // Adiciona tarefa ao submeter o formulário
    $('form').submit(function(event) {
        event.preventDefault(); // previne o comportamento padrão do formulário
        var taskName = $('#task').val(); // obtém o valor do campo de entrada
        if (taskName !== '') { // verifica se o campo não está vazio
            $('.task-list').append('<li>' + taskName + '</li>'); // adiciona a tarefa à lista
            $('#task').val(''); // limpa o campo de entrada
        }
    });

    // Aplica efeito de linha sobre as tarefas ao serem clicadas
    $(document).on('click', '.task-list li', function() {
        $(this).toggleClass('completed'); // alternar classe para aplicar/retirar o efeito de linha
    });
});
