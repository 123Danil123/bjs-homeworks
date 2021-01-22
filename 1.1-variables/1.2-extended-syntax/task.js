function getResult(a, b, c) {
    "use strict"
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0) {

        let x1 = -b + Math.sqrt(D) / (2 * a);
        let x2 = -b - Math.sqrt(D) / (2 * a);
        let result = [x1, x2];
        console.log(`Существует 2 корня`);
        return result;

    }
    if (D == 0) {
        x1 = -b + Math.sqrt(D) / (2 * a);
        x2 = -b + Math.sqrt(D) / (2 * a);
        let result = [x1, x2];
        console.log(`Cуществует 1 корень`);

        return result;
    }
    if (D < 0) {
        console.log(`Значения не существует`)
        let x = [];
        return x;
    }
    // код для задачи№ 1 писать здесь
    console.log(x);
    console.log(result);
    // return x;
}

function getAverageMark(marks) {
    marks = ["1", "2", "3", "4", "5"];

    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let youName = 'Иван';
    let now = new Date(); //Текущя дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(1995, 9, 31); //Дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст
    // код для задачи №3 писать здесь
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
        age = age - 1;
    }
    if (age >= 18) {
        console.log(`
                Не желаете ли олд - фэшн, $ { youName } ? `);
    } else {
        console.log(`
                Сожалею, $ { youName }, но я не могу продать вам алкоголь.\n Могу предложить вам замечательный клюквенный компот!`);
    } // return result;
}