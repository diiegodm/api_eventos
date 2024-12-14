let $btn = document.querySelector('#btnToClick');
$btn.addEventListener('click', btnOnClick);

function btnOnClick(e) {
    alert('me hiciste click!');
    console.log(e);
}