import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);

    this.level = 1;
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }
}
