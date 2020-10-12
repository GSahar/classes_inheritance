import Zombie from '../Zombie';


test('Criating1 Zombie', () => {
  const zombie = new Zombie('Andy', 'Zombie');
  const result = zombie;

  expect(result).toEqual({
    attack: 40, defence: 10, name: 'Andy', type: 'Zombie', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Zombie', () => {
  try {
    const zombie = new Zombie('Andy', 'Zombi');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Zombi');
  }
});

test('Criating3 Zombie', () => {
  try {
    const zombie = new Zombie('A', 'Zombie');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Zombie', () => {
  try {
    const zombie = new Zombie('Andyyyyyyyyyy', 'Zombie');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});
