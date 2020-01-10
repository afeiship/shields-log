const fn = require('../src');

describe('Basic test', () => {
  test('test development', () => {
    fn({
      title: 'a',
      content: 'b',
      color: '#f00'
    });
    // expect(true).toBe(true);
  });
});
