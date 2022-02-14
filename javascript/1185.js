// 泰勒公式
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
/**
 * 
    蔡勒公式对于有过算法训练的同学来说应该比较熟悉，一般刚学编程时候会介绍这个公式，但估计没有人专门背下来。这里做个记录； 其中：
    c 是世纪数减一，也就是年份的前两位。
    y 是年份的后两位。
    m 是月份。m 的取值范围是 3 至 14，因为某年的 1、2 月要看作上一年的 13、14月，比如 2019 年的 1 月 1 日要看作 2018 年的 13 月 1 日来计算。
    d 是日数。
    W = D%7 是结果代表一周中第几天, 0 为周日
    由于最后计算 D 可能为负数，需要处理一下。方法很多：这里由 D 计算式发现减的内容最大为 199 所以可以加上一个大于 199 且是 7 的倍数的数，我随便取一个 210 加上保证结果为正。
 */
var dayOfTheWeek = function(day, month, year) {
    let weeks =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if(month < 3) month +=12, year -= 1
    let y = year % 100, c = (year - y) / 100;
    let d = Math.floor(c / 4) - 2 * c + y + Math.floor(y / 4) + Math.floor(13 * (month + 1) / 5) + day - 1 + 210
    return weeks[Math.floor(d) % 7]
};