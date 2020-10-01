const evaluate = exp => {
    const left = exp[0];
    const operation = exp[1];
    const right = exp[2];
    switch(operation){
        case '+':
            return (exp) => parseInt(left) + parseInt(right);
        case '*':
            return (exp) => parseInt(left) * parseInt(right);
        case '-':
            return (exp) => parseInt(left) - parseInt(right);
        case '^':
            return (exp) => Math.pow(parseInt(left), parseInt(right));
        case '/':
            return (exp) => parseInt(left) / parseInt(right);
    }
}

exports.modules = evaluate;