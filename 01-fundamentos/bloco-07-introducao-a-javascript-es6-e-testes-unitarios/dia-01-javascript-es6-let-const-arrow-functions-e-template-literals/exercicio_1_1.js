const testingScopre = escopo => {
  if (escopo === true) {
    const ifScope = 'não devo ser atualizada fora fo meu escopo (if)';
    console.log(`${ifScope}. Ótimo, fui atualizada no escopo !`)
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScopre(false)