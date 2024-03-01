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