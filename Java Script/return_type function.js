  // case-1: return data.
  function data(){
    return 333;
}
var x=data();  //function call
console.log(x);


// case-2:return variable.
function variable(a,b){
    var result=a+b;
    return result;
}
var y=variable(2,3);
console.log(y);


// case-3:return expression.
function expression(){
    return 10+89*67/78;
}
console.log(expression());