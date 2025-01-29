document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
        strings: ["Welcome to Ollie's Domain!", "the best place in the world!","<(^_^)>"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 3000,
        loop: true,
        smartBackspace: true // This is a default setting
    });
});

$(document).ready(function() {
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    });
});
