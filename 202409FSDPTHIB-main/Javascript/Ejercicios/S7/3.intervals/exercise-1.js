let timerCount = 0;
let timer = setInterval(consoleText, 1000);
function consoleText() {
    timerCount++;
    console.log('Ejecutando vez ' + timerCount);
    if(timerCount === 10) {
        clearInterval(timer);
    }
}