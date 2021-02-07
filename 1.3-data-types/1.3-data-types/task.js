"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (Number(percent)) {
        console.log(percent);
    }
    if (Number(contribution)) {
        console.log(contribution);
    }
    if (Number(amount)) {
        console.log(amount);
    }
    if (Date(date)) {
        console.log(date);
    }
    let creditbody = amount - contribution;
    let q = date.getMonth
    let monthpay = creditbody * (percent + percent / (((1 + percent) ^ 2) - 1));
    let allpay = Number(q) * Number(monthpay);
    allpay.toFixed(1);
    console.log(Number(allpay));
    return allpay;
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