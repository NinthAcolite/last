function kingSayd(string) {
    if (string.startsWith('Король сказал:')) {
        console.log(string);
    } else {
        console.log('Король сказал: ' + string);
    }
}

kingSayd("сегодня хорошая погода");
