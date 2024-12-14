let url = 'https://rickandmortyapi.com/api/character';

/*fetch(url)
    .then(response => {
        response.json()
            .then(data => {
                console.log(data);
                console.log(data.info.count);
            });
    })
    .catch(err => {
        //...
    }) 

console.log('Hola');*/
//Async await
async function getCharacters() {
    let response = await fetch(url);
    let data = await response.json();
    return data.results;
}

async function paintCharacters() {
    let $container = document.querySelector('#charactersContainer');

    let characters = await getCharacters();
    for(let character of characters) {
        let $pill = document.createElement('div');
        $pill.classList.add('character-pill');
        $pill.innerHTML = `
            <div class="character-pill-container">
                <div class="character-header">
                    <img src="${character.image}" />
                </div>
                <div class="character-body">
                    <h4>${character.name}</h4>
                    <span class="character-status">${character.status}</span>
                </div>
            </div>
        `

        $container.appendChild($pill);
    }
}

paintCharacters();