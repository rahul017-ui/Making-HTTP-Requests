fetch("https://swapi.dev/api/people/1/")
.then((response) => {

if(!response.ok)
throw new Error(`Stratus code error:${response.status}`);

return response.json()

})
.then((data) => {
    console.log(data)
    console.log(data.birth_year)
})
.catch((err)=>{
    console.log("SOMETING WENT WRONG WITH FETCH!");
    console.log(err);
})
// birth_year