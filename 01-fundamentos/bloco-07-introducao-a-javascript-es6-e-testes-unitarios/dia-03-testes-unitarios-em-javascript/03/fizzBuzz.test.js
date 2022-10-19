const myFizzBuzz = require('./fizzBuzz');

describe('Requisito 1 - testa os retornos da função em caso de sucesso:', () => {
  it('Testa se a função retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')})
});

describe('Requisito 1 - testa os retornos da função em caso de sucesso:', () => {
  it('Testa se a função retorna fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz')})
});

describe('Requisito 1 - testa os retornos da função em caso de sucesso:', () => {
  it('Testa se a função retorna buzz', () => {
    expect(myFizzBuzz(25)).toMatch('buzz')})
});

describe('Requisito 2 - testa se o parâmetro não é divisivel por 3 ou 5:', () => {
  it('Testa a função em caso de número não divisível por 3 ou 5', () => {
    expect(myFizzBuzz(7)).toBe(7)})
});

describe('Requisito 3 - testa se o parâmetro não é um número:', () => {
  it('Testa a função em caso de parâmetro diferente de número', () => {
    expect(myFizzBuzz('7')).toBeFalsy()})
});