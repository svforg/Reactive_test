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

    <div class="step__edit">Изменить</div>

    <span class="h4 step__title ">
        Выбор заявителя
    </span>

    <div class="step__collapse">

        <label class="radio-label step__radio radio-label_active"
               for="radio-declarer__individual">

            <input class="radio-input"
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

    <div class="step__edit">Изменить</div>

    <span class="h4 step__title">
        Данные заявителя
    </span>

    <div class="step__collapse">

        <div class="step__group">

            <label class="input-label step__input-label"
                   for="input-surname-second-step">
                Фамилия
            </label>

            <input class="input-field"
                   id="input-surname-second-step"
                   name="surname"
                   type="text"
                   required
                   value="Константинопольский"/>
        </div>

        <div class="step__group">

            <label class="input-label step__input-label"
                   for="input-name-second-step">
                Имя
            </label>

            <input class="input-field"
                   id="input-name-second-step"
                   name="name"
                   type="text"
                   required
                   />
        </div>

        <div class="step__group">

            <label class="input-label step__input-label"
                   for="input-name-second-step">
                Отчество
            </label>

            <input class="input-field"
                   id="input-grand-name-second-step"
                   name="grand-name"
                   type="text"
                   required
                   />
        </div>

        <div class="step__group">

            <label class="input-label step__input-label"
                   for="input-email-second-step">
                Электронная почта
            </label>

            <input class="input-field"
                   id="input-email-second-step"
                   name="email"
                   type="email"
                   required
            />
        </div>

        <div class="step__group">

            <label class="input-label step__input-label"
                   for="input-phone-second-step">
                Телефон
            </label>

            <input class="input-field"
                   id="input-phone-second-step"

                   name="phone"
                   type="tel"
                   required
            />
        </div>

        <div class="step__group-title">
            <strong>
                Документ, удостоверяющий личность
            </strong>
        </div>

        <div class="step__group">

            <label class="input-label step__input-label"
                   for="input-doc-second-step">
                Документ
            </label>

            <input class="input-field"
                   id="input-doc-second-step"
                   name="doc"
                   type="text"
                   required
            />
        </div>

        <div class="step__group-inner step__group-inner-doc">

            <div class="step__group step__group-series">

                <label class="input-label step__input-label"
                       for="input-doc-series-second-step">
                    Серия
                </label>

                <input class="input-field"
                       id="input-doc-series-second-step"
                       name="doc-series"
                       type="text"
                       required
                />
            </div>

            <div class="step__group step__group-number">

                <label class="input-label step__input-label"
                       for="input-doc-number-second-step">
                    Номер
                </label>

                <input class="input-field"
                       id="input-doc-number-second-step"
                       name="doc-number"
                       type="text"
                       required
                />
            </div>
        </div>

        <div class="step__group-caption">
            Когда выдан
        </div>

        <div class="step__group-inner step__group-inner-date">

            <div class="step__group step__group-day">

                <label class="input-label step__input-label"
                       for="input-date-day-second-step">
                    День
                </label>

                <input class="input-field"
                       id="input-date-day-second-step"
                       name="date-day"
                       type="text"
                       required
                />
            </div>

            <div class="step__group step__group-month">

                <label class="input-label step__input-label"
                       for="input-date-month-second-step">
                    Месяц
                </label>

                <input class="input-field"
                       id="input-date-month-second-step"
                       name="date-month"
                       type="text"
                       required
                />
            </div>

            <div class="step__group step__group-year">

                <label class="input-label step__input-label"
                       for="input-date-year-second-step">
                    Год
                </label>

                <input class="input-field"
                       id="input-date-year-second-step"
                       name="date-year"
                       type="text"
                       required
                />
            </div>

        </div>

        <button class="button step__button-next step__button-next_second">Продолжить</button>
    </div>
</fieldset>

            <fieldset class="form__step step">

    <div class="step__edit">Изменить</div>

    <span class="h4 step__title">
        Согласие
    </span>

    <div class="step__collapse">

        <div class="step__list-caption">
            <strong>
                Требуется ваше согласие по следующим пунктам:
            </strong>
        </div>

        <ul class="step__list">
            <li class="step__list-item">
                Я подтверждаю, что вся представленная информация является достоверной и точной;
            </li>
            <li class="step__list-item">
                Я несу ответственность в соответствии с действующим законодательством Российской Федерации за предоставление заведомо ложных или неполных сведений;
            </li>
            <li class="step__list-item">
                Я выражаю свое согласие на необходимое использование и обработку своих персональных данных, в том числе в информационных системах;
            </li>
            <li class="step__list-item">
                Со сроками оказания государственной услуги ознакомлен.
            </li>
        </ul>

        <label class="checkbox-label step__checkbox"
               for="checkbox-consent-step-third">

            <input class="checkbox-input"
                   id="checkbox-consent-step-third"
                   type="checkbox"
                   name="checkbox-consent"
                   required
                   />

            <span class="radio-name">
                Я подтверждаю свое согласие со всеми вышеперечисленными пунктами
            </span>
        </label>

        <label class="checkbox-label step__checkbox"
               for="checkbox-knowledge-step-third">

            <input class="checkbox-input"
                   id="checkbox-knowledge-step-third"
                   type="checkbox"
                   name="checkbox-knowledge"
                   required
                   />

            <span class="radio-name">
                Я уведомлен о том, что результат будет получен в электронном виде
            </span>
        </label>

        <div class="step__notice">

            <span class="step__notice-text">
                Пожалуйста, еще раз внимательно проверьте все данные перед отправкой
            </span>
        </div>

        <button class="button step__button-send" type="submit">Отправить</button>
    </div>
</fieldset>
        </form>

        <div class="preloader_cubic service__form-loader" hidden></div>

        <div class="service__form-success form-success">

    <span class="h4 form-success__title">
        Заявление принято
    </span>

    <p class="form-success__description">
        Номер заявления RU-1234567. Максимальный срок предоставления услуги — 20 рабочих дней. Следите за статусом заявления в <a href="#" title="Личный кабинет">Личном кабинете</a>.
    </p>

    <p class="form-success__description">
        Если у вас остались вопросы по оказанию услуги, пожалуйста, обращайтесь по телефону <a href="tel:+73421234567" rel="nofollow">+7 (342) 123-45-67</a>.
    </p>

    <div class="form-success__button-inner">

        <a class="button button_link form-success__button"
           href="#"
           title="Каталог">
            Вернуться в каталог
        </a>

        <a class="button button_inverse button_link form-success__button"
           href="#"
           title="Личный кабинет">
            Перейти в личный кабинет
        </a>
    </div>
</div>
    </div>
</div>
        </section>
    </div>
</main>

<?php require $_SERVER['DOCUMENT_ROOT'] . "/inc/footer.php"; ?>

