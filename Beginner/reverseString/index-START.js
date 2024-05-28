/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//use javascript methods
function reverseString(text) {
    return text.split('').reverse().join('')
}
//es6 spread operator
function reverseString(text) {
    return [...text].reverse().join('')
}

//For-Loop
function reverseString(text) {
    let result = ''
    //loops over str from end to beginning, pushing each i into result
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

//for...of Loop
function reverseString(text) {
    let result = ''

    for (let char of text) {
        //this changes result to push char at front
        result = char + result
    }
    return result
}

//recursive
function reverseString(text) {
    if (text === '') {
        return ''
    }
    else {
        return reverseString(text.substr(1)) + text[0]
    }
}

//reduce method
function reverseString(text) {
    return text.split('').reduce((acc,char) => char + acc, '')
}

//reduce with spread 
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}



module.exports = reverseString