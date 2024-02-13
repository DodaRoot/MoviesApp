const api = 'http://www.omdbapi.com/?apikey=ef1c0814'
let search = "&s=Iron Man"
fetch(api + search)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => (console.log(err)))