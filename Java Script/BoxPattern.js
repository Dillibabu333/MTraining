for(var i=0; i<=10;i++){
    var bag=""
    for(var j=0;j<=10;j++){
        if(i==0 || i==10){
            bag +="* ";
        }
        else if(j==0 || j==10){
            bag +="* ";
        }
        else{
            bag +="  "
        }
    }
    console.log(bag);
}