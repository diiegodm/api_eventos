const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for(let country of countries) {
    let $pill = document.createElement('div');

    /*let $title = document.createElement('h4');
    $title.textContent = country.title;
    $pill.appendChild($title);

    let $img = document.createElement('img');
    $img.src = country.imgUrl;
    $img.alt = country.title;
    $pill.appendChild($img);*/

    $pill.innerHTML = `
        <h4>${country.title}</h4>
        <img src="${country.imgUrl}" alt="${country.title}" />
    `;
    document.body.appendChild($pill);
}