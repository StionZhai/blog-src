/**
 * @file  timer.js
 * @author Dazzlight
 */

;(function (win) {

    var deadline = getFutureTime(2016, 11, 12);

    var timer = setInterval(function () {
        var now = getNowTime();
        var days = getDays(now, deadline);
        var hours = getHours(now, deadline);
        var minutes = getMinutes(now, deadline);
        var seconds = getSeconds(now, deadline);

        if (days < 0) {
            clearInterval(timer);

            document.querySelector('.timer-tick')
                .innerHTML = '<div class="time-to-go">2017-02-25 一个很幸福的日子💕<br>暂时记录下, 该添加个新页面了☺</div>';
        }

        document.querySelector('.timer-digit-days').innerHTML = days;
        document.querySelector('.timer-digit-hours').innerHTML = hours;
        document.querySelector('.timer-digit-minutes').innerHTML = minutes;
        document.querySelector('.timer-digit-seconds').innerHTML = seconds;
    }, 1000);

}(window));

/**
 * 返回 1970 年 1 月 1 日至今的秒数
 *
 * @return {number} 秒数
 */
function getNowTime() {
    return ~~(new Date().getTime() / 1000);
}

function getFutureTime(y, m, d) {
    return ~~(new Date(y, m, d).getTime() / 1000);
}

function getDays(now, future) {
    return ~~((future - now) / (24 * 60 * 60));
}

function getHours(now, future) {
    return ~~((future - now) % (24 * 60 * 60) / (60 * 60));
}

function getMinutes(now, future) {
    return ~~((future - now) / 60 % 60);
}

function getSeconds(now, future) {
    return (future - now) % 60;
}

