$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        

        var taskText = $('#task-input').val();
        
        if (taskText) {

            $('#task-list').append('<li>' + taskText + ' <button class="remove-btn">Remover</button></li>');
            
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#task-list').on('click', '.remove-btn', function(event) {
        event.stopPropagation();
        $(this).parent().remove();
    });
});
