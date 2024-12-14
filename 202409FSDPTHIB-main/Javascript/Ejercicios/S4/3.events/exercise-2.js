let $input = document.querySelector('input');
$input.addEventListener('focus', showValue);

function showValue() {
    console.log(this.value);
}