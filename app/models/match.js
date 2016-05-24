import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

let Match = Model.extend({
  players: hasMany({ async: true }),
  board: belongsTo("board", { async: false }),
  round: attr("number"),
  numberOfPlayers: attr("number"),
  ironThroneTrack: attr('array', {
    defaultValue() { return ['baratheon', 'lannister', 'stark', 'greyjoy', 'tyrell', 'martell']; }
  }),
  fiefdomsTrack: attr('array', {
    defaultValue() { return ['baratheon', 'lannister', 'stark', 'greyjoy', 'martell', 'tyrell']; }
  }),
  kingsCourtTrack: attr('array', {
    defaultValue() { return ['lannister', 'baratheon', 'stark', 'greyjoy', 'tyrell', 'martell']; }
  }),
});

export default Match;
