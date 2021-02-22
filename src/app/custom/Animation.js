import Monster from './Monster';

export default class Animation{
    constructor() {
    this.monsters = [];
  }

  _onMouseEnter(_monster) {
    _monster.hovered = true;

    this.monsters.forEach((monster) => {
      if (!monster.hovered) {
        monster.contract();
      } else {
        monster.expand();
      }
    });
  }

  _onMouseLeave(_monster) {
    _monster.hovered = false;

    if (!this.monsters.some((monster) => monster.hovered)) {
      this.monsters.forEach((mon) => {
        mon.reset();
      });
    }
  }

  async init() {
    const monsterTargets = document.querySelectorAll('.monster');

    monsterTargets.forEach((element) => {
      const monster = new Monster(element);

      this.monsters.push(monster);
    });

    this.monsters.forEach((monster) => {
      monster.element.addEventListener('mouseenter', () => {
        this._onMouseEnter(monster);
      });

      monster.element.addEventListener('mouseleave', () => {
        this._onMouseLeave(monster);
      });
    });
  }
}