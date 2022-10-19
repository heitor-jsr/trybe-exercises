const sum = require('./sum');

describe('Requisito 1:', () => {
  it('Testa se a função retorna o valor correto', () => {
    expect(sum(5,3)).toBe(8)
  })
})

describe('Requisito 1:', () => {
  it('Testa se a função retorna o valor errado', () => {
    expect(sum(5,2)).not.toBe(8)
  })
})

describe('Requisito 2:', () => {
  it('Testa a mensagem de retorno no caso de erro - caso de um parametro ser num e outro não', () => {
    expect(() => { sum(' ', 1) }).toThrowError(new Error('parameters must be numbers'))
  })
  it('Testa a mensagem de retorno no caso de erro - caso de um parametro ser num e outro não', () => {
    expect(() => { sum(1, ' ') }).toThrowError(new Error('parameters must be numbers'))
  })
  it('Testa a mensagem de retorno no caso de erro - caso de um parametro ser null', () => {
    expect(() => { sum(null, 1) }).toThrowError(new Error('parameters must be numbers'))
  })
  it('Testa a mensagem de retorno no caso de erro - caso de um parametro ser undefined', () => {
    expect(() => { sum(undefined, 1) }).toThrowError(new Error('parameters must be numbers'))
  })
})

describe('Requisito 2:', () => {
  it('Testa a mensagem de retorno no caso de erro - caso de inexistirem parametros', () => {
    expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'))
  })
})