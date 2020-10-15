$(function (e) {

    var STEP_ACTIVE_ONLOAD = 0;

    var stepParent = $(".service__form .step"),
        stepsInner = $(".service__form"),
        stepCollapse = $(".step__collapse"),
        buttonNext = $(".step__button-next"),
        buttonEdit = $(".step__edit, .step__title");

    //hide all steps
    stepParent.find(stepCollapse)
        .hide();

    //show selected step on load
    stepParent.eq(STEP_ACTIVE_ONLOAD)
        .find(stepCollapse)
        .css("display","flex")
        .hide()
        .stop(true,true)
        .slideDown();

    buttonEdit.click(function(e) {

        var thisStep = $(this).closest(stepParent).find(stepCollapse),
            allSteps = $(this).closest(stepsInner).find(stepCollapse);

        if ( thisStep.css('display') === 'flex' ) return false;

        allSteps.stop(true,true)
            .slideUp();

        thisStep.css("display","flex")
            .hide()
            .stop(true,true)
            .slideDown();

        return false;
    });

    buttonNext.bind("click", function(e) {
        e.preventDefault();

        var thisStepParent = $(this).closest(stepParent),
            thisStepParentIndex = $(this).closest(stepParent).index(),
            thisStep = thisStepParent.find(stepCollapse),
            nextStep = $(this).closest(stepParent).next().find(stepCollapse);


        if ( (thisStepParentIndex === 1) && (!stepsInner.valid()) ) {
             return false;
        }
        else if (thisStepParentIndex === 2) {

        }

        thisStepParent.addClass("step_ready");

        thisStep.stop(true,true)
            .slideUp();

        nextStep
            .css("display","flex")
            .hide()
            .stop(true,true)
            .slideDown();

        return false;
    });
});