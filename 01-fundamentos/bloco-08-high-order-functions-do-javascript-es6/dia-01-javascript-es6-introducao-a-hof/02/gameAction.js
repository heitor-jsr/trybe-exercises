const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (dragon) => {
  const minDmg = dragon.strength;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonAtk = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonAtk;
};

const warriorDmg = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() * (minDmg * warrior.weaponDmg));
  const warriorAtk = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorAtk;
};

const mageDmg = (mage) => {
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mana = mage.mana;
  const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
  const status = {
    manaSpent: 15,
    demageDealt: mageDamage,
  };
  if (mana < 15) {
    status.manaSpent = 0;
    status.demageDealt = 'Not enough mana...';
  }
  return status;
};

const gameActions = {
  warriorTurn: (warriorDmg) => {
    const warriorDamag = warriorDmg(warrior);
    dragon.healthPoints -= warriorDamag;
    warrior.damage = warriorDamag
  },
  dragonTurn: (dragonDmg) => {
    const dragonDamag = dragonDmg(dragon);
    mage.healthPoints -= dragonDamag;
    warrior.healthPoints -= dragonDamag;
    dragon.damage = dragonDamag;
  },
  mageTurn: (mageDmg) => {
    const mageTurnStats = mageDmg(mage);
    const mageDamageDealt = mageTurnStats.damageDealt;
    mage.damage = mageDamageDealt;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mage.damage;
  },
  turnResults: () => battleMembers,
};


gameActions.warriorTurn(warriorDmg);

gameActions.mageTurn(mageDmg);

gameActions.dragonTurn(dragonDmg);

console.log(gameActions.turnResults());