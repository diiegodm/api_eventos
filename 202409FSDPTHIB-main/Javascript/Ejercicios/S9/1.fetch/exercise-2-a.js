let $btn = document.querySelector('button');
$btn.addEventListener('click', callApi);

function callApi() {
    let url = 'https://api.nationalize.io?name=';
    let $input = document.querySelector('input');
    let value = $input.value;
    fetch(url + value)
        .then(response => {
            response.json()
                .then(data => {
                    console.log(data);
                });
        });
}