function testIsFridayToday() {
    let originalConsoleLog = console.log;
    let consoleOutput = [];
    console.log = (output) => consoleOutput.push(output);

    // Проверка для каждого дня недели
    for(let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(date.getDate() + i);
        Date.now = () => date.getTime();

        isFridayToday();

        let dayOfWeek = date.getDay();
        let expectedOutput;
        switch (dayOfWeek) {
            case 5: // Пятница
                expectedOutput = "Сегодня пятница!";
                break;
            case 4: // Четверг
                expectedOutput = "Завтра пятница!";
                break;
            case 6: // Суббота
                expectedOutput = "Пятница была вчера";
                break;
            default:
                let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
                let dayWord = daysUntilFriday === 1 ? "день" : "дней";
                expectedOutput = `Пятница будет через ${daysUntilFriday} ${dayWord}`;
        }

        console.assert(consoleOutput[i] === expectedOutput, `Expected '${expectedOutput}', but got '${consoleOutput[i]}'`);
    }

    console.log = originalConsoleLog;
}

testIsFridayToday();
