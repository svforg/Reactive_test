//radio buttons bordered
$(function (e) {

    var radioLabel = $(".radio-label");
    var radioInput = $(".radio-input");

    radioLabel.click(function (e) {

        $(this).addClass("radio-label_active");

        $.each(radioInput, function(index, elem) {
            var elem = $(elem);

            if ( !elem.is(':checked') ) {
                elem.closest(radioLabel)
                    .removeClass("radio-label_active");
            }
        });
    });
});

$(function (e) {
});