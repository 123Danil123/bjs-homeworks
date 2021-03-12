"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    if ((Number(percent)) && (Number(contribution)) && (Number(amount)) && (Date(date))) {
        const creditbody = amount - contribution;
        const q = date.getMonth
        const monthpay = (0 + 1 / (((1 + percent) ^ 7) - 1)) * creditbody;
        const allpay = (Number(q) * Number(monthpay));
        console.log(Number(allpay));
        return allpay;
    } else {
        return "incorrect date";
    }
    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {
    name = document.myform.sender.value.toString();
    if (name != '') {
        if (name.length < 3 || name.length > 20) {
            console.log('Укажите ваше имя (3-20 символов)!');
            document.myform.name.focus();
            return false;
        }
    } else {
        console.log('Необходимо ввести имя!');
        document.myform.sender.focus();
        return false;
    }
}

// код для задачи №2 писать здесь
// return greeting;