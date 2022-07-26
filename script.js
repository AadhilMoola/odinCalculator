//Operator Functions
add = (a,b) => a+b

subtract = (a,b) => a-b

multiply = (a,b) => a*b

function divide(a,b){
    if(b==0){
        return 'MATH ERROR'
    }else{
        return a/b
    }
}

function operate(operator,a,b){
switch(operator){
    case '+':
        return add(a,b)
        break;
        case '-':
            return subtract(a,b)
            break;
            case '*':
                return multiply(a,b)
                break
                case'/':
                return divide(a,b)
                break
}
}

//Cache the DOM

const header_h1 = document.querySelector('#header')

const calculatorContainer_div = document.querySelector('#calculatorContainer')

const display_div = document.querySelector('#display')

const topButtons_div = document.querySelector('#topButtons')
const clear_button = document.querySelector('#clearButton')
const delete_button = document.querySelector('#deleteButton')

const bottomButtons_div = document.querySelector('#bottomButtons')
const one_button = document.querySelector('#one')
const two_button = document.querySelector('#two')
const three_button = document.querySelector('#three')
const four_button = document.querySelector('#four')
const five_button = document.querySelector('#five')
const six_button = document.querySelector('#six')
const seven_button = document.querySelector('#seven')
const eight_button = document.querySelector('#eight')
const nine_button = document.querySelector('#nine')
const zero_button = document.querySelector('#zero')
const plus_button = document.querySelector('#plus')
const minus_button = document.querySelector('#minus')
const multiply_button = document.querySelector('#multiply')
const divide_button = document.querySelector('#divide')
const decimal_button = document.querySelector('#decimal')
const equal_button = document.querySelector('#equal')

const footer_div = document.querySelector('#footer')