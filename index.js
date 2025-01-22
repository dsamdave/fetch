

// const fetchData = ()=>{

//     const div = document.getElementById("container")

//     const response = fetch("https://jsonplaceholder.typicode.com/photos")
//     .then( response => response.json())
//     .then(result => {
//         console.log(result[0])

//     //     result.forEach((each, index)=>
//     //         div.innerHTML += ` 

//     //          <div class="card" style="width: 18rem;">
//     //     <img src={${each.thumbnailUrl}} class="card-img-top" alt="...">
//     //     <div class="card-body">
//     //       <h5 class="card-title">${each.id}</h5>
//     //       <p class="card-text">${each.title}</p>
//     //       <a href="#" class="btn btn-primary">Read More</a>
//     //     </div>
//     //   </div>
//     //     `
//     //     )
//     })   


// }

// fetchData()





const rr = { f: "ggg", h: 56}
const rrr = { i: "hhh", h: 100}

const yy = { ...rr, ...rrr }

const { h } = rr

// console.log(h)


const arr1 = [ 1, 2, 3 ]
const arr2 = [ 3, 4, 5 ]
const arr3 = [ ...arr1, ...arr2 ]

console.log(arr3) 



console.log( 1 + 1)


const students1 = [
    {
        id: 1,
        name: "David",
        location: "PH",
        score: 30
    },
    {
        id: 2,
        name: "Joy",
        location: "Lagos",
        score: 40
    },

]
const students2 = [
    {
        id: 1,
        name: "Smart",
        location: "Owerri",
        score: 50
    },

]

const school = [ ...students1, ...students2 ]

const scoree = students2[0].score

const { score } = students2[0]

console.log({score, scoree})


const result = school.filter((each, idx) => {
    return each.location === "PH"
})

const result2 = school.map((each, idx) => {

    return each.name

})

const fetchData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => {
        console.log({result})

        const div = document.querySelector(".row")
        
        result.forEach(each  => {
            console.log(each.name)
        
            div.innerHTML += `
           
             <div class="col-3 card mb-5" style="width: 18rem;">
  <img src="https://imgs.search.brave.com/9UGnG8hUunAdvX043BZdzOJ-C-Pd9uoC2DoZsjYcpR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL3ZpZGVv/SW1hZ2UvY3JlYXRl/LWtpbmRzLW9mLWF2/YXRhci13aXRoLUZv/dG9yLWF2YXRhci1t/YWtlci5wbmc" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${each.name}</h5>
    <p class="card-text">${each.phone}, ${each.email}</p>
    <a blank href=${each.website} class="btn btn-primary">${each.username}</a>
  </div>

            </div>

               

            `
        })
    })
}

fetchData()



