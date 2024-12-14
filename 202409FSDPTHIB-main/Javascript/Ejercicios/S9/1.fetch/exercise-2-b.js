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
                    addInfoToDom(value, data);
                });
        });
}

function addInfoToDom(name, data) {
    let $countryDatas = document.querySelectorAll('.country-data');
    for(let $countryData of $countryDatas) {
        $countryData.remove();
    }
    for(let country of data.country) {
        let probability = Math.round(country.probability * 100);
        let msg = `El nombre ${name} tiene un ${probability}% de probabilidad de ser de ${country.country_id}`;
        let $p = document.createElement('p');
        $p.classList.add('country-data');
        $p.textContent = msg;
        document.body.appendChild($p);
    }
}