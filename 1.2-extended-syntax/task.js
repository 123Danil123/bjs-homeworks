function getResult(a, b, c) {
    "use strict"
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
    if (D > 0) {

        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        let result = [x1, x2];
        console.log(`Существует 2 корня`);
        return result;

    }
    if (D == 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        console.log(`Cуществует 1 корень`);
        let result = [x1];
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
    let average;
    if (marks.length == 0) {
        average = 0;
        console.log("Оценок нет");
        return average;
    }
    if (marks.length > 5) {
        marks.splice(5, 10)
        console.log("Ой, похоже вы ввели лишнии оценки, но не волнуйтесь мы их уже убрали!")
    }
    if (marks.length == 1) {
        average = marks[0];
        return average;
    }
    if (marks.length == 2) {
        average = (marks[0] + marks[1]) / marks.length;
        return average;
    }
    if (marks.length == 3) {
        average = (marks[0] + marks[1] + marks[2]) / marks.length;
        return average;
    }
    if (marks.length == 4) {
        average = (marks[0] + marks[1] + marks[2] + marks[3]) / marks.length;
        return average;
    }
    if (marks.length == 5) {
        average = (marks[0] + marks[1] + marks[2] + marks[3] + marks[4]) / marks.length;
        return average;
    }



    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    name = 'Иван';
    let now = new Date(); //Текущя дата
    dateOfBirthday = new Date(2002, 9, 31); //Дата рождения
    let age; //Возраст
    let ageActive = 18;
    // код для задачи №3 писать здесь
    age = now.getFullYear() - dateOfBirthday.getFullYear();
    let result;
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (age >= ageActive) {
        result = (`Не желаете ли олд-фэшн, ${ name }?`);
        return result;
    }
    if (age < ageActive) {
        result = (`Сожалею, ${ name }, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
        return result;
    }
    // return result; 

}