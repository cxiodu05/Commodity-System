
/**
 * @param {Function} fn 
 * @param {number} delay 
 * @returns {Function}
 * 函数节流,每 delay 毫秒最多触发一次, fn为回调函数, 即真正要执行的函数
 */
export default function throttle(fn, delay) {
    var timer;
    return function () {
        var _this = this;
        var args = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            fn.apply(_this, args);
            timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
        }, delay)
    }
}