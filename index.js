

const fetchData = ()=>{

    const div = document.getElementById("container")

    const response = fetch("https://jsonplaceholder.typicode.com/photos")
    .then( response => response.json())
    .then(result => {
        console.log(result[0])

    //     result.forEach((each, index)=>
    //         div.innerHTML += ` 

    //          <div class="card" style="width: 18rem;">
    //     <img src={${each.thumbnailUrl}} class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${each.id}</h5>
    //       <p class="card-text">${each.title}</p>
    //       <a href="#" class="btn btn-primary">Read More</a>
    //     </div>
    //   </div>
    //     `
    //     )
    })


}

fetchData()
