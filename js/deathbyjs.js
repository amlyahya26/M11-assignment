//STEP 1
function sortAlphabetically(inputString) {
    return inputString.split('').sort().join('')
}
console.log(sortAlphabetically('webmaster'))

//STEP 2
function capitalizeWords(inputString) {
    return inputString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
console.log(capitalizeWords('the quick brown fox'))

//STEP 3
function countVowels(inputString) {
    const vowels = 'aeiouAEIOU'
    let vowelCount = 0

    for (const char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++
        }
    }
    return vowelCount
}
console.log(countVowels('The quick brown fox'))

//STEP 4
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }
    return result
}
console.log(generateRandomString(8))

//STEP 5
function longestCountryName(countryNames) {
    return countryNames.reduce((longest, current) => (current.length > longest.length ? current : longest), '')
}
const countries = ['Australia', 'Germany', 'United States of America']
console.log(longestCountryName(countries))

