const lbtt = require('./lbtt');

test('100000 returns 0', () => {
    expect(lbtt(100000)).toBe(0);
})
test('200000 returns 1100', () => {
    expect(lbtt(200000)).toBe(1100);
})
test('300000 returns 4600', () => {
    expect(lbtt(300000)).toBe(4600);
})
test('400000 returns 13350', () => {
    expect(lbtt(400000)).toBe(13350);
})
test('800000 returns 54350', () => {
    expect(lbtt(800000)).toBe(54350);
})