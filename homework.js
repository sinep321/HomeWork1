'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

let expenses1 = prompt("Введите обязательную статью расходов в этом месяце");
console.log(expenses1);
let expenses2 = prompt("Во сколько обойдется?");
console.log(expenses2);

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenses1: expenses2
    },
    // optionalExpenses: ,
    // income: [] ,
    saving: false
};

let budgetDay = ("Ваш бюджет на день: " + appData.budget / 30);
alert(budgetDay);