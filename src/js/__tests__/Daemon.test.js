import Daemon from '../Daemon';


test('Criating1 Daemon', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  const result = daemon;

  expect(result).toEqual({
    attack: 10, defence: 40, name: 'Andy', type: 'Daemon', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Daemon', () => {
  try {
    const daemon = new Daemon('Andy', 'Daeon');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Daeon');
  }
});

test('Criating3 Daemon', () => {
  try {
    const daemon = new Daemon('A', 'Daemon');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Bowerman', () => {
  try {
    const daemon = new Daemon('Andyyyyyyyyyy', 'Daemon');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});
