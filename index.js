//  GET https://icanhazdadjoke.com


const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");


// Using promise
// const generateJoke = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json() )
//     .then((data) => {
//         jokes.innerHTML = data.joke
//     })

//     .catch((error) => {
//         console.log(error);
//     })
// }

// using async and await
const generateJoke = async () => {

    try {
        
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        };
    
        const res = await fetch("https://icanhazdadjoke.com", setHeader)
        const data =await res.json(); 
        jokes.innerHTML = data.joke;

    } catch (error) {
        console.log(error);
    };


    

    
};




jokeBtn.addEventListener("click", generateJoke);
generateJoke();