const Troll = require('../targets/Troll');
const Sword = require('../contexts/Sword');

const ACTIONS = require('./actions');

module.exports = {
verbToAction(verb, target, context) {
    switch (verb) {
        case "attack":
            ACTIONS.attackTrollWithSword(target, context);
    }
},

nounToObject(noun) {
    switch (noun) {
        case 'troll':
            return new Troll();
        case 'sword':
            return new Sword();
    }
}
}