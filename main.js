var fn = document.getElementById("fn");
var ln = document.getElementById("ln");
var pass = document.getElementById("pass");
var loaders = document.getElementById("loaders")

var sub = document.getElementById("sub");
var wetcom = document.getElementById("wetcom");

sub.addEventListener("click", () => {
    loaders.style.display="none";
    // num = String(pass)
    if (!fn.value) {
        // location.reload()
        console.log("empty")

        wetcom.style.backgroundColor ="red"
        wetcom.textContent ="please Enter  Firtname"

    }else if (!ln.value) {
        console.log("empty")
         wetcom.style.backgroundColor ="red"
        wetcom.textContent ="please Enter Lastname"
    }
    else if (!pass.value){
        console.log("empty")
         wetcom.style.backgroundColor ="red"
        wetcom.textContent ="please Enter password"
        
    }
    else if (pass.value.length < 4) {
        console.log(pass.value.length)
         wetcom.style.backgroundColor ="red"
        wetcom.textContent ="password didnt match"
    }
    
    else{
       
         setTimeout (()=>{
            loaders.style.display="flex";
            loaders.style.animationPlayState="running"
         }, 1000)

  setTimeout(function () {
    loaders.style.animationPlayState="paused"
    loaders.style.display="none"
    wetcom.style.backgroundColor="green"
    wetcom.textContent = "welcome" +" "+
      fn.value + " " + ln.value;
     

  }, 6000);
}
});

setInterval(function () {
     wetcom.style.backgroundColor =""
  wetcom.textContent = "";
  wetcom.textContent.disabled = true;
}, 20000);


function handleSubmit(event) {
  event.preventDefault(); // 🔒 Prevent page refresh
}
