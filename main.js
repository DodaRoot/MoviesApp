const api = 'http://www.omdbapi.com/?s=Iron Man'
const apiKey = 'ef1c0814'
const apiProperties = {
    method: 'GET',
    headers: {
        Authorization: `&apikey=${apiKey}`,
    },
};

fetch(api , apiProperties)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => (console.log(err)))