/*
    Twice as old

    Your function takes two arguments:
    current father's age (years)
    current age of his son (years)
    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((dadYearsOld - sonYearsOld) - sonYearsOld)
}


console.log('Test 1:', twiceAsOld(36, 7)) // output 22
console.log('Test 2:', twiceAsOld(55, 30)) // output 5
console.log('Test 3:', twiceAsOld(42, 21)) // output 0
console.log('Test 4:', twiceAsOld(22, 1)) // output 20
console.log('Test 5:', twiceAsOld(29, 0)) // output 29