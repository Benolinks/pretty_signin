var fn = document.getElementById("fn");
var ln = document.getElementById("ln");
var sub = document.getElementById("sub");
var wetcom = document.getElementById("wetcom");

sub.addEventListener("click", () => {
  setTimeout(function () {
    wetcom.textContent =
      fn.value + " " + ln.value + " " + "logged in successfully!";
  }, 2000);
});

setInterval(function () {
  wetcom.textContent = "";
  wetcom.textContent.disabled = true;
}, 15000);

function handleSubmit(event) {
  event.preventDefault(); // 🔒 Prevent page refresh
}
