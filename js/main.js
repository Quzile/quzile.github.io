function valid() {
    //Radio передает id
    var form = form = document.querySelector('form');
    var totalpoint = 0;
    var q_1 = form.question1.value;
    var q_2 = form.question2.value;
    var q_3 = form.question3.value;
    var q_4 = form.question4.value;
    var q_5 = form.question5.value;
    var q_6 = form.question6.value;
    var q_7 = form.question7.value;
    var q_8 = form.question8.value;
    var q_9 = form.question9.value;
    var q_10 = form.question10.value;
    var q_11 = form.question11.value;
    var q_12 = form.question12.value;
    var q_13 = form.question13.value;
    var q_14 = form.question14.value;
    var q_15 = form.question15.value;
    var q_16 = form.question16.value;
    var q_17 = form.question17.value;
    var q_18 = form.question18.value;
    var q_19 = form.question19.value;
    var q_20 = form.question20.value;
    var q_21 = form.question21.value;
    var q_22 = form.question22.value;
    var q_23 = form.question23.value;
    var q_24 = form.question24.value;
    var q_25 = form.question25.value;
    var q_26 = form.question26.value;
    var q_27 = form.question27.value;
    var q_28 = form.question28.value;
    var q_29 = form.question29.value;
    var q_30 = form.question30.value;
    var q_31 = form.question31.value;
    var q_32 = form.question32.value;
    var q_33 = form.question33.value;
    var q_34 = form.question34.value;
    var q_35 = form.question35.value;
    var q_36 = form.question36.value;
    var q_37 = form.question37.value;
    var q_38 = form.question38.value;
    var q_39 = form.question39.value;
    var q_40 = form.question40.value;
    if (q_1 == "14") {
        totalpoint += 1;
    } if (q_2 == "office") {
        totalpoint += 1;
    } if (q_3 == "4,13") {
        totalpoint += 1;
    } if (q_4 == "kit") {
        totalpoint += 1;
    } if (q_5 == "boing") {
        totalpoint += 1;
    } if (q_6 == "Грибной" || q_6 == "грибной" || q_6 == "ГРИБНОЙ") {
        totalpoint += 1;
    } if (q_7 == "Лом" || q_7 == "лом" || q_7 == "ЛОМ") {
        totalpoint += 1;
    } if (q_8 == "5") {
        totalpoint += 1;
    } if (q_9 == "3") {
        totalpoint += 1;
    } if (q_10 == "32") {
        totalpoint += 1;
    } if (q_11 == "5") {
        totalpoint += 1;
    } if (q_12 == "18,30" || q_12 == "30,18") {
        totalpoint += 1;
    } if (q_13 == "Ф" || q_13 == "ф") {
        totalpoint += 1;
    } if (q_14 == "Права" || q_14 == "права" || q_14 == "ПРАВА") {
        totalpoint += 1;
    } if (q_15 == "Лот,плот" || q_15 == "лот,плот" || q_15 == "Лот,Плот" || q_15 == "ЛОТ,ПЛОТ") {
        totalpoint += 1;
    } if (q_16 == "6") {
        totalpoint += 1;
    } if (q_17 == "vest") {
        totalpoint += 1;
    } if (q_18 == "3") {
        totalpoint += 1;
    } if (q_19 == "Бор" || q_19 == "бор" || q_19 == "БОР") {
        totalpoint += 1;
    } if (q_20 == "Платон" || q_20 == "платон" || q_20 == "ПЛАТОН") {
        totalpoint += 1;
    } if (q_21 == "6") {
        totalpoint += 1;
    } if (q_22 == "Пристав" || q_22 == "пристав" || q_22 == "ПРИСТАВ") {
        totalpoint += 1;
    } if (q_23 == "Мотыль" || q_23 == "мотыль" || q_23 == "МОТЫЛЬ") {
        totalpoint += 1;
    } if (q_24 == "5") {
        totalpoint += 1;
    } if (q_25 == "Саломея" || q_25 == "саломея" || q_25 == "САЛОМЕЯ") {
        totalpoint += 1;
    } if (q_26 == "Б" || q_26 == "б") {
        totalpoint += 1;
    } if (q_27 == "2") {
        totalpoint += 1;
    } if (q_28 == "2") {
        totalpoint += 1;
    } if (q_29 == "Рагу" || q_29 == "рагу" || q_29 == "РАГУ") {
        totalpoint += 1;
    } if (q_30 == "Паз" || q_30 == "паз" || q_30 == "ПАЗ") {
        totalpoint += 1;
    } if (q_31 == "3") {
        totalpoint += 1;
    } if (q_32 == "1") {
        totalpoint += 1;
    } if (q_33 == "10") {
        totalpoint += 1;
    } if (q_34 == "newyork") {
        totalpoint += 1;
    } if (q_35 == "18") {
        totalpoint += 1;
    } if (q_36 == "Д,з" || q_36 == "д,з" || q_36 == "Д,З") {
        totalpoint += 1;
    } if (q_37 == "Герц" || q_37 == "герц" || q_37 == "ГЕРЦ") {
        totalpoint += 1;
    } if (q_38 == "26") {
        totalpoint += 1;
    } if (q_39 == "Н" || q_39 == "н") {
        totalpoint += 1;
    } if (q_40 == "238") {
        totalpoint += 1;
    }

    var iq = (75 + 2.5 * totalpoint)
    var percent = (totalpoint / 40) * 100
    alert("Ваш результат: " + totalpoint + "/40 баллов (" + percent + "%)\n\nВаш IQ составляет: " + iq + "\n\nВы молодец, что не сдались и прошли тест до конца! Не огорчайтесь, если не смогли дать верный ответ на все вопросы. Любой человек может правильно ответить на некоторые вопросы, но никто не в состоянии правильно ответить на все.");
    window.location.href = "/"
}