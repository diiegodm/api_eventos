
function createUser(username, age) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(age < 18) {
                reject('Menores no, pls');
            } else {
                resolve({
                    id: 1,
                    name: username,
                    age: age
                });
            }
        }, 2000)
    });
}












function ok(user) {
    console.log('El usuario ' + user.name  + ' ha sido creado correctamente');
}

function ko(error) {
    console.error(error);
}

createUser('Antonio', 20)
    .then(ok)
    .catch(ko);
