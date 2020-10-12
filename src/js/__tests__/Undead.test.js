import Undead from '../Undead';


test('Criating1 Undead', () => {
  const undead = new Undead('Andy', 'Undead');
  const result = undead;

  expect(result).toEqual({
    attack: 25, defence: 25, name: 'Andy', type: 'Undead', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Undead', () => {
  try {
    const undead = new Undead('Andy', 'Unded');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Unded');
  }
});

test('Criating3 Undead', () => {
  try {
    const undead = new Undead('A', 'Undead');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Undead', () => {
  try {
    const undead = new Undead('Andyyyyyyyyyy', 'Undead');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});
