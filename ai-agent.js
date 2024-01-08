
fetch('http://localhost:8000/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  },  body: JSON.stringify({
    input: 'Hello, world!'  })
})  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  