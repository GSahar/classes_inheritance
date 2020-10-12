// TODO: write your code here
import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';


try {
  const bowerman = new Bowerman('Andy', 'Bowerman');
  console.log(bowerman);
} catch (err) {
  console.log(`Ошибка ${err.name}: ${err.message}`);
}

try {
  const daemon = new Daemon('Braen', 'Daemon');
  console.log(daemon);
} catch (err) {
  console.log(`Ошибка ${err.name}: ${err.message}`);
}

try {
  const magician = new Magician('Petya', 'Magician');
  console.log(magician);
} catch (err) {
  console.log(`Ошибка ${err.name}: ${err.message}`);
}

try {
  const swordsman = new Swordsman('Varvara', 'Swordsman');
  console.log(swordsman);
} catch (err) {
  console.log(`Ошибка ${err.name}: ${err.message}`);
}

try {
  const undead = new Undead('Masha', 'Undead');
  console.log(undead);
} catch (err) {
  console.log(`Ошибка ${err.name}: ${err.message}`);
}

try {
  const zombie = new Zombie('Pasha', 'Zombie');
  console.log(zombie);
} catch (err) {
  console.log(`Ошибка ${err.name}: ${err.message}`);
}
