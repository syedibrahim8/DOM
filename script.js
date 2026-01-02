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

// 7. createElement("")
// 8.append()
// let div = document.getElementById("intro");
// console.log(div);
// let heading = document.createElement("h1");
// let text = "hello";
// heading.append(text);
// div.append(heading);

// 9.removeElement()
//  let ul = document.getElementById("fruits")
//  console.log(ul);
// // firstElementChild -> first element of the list
// // firstElementChild.nextElementSibling -> next sibling of first element
//  let li = ul.firstElementChild.nextElementSibling
//  console.log(li);
//  ul.removeChild(li) // -> to remove selected list item

// 10.setAttribute("attributeName","value")
    // let btn = document.getElementById("btn")
    // btn.setAttribute("style","background-color:red")

// 11.getAttribute("attributeName")
    // let btn = document.getElementById("btn")
    // let atr = btn.getAttribute("id")
    // console.log(atr);

// 12.style
    // let btn = document.getElementById("btn")
    // btn.style.color = "white"
    // btn.style.backgroundColor = "red"
    // // btn.style.cssText = "background-color:red" -> another way to add style through DOM

// 13.getComputedStyle("#")
// let btn = document.getElementById("btn")
// let styles = getComputedStyle(btn);
// console.log(styles)
// console.log(styles.background);
// console.log(styles.color);

// 14. cssClasses()
    // let btn = document.getElementById("btn")
    // btn.className = "mybtn cfi" // adds classname with value given & can be used for predefined css with the same class value
    // console.log(btn.classList);
    // btn.classList.remove("cfi") // removes class
    // console.log(btn.classList);
    // btn.classList.replace("mybtn","hibtn"); // replace class name
    // console.log(btn.classList);

























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


