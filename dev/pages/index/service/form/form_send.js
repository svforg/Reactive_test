$(function (e) {

    var URL_FORM_HANDLER = "/server-form-handlers";

    var formInner = $(".service__form");
    var sendPreLoader = $(".service__form-loader");
    var formSuccess = $(".service__form-success");

    formInner.on("submit", function(e) {
        e.preventDefault();

        var thisForm = $(this),
            data = {},
            dataSend = new FormData();
            //formValid = thisForm.valid();

        //if ( !formValid ) return false;

        thisForm.fadeOut(100);

        data['name'] = thisForm.find("input[name='name']").val();
        data['email'] = thisForm.find("input[name='email']").val();
        data['phone'] = thisForm.find("input[name='phone']").val();

        dataSend.append('data', JSON.stringify(data));

        $.ajax({
            type: "POST",
            url: URL_FORM_HANDLER,
            data: dataSend,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function (xhr) {

                sendPreLoader.removeAttr("hidden");
            },
            complete: function (xhr) {

                sendPreLoader.attr("hidden", true);
            },
            success: function (data) {

                formSuccess
                    .css("display","flex")
                    .hide()
                    .fadeIn(300);
            },
            error: function (xhr, str) {

                //alert('Не получилось отправить данные. Что-то пошло не так.');

                formSuccess
                    .css("display","flex")
                    .hide()
                    .fadeIn(300);
            }
        });
    });
});