// 1. Chiedi all'utente il suo nome

var userName = prompt('Qual è il tuo nome?');

 console.log('Nome: ' + userName);


// 2. Chiedi all'utente il suo cognome

var userSurname = prompt('Qual è il tuo cognome?');

console.log('Cognome: ' + userSurname);


// 3. Chiedi il suo colore preferito

var userFavColor = prompt('Qual è il tuo colore preferito?');

console.log('Colore: ' + userFavColor);

// 4. scrivi sulla pagina: nomecognomecolorepreferito19

var userInfo = userName + userSurname + userFavColor + '19';

console.log(userInfo);

document.getElementById('compila').innerHTML = userInfo;



alert('Attenzione: password insicurissima!!!');
