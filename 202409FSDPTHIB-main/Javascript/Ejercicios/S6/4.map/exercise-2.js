const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

/*
let usernames = users.map(user => {
    if(user.name.charAt(0) === 'A') {
        user.name = 'Anacleto';
    }

    return user.name;
});
*/
let usernames = users.map(user => user.name.charAt(0) === 'A' ? 'Anacleto' : user.name);
console.log(users);
console.log(usernames);