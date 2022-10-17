//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click',picture)
function picture(){
  let date = document.querySelector('input').value
  console.log(date)

  fetch(`https://api.nasa.gov/planetary/apod?api_key=qsIl7V3XVGDnDOsAl9Ga7nM4UYaryqxl665Bo96G&date=${date}`)//query parameter depends what location 
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    document.querySelector('img').src = data.url
    document.querySelector('h3').innerText = data.explanation
  })
  .catch((err) => {
           console.log(`error ${err}`);
         });
}