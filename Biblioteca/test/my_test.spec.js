const chai = require('chai');
const letter_myfunction = require('../letter_myfunction');
// const isVowel = letter_myfunction.isVowel;
const isConsonant = letter_myfunction.isConsonant;
const expect = chai.expect;

// describe('isVowel()', () => {
//   it('Deveria retornar true para a letra a', () => {
//     expect(isVowel("a")).to.equal(true);
//   })
// })

describe('isConsonant()', () => {
  it('Deveria retornar true para b', () => {
    expect(isConsonant('b')).to.equal(true);
  });
  it('Deveria retornar false para a', () => {
    expect(isConsonant('a')).to.equal(false);
  })
})
