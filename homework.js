'use strict';

let startBtn = document.getElementById('start'),
    burgetValue = document.getElementsByClassName('burget-value'),
    dayBurgetValue = document.getElementsByClassName('dayburget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('oncome-value'),
    mothSavingValue = document.getElementsByClassName('mothsaving-value'),
    yearSavingValue = document.getElementsByClassName('yearseving-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optinalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#saving'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('year-value'),
    mothValue = document.querySelector('moth-value'),
    dayValue = document.querySelector('day-value');


let money, time;



function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = +prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if ((typeof (a)) === 'string' && typeof (a) != null && typeof (b) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ваш бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уроверь достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уроверь достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSaving: function () {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяць с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let c = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = c;
        }
    },
 chooseIncome: function () {
     for (let i = 1; i < 2; i++) {
            let answ = true;
        while (answ) {
                let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
                if (typeof (items) == 'string' && items != '') {
                    appData.income = items.split(", ");
                    answ = false;
                } else {
                    if (items == null) {
                        answ = true;
                    }
                }
                let pushItems = appData.income.push(prompt("Может что-то ещё?"));
                if (typeof (pushItems) == 'string' && pushItems != '') {
                    appData.income = items.split(", ");
                    appData.income.sort();
                    answ = false;
                } else {
                    if (pushItems == null) {
                        answ = true;
                    }
                }
            }
        }
    }
};

appData.income.forEach(function (item, i, mass) {
    console.log((i + 1) + " Способы доп. заработка: " + appData.income);
});

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}
