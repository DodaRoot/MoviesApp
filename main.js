const params = {
    headers: {
        'X-RapidAPI-Key' : 'cabb49d3a5msh0d0f0d432adc1adp182d3djsn4bf265adb82f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
}

function searchMovie() {
    let input = document.querySelector('#inputMovie').value
    let url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${input}`
    fetch(url , params)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}   
