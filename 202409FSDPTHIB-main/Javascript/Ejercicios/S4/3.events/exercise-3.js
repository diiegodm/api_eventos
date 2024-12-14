let $input = document.querySelector('input');
$input.addEventListener('input', showValue);

function showValue() {
    console.log(this.value);
}