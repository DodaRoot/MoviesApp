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
            for(let item of data.results) {
                // In case nothing is there
                if (item.primaryImage == null) { continue }
                if (item.originalTitleText == null) { continue }
                // Operations
                let title = item.originalTitleText.text
                let link = item.primaryImage.url
                let container = document.createElement('div')
                container.setAttribute('class' , 'container')
                let img = document.createElement('img')
                img.src = link
                let text = document.createElement('h3')
                text.innerText = title
                document.body.append(container)
                container.append(img)
                container.append(text)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}   
