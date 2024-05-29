function testKingSayd() {
    let originalConsoleLog = console.log;
    let consoleOutput = [];
    console.log = (output) => consoleOutput.push(output);

    kingSayd("сегодня хорошая погода");
    console.assert(consoleOutput[0] === 'Король сказал: сегодня хорошая погода', `Expected 'Король сказал: сегодня хорошая погода', but got '${consoleOutput[0]}'`);

    consoleOutput = [];
    kingSayd("Король сказал: завтра будет дождь");
    console.assert(consoleOutput[0] === 'Король сказал: завтра будет дождь', `Expected 'Король сказал: завтра будет дождь', but got '${consoleOutput[0]}'`);

    console.log = originalConsoleLog;
}

testKingSayd();
