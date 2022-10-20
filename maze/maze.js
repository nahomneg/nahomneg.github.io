$(function () {
    const boundaries = $(".boundary");
    let touched =false;
    let outside = true;
    boundaries.mouseenter(function () {
        $(this).addClass("youlose");
        touched = true;
    });
    const end = $("#end");
    const start = $("#start");
    const body = $("body");
    const maze = $("#maze");
    const status = $("h2");
    end.mouseenter(function () {
        if(!touched){
            status.text("You won");
        }
        else{
            status.text("You lost");
        }
        outside = true;
        return false;
    });
    start.click(function (evt) {
        $('.boundary').removeClass("youlose");
        status.text("Playing");
        touched = false;

    });

    maze.mouseover(function (evt) {
        outside = false;
        evt.stopPropagation();
    });
    body.mouseover(function () {
        if( !outside){
            outside = true;
            $('.boundary').addClass("youlose");
        }

    });

})