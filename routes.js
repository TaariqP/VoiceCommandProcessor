const express = require('express');
const TEXT_TO_COMMAND = require('text-to-command-processor');
const { nounToObject } = require('./game/actions/mappings');
const MAPPINGS = require('./game/actions/mappings');
const Sword = require('./game/contexts/Sword');
const Troll = require('./game/targets/Troll');

const router = express.Router();


router.get('/', function(req, res) {
  res.json('This is the home for the voicecommandprocessor');
  const troll = new Troll();
  const sword = new Sword();
  const command_info = TEXT_TO_COMMAND.parse('attack the troll with the sword');
  const directObject = nounToObject(command_info.directObject);
  const indirectObject = nounToObject(command_info.indirectObject);
  MAPPINGS.verbToAction(command_info.action, directObject, indirectObject);
});


module.exports = router;
