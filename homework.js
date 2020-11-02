'use strict';

let money, time;



function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = +prompt("Введите дату в формате YYYY-MM-DD", "");   

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let c = prompt("Статья необязательных расходов?", "");
    if ((typeof(c)) ==='string' && typeof(c) != null && c != '' && c.length < 50){
        console.log("Done!");
        return c;    
    }   
    else {
        i = i - 1;
            }   
} 
}

let optAnswer = chooseOptExpenses();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{
        1: optAnswer,
        2: optAnswer,
        3: optAnswer
    },
    // income: [] ,
    saving: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ((typeof(a)) ==='string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");    
            appData.expenses[a] = b;    
    }
    else {
    i = i - 1;
        }
    }
}

chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ваш бюджет на день: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уроверь достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уроверь достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSaving() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяць с депозита: " +appData.monthIncome);
        }
}

checkSaving();