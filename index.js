// Your code here
function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = `*`) {
    return function(something = `something`) {
        return `You are ${flair}${something}${flair}!`
    }
}

const Calculator = {
    add: function(x, y) {return x + y},
    subtract: function(x, y) {return x - y},
    multiply: function(x, y) {return x * y},
    divide: function(x, y) {return x / y}
}


function actionApplyer(int, arr) {
    let x = int
    for (let instance of arr){
        x = instance(x)

    }
    return x
}