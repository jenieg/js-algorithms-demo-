/* 
Given two or more arrays, write a function that combines
their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// LOOPING THROUGH THE ARRAY

function chunkArray(array, size) {
    let result = []

    for (value of array){

        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        }else{
            lastArray.push(value)
        }
    }

    return result
}

// LOOPING THROUGH THE NUMBER OF CHUNKS

function chunkArray(array, size) {
    let result = []

    let arrayCopy = [...array]

    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }

    return result
}


// USING .SLICE()

function chunkArray(array, size) {
    let result = []

    for (i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }

    return result
}

//RECURSION

function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}


module.exports = chunkArray