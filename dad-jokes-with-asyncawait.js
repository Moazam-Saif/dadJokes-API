const jokeContainer=document.querySelector('.jokes-container');
const jokeGenerator=document.getElementById('joke-generator');
const apiURL="https://icanhazdadjoke.com/";//the link of the api

async function fetchData(){//async and await go hand in hand.
    try{
        //fetch function returns a promise so we wait for it to be completed.
        const response= await fetch(apiURL,{
            headers:{Accept:"application/json",},
        });//header is boiler plate.

        console.log(response);//shows the response from the fetch promise.

        const data=await response.json();//converts the response into json.
        console.log(data);//shows the data json.
        jokeContainer.textContent=data.joke;//from the data we saw that the key 'joke' had the actual joke.
    }
    catch(error){
        jokeContainer.textContent="Can't think of anything at the moment.";
    }
}

jokeGenerator.addEventListener('click',(e)=>{fetchData();});

