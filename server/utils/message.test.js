var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should genereate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jen';
    var latitude = 52.70730289999999;
    var longitude = -2.7553268000000344;
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
  });
});
