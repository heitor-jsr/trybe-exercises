const { encode, decode } = require('./encodeDecode.js');

describe('Requisito 1 - verifica função encode:', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });

  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });

  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });

  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });

  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('oi').length).toEqual(2)
  })
})

describe('Requisito 2 - verifica função decode:', () => {
  it('a função dencode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('encode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('converte o número 1 na vogal "a"', () => {
    expect(decode('1n1')).toEqual('ana');
  });

  it('converte o número 2 na vogal "e"', () => {
    expect(decode('2l2')).toEqual('ele');
  });

  it('converte o número 3 na vogal "i"', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });

  it('converte o número 4 na vogal "o"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  it('converte o número 5 na vogal "u"', () => {
    expect(decode('n5')).toEqual('nu');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('oi').length).toEqual(2)
  })
})
