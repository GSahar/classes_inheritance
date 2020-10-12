import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);

    this.level = 1;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }
}
