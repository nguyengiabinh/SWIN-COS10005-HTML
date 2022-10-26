jQuery(document).ready(function($) {
    var university = " SWINBURNE ",
        major = "Software engineering";

    $("#click_action").on("click", function() {
        clickEvent();
    })

    $("#my_uni").on("click", function() {
        clickEvent();
    })
});

function clickEvent() {
    alert("My university is " + university);
    alert("My major is " + major);
}
