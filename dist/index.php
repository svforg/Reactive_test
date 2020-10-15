<?php require $_SERVER['DOCUMENT_ROOT'] . "/inc/header.php"; ?>

<main class="page-content">

    <div class="wrapper">

        <section class="service">

            <header class="service__header header">

    <div class="row">

        <div class="col-lg-9">

            <h1 class="hero_display header__title">
                Выдача градостроительного<br>
                плана земельного участка
            </h1>

            <p class="header__description">
                Градостроительный план земельного участка выдается в целях обеспечения субъектов градостроительной деятельности информацией, необходимой для архитектурно-строительного проектирования, строительства, реконструкции объектов капитального строительства в границах земельного участка.
            </p>
        </div>

        <div class="col-lg-3">

            <div class="header__legend">

                <img class="header__legend-pic"
                     src="/img/service/header/gerb-rf.svg"
                     alt="Герб РФ"
                     title="Герб РФ"/>

                <small class="header__legend-text">
                    Услугу предоставляет <br>
                    Орган местного самоуправления
                </small>
            </div>
        </div>
    </div>
</header>



            <div class="row">

    <div class="col-lg-8">

        <form class="service__form form">

            <fieldset class="form__step step">

    <span class="h4 step__title step__button-edit">
        Выбор заявителя
    </span>

    <div class="step__collapse">

        <label class="radio-label step__radio"
               for="radio-declarer__individual">

            <input class="radio-input radio-label_active"
                   id="radio-declarer__individual"
                   type="radio"
                   name="radio-declarer"
                   value="individual"
                   checked/>

            <span class="radio-name">
            Константинопольский К.К.
        </span>

            <span class="radio-type">
            Физическое лицо
        </span>
        </label>

        <label class="radio-label step__radio"
               for="radio-declarer__legal-entity">

            <input class="radio-input"
                   id="radio-declarer__legal-entity"
                   type="radio"
                   name="radio-declarer"
                   value="legal-entity" />

            <span class="radio-name">
            ООО «Константинополь»
        </span>

            <span class="radio-type">
            Юридическое лицо
        </span>
        </label>

        <button class="button step__button-next">Продолжить</button>
    </div>
</fieldset>

            <fieldset class="form__step step">

    <span class="h4 step__title step__button-edit">
        Выбор заявителя
    </span>

    <div class="step__collapse">

        <label class="radio-label step__radio"
               for="radio-declarer__individual">

            <input class="radio-input"
                   id="radio-declarer__individual"
                   type="radio"
                   name="radio-declarer"
                   value="individual" />

            <span class="radio-name">
            Константинопольский К.К.
        </span>

            <span class="radio-type">
            Физическое лицо
        </span>
        </label>

        <label class="radio-label step__radio"
               for="radio-declarer__legal-entity">

            <input class="radio-input"
                   id="radio-declarer__legal-entity"
                   type="radio"
                   name="radio-declarer"
                   value="legal-entity" />

            <span class="radio-name">
            ООО «Константинополь»
        </span>

            <span class="radio-type">
            Юридическое лицо
        </span>
        </label>

        <button class="button step__button-next">Продолжить</button>
    </div>
</fieldset>

            <fieldset class="form__step step">

    <span class="h4 step__title step__button-edit">
        Выбор заявителя
    </span>

    <div class="step__collapse">

        <label class="radio-label step__radio"
               for="radio-declarer__individual">

            <input class="radio-input"
                   id="radio-declarer__individual"
                   type="radio"
                   name="radio-declarer"
                   value="individual" />

            <span class="radio-name">
            Константинопольский К.К.
        </span>

            <span class="radio-type">
            Физическое лицо
        </span>
        </label>

        <label class="radio-label step__radio"
               for="radio-declarer__legal-entity">

            <input class="radio-input"
                   id="radio-declarer__legal-entity"
                   type="radio"
                   name="radio-declarer"
                   value="legal-entity" />

            <span class="radio-name">
            ООО «Константинополь»
        </span>

            <span class="radio-type">
            Юридическое лицо
        </span>
        </label>

        <button class="button step__button-send" type="submit">Отправить</button>
    </div>
</fieldset>
        </form>

        <div class="preloader_cubic service__form-loader" hidden></div>

        <div class="service__form-success form-success">

    <span class="h4 step__title step__button-edit">
        Выбор заявителя
    </span>

    <div class="step__collapse">

        <label class="radio-label step__radio"
               for="radio-declarer__individual">

            <input class="radio-input"
                   id="radio-declarer__individual"
                   type="radio"
                   name="radio-declarer"
                   value="individual" />

            <span class="radio-name">
            Константинопольский К.К.
        </span>

            <span class="radio-type">
            Физическое лицо
        </span>
        </label>

        <label class="radio-label step__radio"
               for="radio-declarer__legal-entity">

            <input class="radio-input"
                   id="radio-declarer__legal-entity"
                   type="radio"
                   name="radio-declarer"
                   value="legal-entity" />

            <span class="radio-name">
            ООО «Константинополь»
        </span>

            <span class="radio-type">
            Юридическое лицо
        </span>
        </label>

        <button class="button step__button-send" type="submit">Отправить</button>
    </div>
</div>
    </div>
</div>
        </section>
    </div>
</main>

<?php require $_SERVER['DOCUMENT_ROOT'] . "/inc/footer.php"; ?>

