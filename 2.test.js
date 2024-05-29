const maskCardNumbers = (cards) => {
    return cards.map(card => {
        return card.slice(0, 4) + '*****' + card.slice(-4);
    });
}

test('maskCardNumbers correctly masks card numbers', () => {
    let cards = [
        '4000 0012 0056 9499',
        '4000 0013 5456 7379',
        '4000 0014 1456 9869',
        '4000 0015 3466 7859',
        '4000 0016 3556 6899',
        '4000 0017 4456 4699'
    ];

    let expected = [
        '4000*****9499',
        '4000*****7379',
        '4000*****9869',
        '4000*****7859',
        '4000*****6899',
        '4000*****4699'
    ];

    expect(maskCardNumbers(cards)).toEqual(expected);
});
