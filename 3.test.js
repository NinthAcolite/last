function testGetInfo() {
    let prices = [
        'Цена товара - 1200$',
        'Стоимость - 500$',
        'Цена не определена', '9999',
        'Ценовая категория - больше 300$',
        'Цена за услугу 500 EUR',
        '150$',
    ];

    let result = getInfo(prices);
    console.assert(result[0] === 3, `Expected 3, but got ${result[0]}`);
    console.assert(result[1] === 4, `Expected 4, but got ${result[1]}`);
}

testGetInfo();
