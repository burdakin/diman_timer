var initial_date = new Date(2020, 9, 24, 8, 30, 0, 0);
var finish_date = new Date(2021, 2, 31, 0, 0, 0, 0);

function now() {
    let now = Date.now();
    return now;
}

var bg_arr = {
    0: 'bcg/1.jpg',
    1: 'bcg/2.jpg',
    2: 'bcg/3.jpg',
    3: 'bcg/4.jpg',
    4: 'bcg/5.jpg',
    5: 'bcg/6.jpg',
    6: 'bcg/7.jpg',
    7: 'bcg/8.jpg'
};

function date_count() {
    let result = +finish_date - now();
    let days = result / (1000 * 60 * 60 * 24);
    let days_word = day_word(days);
    let hours = (result - (Math.trunc(days) * (1000 * 60 * 60 * 24))) / 3600000;
    let hours_word = hrs_word(hours);
    let mins = (result - (Math.trunc(days) * (1000 * 60 * 60 * 24)) - (Math.trunc(hours) * (1000 * 60 * 60))) / 60000;
    let mins_word = sixty_word(mins,'минута','минуты','минут');
    let sec = (result - (Math.trunc(days) * (1000 * 60 * 60 * 24)) - (Math.trunc(hours) * (1000 * 60 * 60)) - (Math.trunc(mins) * (1000 * 60))) / 1000;
    let sec_word = sixty_word(sec,'секунда','секунды','секунд')
    document.getElementById('result').innerHTML = `До приезда Димана осталось <br> ${Math.trunc(days)} ${days_word}, 
${Math.trunc(hours)} ${hours_word} и ${Math.trunc(mins)} ${mins_word} и ${Math.trunc(sec)} ${sec_word}!`;
    count_percent();
}

function render() {
    setInterval(background, 5000);
    setInterval(date_count, 1000);
}

function count_percent() {
    let a = +finish_date - (+initial_date);
    let init_perc = a / 100;
    let x = now() - (+initial_date);
    let result_perc = x / init_perc;
    let move = document.querySelector(':root');
    move.style.setProperty('--diman', (result_perc - 5) + '%');
}

function background() {
    let index = Math.floor(Math.random() * 8);
    let prop = bg_arr[index];
    let bcg = document.querySelector(':root');
    bcg.style.setProperty('--bcg', `url("${prop}")`);
}


function day_word(n) {
    let num = Math.trunc(n);
    switch (num) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
            return 'день';
            break;

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 0:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
            return 'дней';
            break;

        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
            return "дня";
            break;

        default:
            return "дней";
    }
}

function hrs_word(n) {
    let num = Math.trunc(n);

    switch (num) {
        case 1:
        case 21:
            return 'час';
            break;

        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
            return 'часа';
            break;

        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            return 'часов';
            break;
    }
}

function sixty_word (n,first,second,third) {
    let num = Math.trunc(n);

    switch (num) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
            return first //минута/секунда
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
            return second; //минуты/секунды
            break;

        default: return third; // минут/секунд

    }
}


//TODO поправить проценты
//TODO Добавить город и Диван
//TODO Добавить ссылку на гит
//TODO Добавить цитаты
//TODO Настроить шрифт
//TODO Опционально медиа-запросы