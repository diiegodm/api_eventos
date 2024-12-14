async function getCharacters() {
    //La api ya no existe :'(
    let response = await fetch('https://breakingbadapi.com/api/characters');
    let characters = await response.json();

    for(let character of characters) {
        let $div = document.createElement('div');
        $div.innerHTML = `
            <img src="${character.img}" alt="${character.name}" /> <br/>
            <h4>${character.name}</h4>
        `
        document.body.appendChild($div);
    }
}

getCharacters();