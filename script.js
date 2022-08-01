//Operator Functions
add = (a,b) => a+b

subtract = (a,b) => a-b

multiply = (a,b) => a*b

function divide(a,b){
    if(b==0){
        return 'MATH ERROR'
    }else{
        let x = (a/b)
        let z = x.toString()
        if(z.length>=11){
            return Number(z.substring(0,10))
        }else return x
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
            case 'x':
                return multiply(a,b)
                break
                case'÷':
                return divide(a,b)
                break
}
}

//Cache the DOM

const header_h1 = document.querySelector('#header')

const calculatorContainer_div = document.querySelector('#calculatorContainer')

const display_div = document.querySelector('#display')
let displayNumbers_div = document.querySelector('#displayNumbers')

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
const number_buttons_nodes = document.querySelectorAll('.numberButtons')
//Number Buttons Array in numerical Order
const number_buttons = [...number_buttons_nodes].map(a=>a.textContent).sort((a,b)=>a-b)

const plus_button = document.querySelector('#plus')
const minus_button = document.querySelector('#minus')
const multiply_button = document.querySelector('#multiply')
const divide_button = document.querySelector('#divide')
const operators_nodelist = document.querySelectorAll('.operatorButtons')
const operator_buttons = [...operators_nodelist].map(a=>a.textContent)

const decimal_button = document.querySelector('#decimal')
const equal_button = document.querySelector('#equal')

const footer_div = document.querySelector('#footer')


//Variables Needed
let number1
let number2
let operator = 0
let operatorSelected
let decimalSelected =0


// Function to Remove the selected class on operator
function removeOperatorClass(){
    for(let i = 0; i<operators_nodelist.length; i++){
    operators_nodelist[i].classList.remove('selected')
}
}

//Event Listeners to The Buttons

for(let i=0; i<number_buttons.length; i++){
    number_buttons_nodes[i].addEventListener('click', function(){ 
        if(displayNumbers_div.textContent == 0||operatorSelected==1){
        displayNumbers_div.textContent = number_buttons_nodes[i].textContent
        removeOperatorClass()
        operatorSelected=0
        }else if(displayNumbers_div.textContent.length==12){
            displayNumbers_div.textContent = displayNumbers_div.textContent 
        }else{
            displayNumbers_div.textContent += number_buttons_nodes[i].textContent
            removeOperatorClass()
        }
    })
}


//Clear Button
clear_button.addEventListener('click', function(){
    displayNumbers_div.textContent=0
    number1=0
    number2=0
    removeOperatorClass()
    operator=0
    operatorSelected=0
    decimalSelected=0

})

// Delete Button

delete_button.addEventListener('click', function(){
    if(displayNumbers_div.textContent.length>1){
        removeOperatorClass()
    displayNumbers_div.textContent = displayNumbers_div.textContent.slice(0,-1)    
        }else{
            removeOperatorClass()
            displayNumbers_div.textContent = 0
            
            }     
            })

                                            


//Operator Buttons



 for(let i = 0; i<operators_nodelist.length; i++){
    operators_nodelist[i].addEventListener('click', function(){
        equate()
        removeOperatorClass()
        operator = operators_nodelist[i].textContent;
        operators_nodelist[i].classList.toggle('selected')
        operatorSelected = 1
        decimalSelected = 0
        number1 = displayNumbers_div.textContent;
        


    })


}



// Decimal Button
decimal_button.addEventListener('click', function(){

    if(decimalSelected==0){
        displayNumbers_div.textContent += '.'
        decimalSelected = 1
    }
    else{
        displayNumbers_div.textContent = displayNumbers_div.textContent
    }
})



//equalButton
function equate(){
    number2 = displayNumbers_div.textContent 
    if(operator==0){
        displayNumbers_div.textContent = displayNumbers_div.textContent
    }else{
    displayNumbers_div.textContent = operate(operator,Number(number1),Number(number2))
    operatorSelected=1
    }
}


equal_button.addEventListener('click', equate)
