var a=10, b=20, c=20;
if(a==b && b==c){
    console.log("All are equal")
}
else if(a==b && a>c){
    console.log("a & b are equal and greater")
}
else if(b==c && b>a){
    console.log("b & c are equal and greater")
}
else if(a>b && a>c){
    console.log("a is greater ")
}
else if(b>c && b>a){
    console.log("b is greater")
}
else if(c>a && c>b){
    console.log("c is greater")
}
