const jokeContainer=document.querySelector('.jokes-container');
const jokeGenerator=document.getElementById('joke-generator');
const apiURL="https://icanhazdadjoke.com/";//the link of the api

function fetchData(){
    //fetch function returns a promise
    fetch(apiURL,{
        headers:{Accept:"application/json",},
    })//header is boiler plate.
    .then((res)=>{//the result of the promise is passed to the .then function
        console.log(res);//shows the response from the fetch promise.
        return res.json();//converts the response into json.
    })
    .then((data)=>{//the json converted response is passed onto the next '.then',which contains the data
        console.log(data);//shows the data json.
        jokeContainer.textContent=data.joke;//from the data we saw that the key 'joke' had the actual joke.
    })
    .catch((error)=>{console.log(error);})
}

jokeGenerator.addEventListener('click',(e)=>{fetchData();});

