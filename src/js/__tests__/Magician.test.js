import Magician from '../Magician';


test('Criating1 Magician', () => {
  const magician = new Magician('Andy', 'Magician');
  const result = magician;

  expect(result).toEqual({
    attack: 10, defence: 40, name: 'Andy', type: 'Magician', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Magician', () => {
  try {
    const magician = new Magician('Andy', 'Magcian');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Magcian');
  }
});

test('Criating3 Magician', () => {
  try {
    const magician = new Magician('A', 'Magician');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Magician', () => {
  try {
    const magician = new Magician('Andyyyyyyyyyy', 'Magician');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});
