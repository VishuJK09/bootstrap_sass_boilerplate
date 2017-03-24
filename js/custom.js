$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar-scroll").addClass("change");
        } else {
            $(".navbar-scroll").removeClass("change");
        }
    });
});
