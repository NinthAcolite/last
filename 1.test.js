const maskPhoneNumbers = (phones) => {
    return phones.map(phone => {
        let lastDotIndex = phone.lastIndexOf('.');
        return phone.slice(0, lastDotIndex + 2) + '****';
    });
}

test('maskPhoneNumbers correctly masks phone numbers', () => {
    let phones = [
        '590.423.4568',
        '650.124.7234',
        '650.507.9879',
        '011.44.1343.529268',
        '011.44.1344.478968',
        '011.44.1644.429267',
        '11.44.1343.52',
        '11.44.1643.52'
    ];

    let expected = [
        '590.423.4****',
        '650.124.7****',
        '650.507.9****',
        '011.44.1343.5****',
        '011.44.1344.4****',
        '011.44.1644.4****',
        '11.44.1343.5****',
        '11.44.1643.5****'
    ];

    expect(maskPhoneNumbers(phones)).toEqual(expected);
});
