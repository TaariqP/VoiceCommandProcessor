class Troll {
    constructor(name) {
        this.health = 100;
    }

    inflictDamage(damage) {
        this.health -= damage;
    }
}

module.exports = Troll;
