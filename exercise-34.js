function printAsyncName(callback, name) {
  let id = setTimeout(() => {
    callback();
    setTimeout(() => {
      console.log(name);
    }, 2000);
  }, 1000);
}
function hello_name() {
  console.log("hello");
}
printAsyncName(hello_name, "abdullah");
