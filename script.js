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