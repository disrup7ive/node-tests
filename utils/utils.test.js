const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25).toBeA('number');
      done();
    });
  });
});

// should verify first and last names are set
// assert it includes firstName and LastName with proper values
it('should set firstName and LastName', () => {
  var user = {location: 'London', age: 47};
  var res = utils.setName(user, 'Alpha Beta');

  expect(res).toInclude({
    firstName: 'Alpha',
    lastName: 'Beta'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'disruptive'}).toNotEqual({name: 'Disruptive'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Disruptive',
//     age: 47,
//     location: 'London'
//   }).toExclude({
//     age: 48
//   })
// });
