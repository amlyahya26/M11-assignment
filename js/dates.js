//STEP 1
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}
console.log(daysInMonth(2, 2024))
console.log(daysInMonth(7, 2024))

//STEP 2
const date = new Date()
const monthName = date.toLocaleString('default', { month: 'long' })
console.log(`Month name: ${monthName}`)

//STEP 3
function isWeekend(date) {
    const dayOfWeek = date.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
}
const today = new Date()
console.log(`Is today a weekend? ${isWeekend(today)}`)

//STEP 4
function getYesterdayDayOfWeek() {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday.toLocaleString('default', { weekday: 'long' })
}
console.log(`Yesterday was ${getYesterdayDayOfWeek()}`)

//STEP 5
function getFirstLetterOfDayOfWeek() {
    const today = new Date()
    const dayName = today.toLocaleString('default', { weekday: 'long' })
    return dayName.charAt(0)
}
console.log(`First letter of today's day: ${getFirstLetterOfDayOfWeek()}`)
