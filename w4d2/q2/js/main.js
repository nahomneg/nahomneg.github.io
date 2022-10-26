
function getAnswer() {
    $.get({
        url:'/8ball',
        data:{
            question: $('#question').val()
        },
        success:function (response){
            console.log(response);
            $('#question').val(response);
        }
    });
}