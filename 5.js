function isFridayToday() {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let daysUntilFriday;

    switch (dayOfWeek) {
        case 5: // Пятница
            console.log("Сегодня пятница!");
            break;
        case 4: // Четверг
            console.log("Завтра пятница!");
            break;
        case 6: // Суббота
            console.log("Пятница была вчера");
            break;
        default:
            daysUntilFriday = (5 - dayOfWeek + 7) % 7;
            let dayWord = daysUntilFriday === 1 ? "день" : "дней";
            console.log(`Пятница будет через ${daysUntilFriday} ${dayWord}`);
    }
}

isFridayToday();
