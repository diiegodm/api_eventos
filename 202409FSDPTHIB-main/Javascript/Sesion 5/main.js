let $title = document.getElementById('title');
$title.innerHTML = '<span style="color: red;">textooo</span>';
//console.log($title);

let $p = document.querySelector('.content');
console.log($p.textContent);
//$p.innerHTML = '<h2>mi subtitulo</h2>';

let $lis = document.querySelectorAll('li');
console.log($lis);

for(let $li of $lis) {
    $li.textContent = 'nuevo contenido';
    $li.style.color = 'pink';
    $li.style.backgroundColor = 'yellow';
    //background-color

    $li.remove();
}



let $catImg = document.querySelector('#catImg');
$catImg.alt = 'nuevo alt';
console.log($catImg.src);
console.log($catImg.alt);

console.log($catImg.dataset.type);
console.log($catImg.className);
console.log($catImg.classList);

$catImg.classList.add('grande');
$catImg.classList.remove('gatito');

let $brownCatImg = document.createElement('img');
$brownCatImg.src = 'https://i0.wp.com/luccalaloca.es/wp-content/uploads/2024/03/Depositphotos_102421784_S.jpg?w=1000&ssl=1';
$brownCatImg.alt = 'gatito marrón precioso';
$brownCatImg.classList.add('gatito');
console.log($brownCatImg);

let $catContainer = document.querySelector('#catContainer');
$catContainer.appendChild($brownCatImg);

