function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(param="*") {
    return function encourageFunction(para="special") {
        return `You are ${param}${para}${param}!`;
    }
}


const Calculator = {
    add : function(a,b) {
        return a + b;
    },
    subtract : function(a,b) {
        return a - b;
    },
    multiply : function(a,b) {
        return a * b;
    },
    divide : function(a,b) {
        return a / b;
    }
}

console.log(Calculator.add(1,4));


function actionApplyer(int, arr) {
    let newInt = int
    for(let i = 0; i < arr.length; i++) {
        
        newInt = arr[i](newInt);
    }
    return newInt;
}

const arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

actionApplyer(13,arrayOfTransforms);