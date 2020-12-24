$(function (e) {

    var formValidate = $(".service__form"),
        inputPhone = formValidate.find("input[name='phone']");

    inputPhone.mask("+7 999-999-99-99", {autoclear: false});

    formValidate.validate({

        rules: {
            "surname": {
                required: true,
            },
            "name": {
                required: true,
            },
            "grand-name": {
                required: true,
            },
            "email": {
                required: true,
            },
            "phone": {
                required: true,
                phoneValidateMask: true,
            },
            "doc": {
                required: true,
            },
            "doc-series": {
                required: true,
            },
            "doc-number": {
                required: true,
            },
            "date-day": {
                required: true,
            },
            "date-month": {
                required: true,
            },
            "date-year": {
                required: true,
            },
            "checkbox-consent": {
                required: true,
            },
            "checkbox-knowledge": {
                required: true,
            },
        },
        messages: {
            "surname": {
                required: "Поле обязательно",
            },
            "name": {
                required: "Поле обязательно",
            },
            "grand-name": {
                required: "Поле обязательно",
            },
            "email": {
                required: "Поле обязательно",
            },
            "phone": {
                required: "Поле обязательно",
            },
            "doc": {
                required: "Поле обязательно",
            },
            "doc-series": {
                required: "Поле обязательно",
            },
            "doc-number": {
                required: "Поле обязательно",
            },
            "date-day": {
                required: "Поле обязательно",
            },
            "date-month": {
                required: "Поле обязательно",
            },
            "date-year": {
                required: "Поле обязательно",
            },
            "checkbox-consent": {
                required: "Поле обязательно",
            },
            "checkbox-knowledge": {
                required: "Поле обязательно",
            },
        },
        onkeyup: false,
    });

    $.validator.addMethod("phoneValidateMask", function (value, element) {

        var inputPhoneValue = inputPhone.val();
        var inputPhoneValueClean = inputPhoneValue.replace(/[-\s]/g,"").replace(/[-_—]+/g ,"");

        if ( (inputPhoneValueClean.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm) || []).length !== 1 ) {

            return false;

        } else return  true;

    }, $.validator.format("Некорректный номер"));
});