// Function to perform addition
function add (){
    let sum = 0;
    for (let i = 0 ; i < arguments.length ; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
// Function to perform subtraction
function sub (){
    let ans = arguments[0];
    for (let i = 1 ; i < arguments.length ; i++){
        ans = ans - arguments[i];
    }
    return ans;
    console.log(ans)
}

function mul (){
    let product = 1;
    for (let i = 0 ; i < arguments.length ; i++){
        product = product * arguments[i];
    }
    return product;
}

function div (){
    let rem = arguments[0];
    for (let i = 1 ; i < arguments.length ; i++){
        rem = rem/arguments[i];
    }
    rem = rem.toFixed(3);
    return rem;
}
