const myRemove = require('./script')

describe('Requisito 1:', () => {
  it('Testa se a função retorna o arr esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3)})
})

describe('Requisito 2:', () => {
  it('Testa se a função não retorna o arr indesejado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])})
})

describe('Requisito 1:', () => {
  it('Testa se a função retorna o arr esperado, dado um parametro inexistente no arr', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5)})
})