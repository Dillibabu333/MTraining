// // ..............For loop...........
for(var i=1;i<=5;i++){
    console.log(i)
}

const color=["red", "green", "blue"];
for(clr of color){
    console.log(clr);
}

const employee={
    name:"Dilli",
    age:24,
    job:"developer"
}
for(emp in employee){
    console.log(emp+" : " +employee[emp]);
}

// Even numbers
for(var i=0;i<=100;i=i+2){
    console.log(i)
}


// .............While loop............
var i=0;
while(i<=5){
    console.log(i);
    i++;
}


// ............do-while loop............
var i=1;
do{
    console.log(i);
    i++;
}while(i<=5);
