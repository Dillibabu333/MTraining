var epin=1234;
var pin=1234;
var count=0;
var n=epin;
while(n !=0){
    count++;
  
    n=Math.floor(n/10);
};
if(count==4){
if(epin===pin){
    console.log("Correct Password");
}
else{
    console.log("Incorrect Password");
}
}
else{
    console.log("Enter 4 digit password")
}