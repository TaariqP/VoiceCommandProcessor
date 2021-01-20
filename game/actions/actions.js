const Troll = require("../targets/Troll");

module.exports = {
  attackTrollWithSword(troll, sword) {
    troll.inflictDamage(sword.hitDamage);
    console.log("You inflict", sword.hitDamage, "damage on the troll");
    console.log("The troll now has", troll.health, "health");
  },
};
