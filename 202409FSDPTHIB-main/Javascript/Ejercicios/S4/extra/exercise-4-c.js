const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for(let country of countries) {
    let $pill = document.createElement('div');
    $pill.classList.add('country-pill');

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
        <button class="remove-pill">X</button>
    `;
    document.body.appendChild($pill);

    let $removeBtn = $pill.querySelector('button');
    $removeBtn.addEventListener('click', removeItem);
}

let $btn = document.querySelector('button');
$btn.addEventListener('click', removeLastElement);

function removeLastElement() {
    let $lastPill = document.querySelector('.country-pill:last-child');
    if($lastPill !== null) {
        $lastPill.remove();
    }
}

function removeItem() {
    //this.parentNode.remove();
    this.closest('.country-pill').remove();
}