const helloCallbackFunction = () => {
  console.log("Hello");
};
function repeatHello(helloCallback = helloCallbackFunction) {
  let id = setInterval(helloCallback, 1000);
  setTimeout(() => {
    clearInterval(id);
  }, 5000);
}

repeatHello();
