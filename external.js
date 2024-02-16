let searchForm = document.querySelector('.navbar #navbarNav form')
let search = document.querySelector('.navbar #navbarNav form input')
search.addEventListener('submit' , (e) => {
    e.preventDefault
    console.log(search.value)
})
console.log(search)