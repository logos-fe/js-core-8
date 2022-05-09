// Date
// Date - зберігає в собі дату час і методи
// const now = new Date()
// console.log(now)

// const date1970 = new Date(0) // січень 1970 UTC+0
// console.log(date1970)

// const date1969 = new Date(-24 * 3600 * 3600)
// timestamp - мітка часу, мілісекунди

// const year2012 = new Date('2012-02-02 12:24:45')
// console.log(year2012)

// new Date(year, month, date, hours, minutes, seconds, milliseconds)
// const year2018 = new Date(2020, 1, 29, 12, 25, 45,12)
// console.log(year2018)

// const now = new Date()

// getFullYear() - рік в 4 цифрах
// getYear() - НЕ ВИКОРИСТОВУВАТИ
// console.log(now.getFullYear())

// getMonth() - від 0 до 11
// console.log(now.getMonth())

// getDate() - день місяця
// console.log(now.getDate())

// getHours() - година
// console.log(now.getHours())

// getMinutes()
// console.log(now.getMinutes())

// getSeconds()
// console.log(now.getSeconds())

// getMilliseconds()
// console.log(now.getMilliseconds())

// getDay() - повертає день тижня від 0 до 6, рахунок починається від неділі
// console.log(now.getDay())

// getUTC - повертає завжди час по UTC+0, не враховуючи літній час
// console.log(now.getUTCHours())

// getTime() - timestamp
// console.log(now.getTime())

// getTimezoneOffset() - таймзона, повертає різницю в хвилинах
// console.log(now.getTimezoneOffset())

// setFullYear(year, [month], [day])
// const newDate = new Date(now.setFullYear(2030))
// console.log(newDate)

// setMonth(month, [day])
// const newDate = new Date(now.setMonth(10))
// console.log(newDate)

// setDate(day) - зміна дня

// setHours(hours, [minutes], [seconds], [milliseconds])
// const newHours = new Date(now.setHours(10, 12, 55))
// console.log(newHours)

// setMinutes(minutes, [seconds], [milliseconds])
// setSeconds(seconds, [milliseconds])
// setMilliseconds(ms)
// setTime(timestamp)

// Date.now() === new Date().getTime()
// console.log(Date.now())

// Timeout, intervals - планування виклику
// setTimeout(function, delay) - виконується один раз після затримки часу
// setInterval(function, delay) - виконується багаторазово із проміжком часу

// console.log('First hello')

// const sayHi = () => {
//   console.log('Hello from timeout')
// }

// setTimeout(sayHi, 5000)
// setTimeout(() => {
//   console.log('Hello from timeout')
// }, 3000)

// console.log('Last hello')

// console.log('First')

// const timerId = setTimeout(() => {
//   console.log('timeout')
// }, 3000)

// clearTimeout(timerId)
// console.log('Last')

// let intervalId = setInterval(() => {
//   console.log('Tik')
// }, 1000)

// setTimeout(() => {
  // clearInterval(intervalId)
  // alert('Stop interval')
// }, 10000)
