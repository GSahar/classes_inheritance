import Bowerman from '../Bowerman';


test('Criating1 Bowerman', () => {
  const bowerman = new Bowerman('Andy', 'Bowerman');
  const result = bowerman;

  expect(result).toEqual({
    attack: 25, defence: 25, name: 'Andy', type: 'Bowerman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Bowerman', () => {
  try {
    const bowerman = new Bowerman('Andy', 'Bowermn');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Bowermn');
  }
});

test('Criating3 Bowerman', () => {
  try {
    const bowerman = new Bowerman('A', 'Bowerman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Bowerman', () => {
  try {
    const bowerman = new Bowerman('Andyyyyyyyyyy', 'Bowerman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});
