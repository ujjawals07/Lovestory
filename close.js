console.log('yo');
function closewindow() {
    window.open("./index.html", "_parent");
  }
  const btnc = document.querySelector("#btnc");
  
  btnc.addEventListener("click", function () {
    closewindow();
    console.log("clicked");
  });