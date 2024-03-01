
const id=setInterval(() => {
    console.log("Evvarrra meerantha")

}, 1000);

setTimeout(()=>{console.log("entra idhi"); clearInterval(id)},5000)
