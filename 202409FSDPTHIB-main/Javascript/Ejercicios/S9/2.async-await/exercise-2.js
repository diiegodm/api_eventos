async function getCharacters () {
    //fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
    let res = await fetch('https://rickandmortyapi.com/api/character');
    let characters = await res.json();
    console.log(characters);
}

getCharacters();