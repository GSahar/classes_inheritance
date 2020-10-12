import Swordsman from '../Swordsman';


test('Criating1 Swordsman', () => {
  const swordsman = new Swordsman('Andy', 'Swordsman');
  const result = swordsman;

  expect(result).toEqual({
    attack: 40, defence: 10, name: 'Andy', type: 'Swordsman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Swordsman', () => {
  try {
    const swordsman = new Swordsman('Andy', 'Sworsman');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Sworsman');
  }
});

test('Criating3 Swordsman', () => {
  try {
    const swordsman = new Swordsman('A', 'Swordsman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Swordsman', () => {
  try {
    const swordsman = new Swordsman('Andyyyyyyyyyy', 'Swordsman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});
