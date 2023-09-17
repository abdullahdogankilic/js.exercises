async function tempFetch() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  let ids = [];

  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

tempFetch();
