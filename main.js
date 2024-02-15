let movieContainers = document.querySelectorAll('.moviePosters .card')
let movieContainersTitle = document.querySelectorAll('.moviePosters .card .info h2')
let paganationLinks = document.querySelectorAll('.pagination .page-item')

let presetInfo = {
    1 : {
        0 : ['Iron Man' , 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'],
        1 : ['Iron Man 3' , 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg'],
        2 : ['Batman Begins' , 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'],
        3 : ['The Amazing Spiderman 2' , 'https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg'],
        4 : ['Thor' , 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'],
        5 : ['Thor Ragnarok' , 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg'],
    },
    2 : {
        0 : ['Zombie' , 'https://m.media-amazon.com/images/M/MV5BYjhiMjMxZGEtY2VmZC00OTVmLWExNTQtYmUyNjZiNDJlMWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'],
        1 : ['Good Morning, Vietnam' , 'https://m.media-amazon.com/images/M/MV5BOWRhZGQ5ODQtMzUzNi00M2I4LThmZmUtYmQ0NDQzMTkxMWQ0XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg'],
        2 : ['King Kong' , 'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'],
        3 : ['Kong: Skull Island' , 'https://m.media-amazon.com/images/M/MV5BMWUxNjZiNTAtZmMwMi00MmYxLTkxZGEtZWE1MzU0OWFjOTNhXkEyXkFqcGdeQXVyNzk1MzI3MTI@._V1_SX300.jpg'],
        4 : ['Godzilla vs. Kong' , 'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg'],
        5 : ['Godzilla' , 'https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg'],
    },
    3 : {
        0 : ['Dumb and Dumber' , 'https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'],
        1 : ['Dumb and Dumber To' , 'https://m.media-amazon.com/images/M/MV5BMTYxMzA0MzAyMF5BMl5BanBnXkFtZTgwMjMyNjcwMjE@._V1_SX300.jpg'],
        2 : ['Harry Potter and the Sorcerers Stone' , 'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'],
        3 : ['Harry Potter and the Deathly Hallows: Part 2' , 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'],
        4 : ['Harry Potter and the Chamber of Secrets' , 'https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg'],
        5 : ['Harry Potter and the Prisoner of Azkaban' , 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg'],
    },
}

let currentPage = null
function populatePosters (page) {
    let i = 0
    currentPage = page;
    for (let card of movieContainers) {
        card.style.backgroundImage = `url(${presetInfo[page][i][1]})`;
        movieContainersTitle[i].innerText = presetInfo[page][i][0]
        i++
    }
}
populatePosters(1)

paganationLinks[0].addEventListener('click' , () => {
    if (currentPage > 1) {
        currentPage--
        populatePosters(currentPage)
    }
    else {
        populatePosters(3)
    }
})
paganationLinks[1].addEventListener('click' , () => {
    populatePosters(1)
})
paganationLinks[2].addEventListener('click' , () => {
    populatePosters(2)
})
paganationLinks[3].addEventListener('click' , () => {
    populatePosters(3)
})
paganationLinks[4].addEventListener('click' , () => {
    if (currentPage < 3) {
        currentPage++
        populatePosters(currentPage)
    }
    else {
        populatePosters(1)
    }
})

// const api = 'http://www.omdbapi.com/?apikey=ef1c0814'
// let search = "&s=Iron Man"
// fetch(api + search)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => (console.log(err)))