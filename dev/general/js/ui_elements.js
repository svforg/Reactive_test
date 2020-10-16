/****************************NEED REFACTOR*************/
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
//checkbox buttons bordered
$(function (e) {

    var radioLabel = $(".checkbox-label");
    var radioInput = $(".checkbox-input");

    radioLabel.click(function (e) {

        $(this).addClass("checkbox-label_active");

        $.each(radioInput, function(index, elem) {
            var elem = $(elem);

            if ( !elem.is(':checked') ) {
                elem.closest(radioLabel)
                    .removeClass("checkbox-label_active");
            }
        });
    });
});
/****************************NEED REFACTOR*************/

/**************************** IE9+ CSS VARS PONYFILL *************/

$(function (e) {
    cssVars({
        // Treat all browsers as legacy
        onlyLegacy: false,
    });
});
/**************************** IE9+ CSS VARS PONYFILL *************/