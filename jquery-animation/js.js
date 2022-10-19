
$(function () {
    let mainTimerId;

    let container = $(".flex-container");



    $('button').click(function (){
        clearInterval(mainTimerId);
        const width = $("#width").val();
        const growth = parseFloat($("#growth").val());
        const interval = $("#interval").val();
        const number = parseFloat($("#number").val());
        let circlesToBeAdded = [];


        for (let i = 0; i < number; i++){
            const x = Math.floor(Math.random() * 256);
            const y = Math.floor(Math.random() * 256);
            const z = Math.floor(Math.random() * 256);
            const bgColor = "rgb(" + x + "," + y + "," + z + ")";
            const leftMargin = Math.random() * 500;
            circlesToBeAdded.push($("<div>", { "class": "circle" }).css({"left": leftMargin, "backgroundColor": bgColor}));
        }


        container.html(circlesToBeAdded);
        let circle = $(".circle");
        circle.click(function () {
            $(this).hide();
        });
        circle.hover( function () {
            $(this).addClass("low-opacity");
        },function () {
            $(this).removeClass("low-opacity")
        });


        circle.width(circle.width(width));
        circle.height(circle.height(width));

        mainTimerId = setInterval(()=>{
            circle.width(circle.width() + growth);
            circle.height(circle.height() + growth);
        }, interval);

    });


});