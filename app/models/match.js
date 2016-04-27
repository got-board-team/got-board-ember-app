import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

let Match = Model.extend({
  players: hasMany({ async: true }),
  board: belongsTo("board", { async: false }),
  playersCount: attr("number"),
  round: attr("number"),
});

export default Match;
