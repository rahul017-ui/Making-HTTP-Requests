const firstReq= new XMLHttpRequest();
firstReq.addEventListener('load',function (){
    console.log('It Worked!!!');
    const data= JSON.parse(this.responseText);
// 
 console.log(data.eye_color);
    // for (let people of data.results){
    //     console.log(people.name);
    // }

});
firstReq.addEventListener('error',()=>{
    console.log('Error!!!!');
});

firstReq.open('GET','https://swapi.dev/api/people/1/');
firstReq.send();
console.log("Request Sent! ");

