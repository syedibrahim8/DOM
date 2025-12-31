// 1.getElementById("")
// console.log(document.getElementById("text"));

// 2.getElementsByClassName("")
// let pTag = document.getElementsByClassName("para")
// console.log(pTag[0],pTag[1]);

// 3.getElementsByTagName("");
// let allPtag = document.getElementsByTagName("p");
// console.log(allPtag[0],allPtag[1],allPtag[2]);

// 4.querySelectorAll("") //querySelector("")-for single tag
// let allTag = document.querySelectorAll("p.font")
// console.log(allTag[0],allTag[1]);

// 5.  _.parentElement - traverse to the parent element by using its child element.
// let list = document.getElementById("list")
// let parentTag = list.parentElement;
// console.log(parentTag);

// 6. _.innerHTML - modify o change tags such as <p> -> <h1> or any other
// let text = document.getElementById("text")
// console.log(text);
// text.innerHTML = "<h1>Hello</h1>"
// console.log(text);

// 7. navigator.geolocation.getCurrentPosition(map=>{},error=>{})
// navigator.geolocation.getCurrentPosition(
//     map=>{
//         const lat = map.coords.latitude
//         const long = map.coords.longitude
//         console.log(`https://www.google.com/maps?q=${lat},${long}`);
//     },
//     error =>{
//         console.log(error);
//     }
// )