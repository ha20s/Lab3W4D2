let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let btnimg = document.getElementById("imginp")
let container = document.getElementById('container')
let removeall = document.getElementById("remove all")

let url = "https://66e7e6a5b17821a9d9da6f39.mockapi.io/login"

btn.addEventListener("click", function(){ 
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
        
        name : input.value,
        image : btnimg.value

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(data => console.log(data))
 
 });




  removeall.addEventListener('click' , () => {
      fetch(url+`/${id}`, {
        method: 'DELETE',
      });
  })


 fetch(url)
 .then((response) => response.json())
 .then(data => {

        data.map(item => {
        let title = document.createElement("h4")
        let imageContainer = document.createElement("div")
        let img = document.createElement("img")
        let remove = document.createElement("button")


        remove.addEventListener('click', () => {
            fetch(url+`/${item.id}`, {
                method: 'DELETE',
              });

            // console.log('New button clicked!'); 
          });

        
        remove.textContent = "Delete"

        
        title.textContent = item.name,
        img.src = item.image


        img.style.width = "20vh"
        img.style.height = "20vh"
        imageContainer.style.display = "flex"
        imageContainer.style.flexDirection ="column"
        img.style.borderRadius = "25px"
        img.style.padding = "1rem"
        
       
        
       
        container.appendChild(imageContainer)
        imageContainer.appendChild(title)
        imageContainer.appendChild(img)
        imageContainer.appendChild(remove)
    })
 })

 
 //  if (title.textContent = "" ){
//     alert("enter Something")

// } else {
//     title.textContent = item.name
// }
// if (img.src = "" ){
//     alert("enter Something")

// } else {
//     img.src = item.image 
// }


//  .then(Data =>
//     data.map(item=> {
//         let remove = document.createElement("button")

//         fetch(url, {
//          method: 'DELETE',
//         });
//     })
//  )

 
 
 
//  remove.addEventListener('click' {
//     fetch(url, {
//         method: 'DELETE',
//       });
// })


// remove.addEventListener('click', {
//     console.log(item.id)
// })