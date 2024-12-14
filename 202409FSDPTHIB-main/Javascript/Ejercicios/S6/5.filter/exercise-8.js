let $btn = document.querySelector('button');
$btn.addEventListener('click', showStreamers);


function showStreamers() {
    let $input = document.querySelector('input');
    const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
    let filteredStreamers = streamers.filter(streamer => streamer.name.includes($input.value));    
    console.log(filteredStreamers);
}