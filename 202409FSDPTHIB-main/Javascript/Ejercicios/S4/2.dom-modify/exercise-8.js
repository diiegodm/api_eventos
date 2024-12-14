let $p = document.createElement('p');
$p.textContent = 'Estoy en medio!';

//Opcion 1
//let $secondDiv = document.querySelector('div:nth-child(2)');
//padre.insertBefore(cosaNueva, cosaDeReferencia);
//$secondDiv.parentNode.insertBefore($p, $secondDiv);

//Opcion 2
let $firstDiv = document.querySelector('div:nth-child(1)');
$firstDiv.after($p);